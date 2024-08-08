import { useRef, useState, useEffect } from "react";

// Import Redux Stuff
import { addNewRealtor, addRealtorStatus } from "../../api/realtorApiSlice";
import { useDispatch, useSelector } from "react-redux";

// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import Libraries
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const AddRealtor = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue, // Include setValue for handling files
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const addLoading = useSelector(addRealtorStatus);

  const isMounted = useRef(true);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (shouldNavigate && isMounted.current) {
      navigate("/dashboard/realtors");
    }
  }, [shouldNavigate, navigate]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all form data
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const actionResult = await dispatch(addNewRealtor(formData));

    if (addNewRealtor.fulfilled.match(actionResult)) {
      toast.success("Realtor has been added successfully!");
      setTimeout(() => {
        if (isMounted.current) {
          setShouldNavigate(true);
        }
      }, 1500);
    } else if (actionResult.payload) {
      toast.error(actionResult.payload);
    } else {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="dashboradPage">
      <ToastContainer />
      <Container>
        {/* Page Top */}
        <Row>
          <Col lg={12}>
            <div>
              <h2>Add New Realtor</h2>
              <p>You can add new realtors here</p>
            </div>
          </Col>
        </Row>

        {/* Form */}
        <div className="records_data mt-0">
          <Row>
            <Col lg={7}>
              <Form onSubmit={handleSubmit(onSubmit)} className="custom_form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control {...register("name", { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    {...register("phone_number", { required: true })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control {...register("email", { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Facebook Link</Form.Label>
                  <Form.Control
                    {...register("facebook_link", { required: true })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Linkedin Link</Form.Label>
                  <Form.Control
                    {...register("linkedin_link", { required: true })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Instagram Link</Form.Label>
                  <Form.Control
                    {...register("instagram_link", { required: true })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Profile Photo</Form.Label>
                  <Controller
                    control={control}
                    name="image"
                    rules={{ required: "Image is required." }}
                    render={({ field }) => (
                      <>
                        <Form.Control
                          type="file"
                          onChange={(e) => {
                            field.onChange(e.target.files[0]); // Correctly update the file input
                            setValue("image", e.target.files[0], {
                              shouldValidate: true,
                            }); // Validate immediately
                          }}
                        />
                        {errors.image && (
                          <p className="error">{errors.image.message}</p>
                        )}
                      </>
                    )}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    {...register("bio", { required: true })}
                    as="textarea"
                    rows="4"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Is MVP</Form.Label>
                  <Form.Select {...register("is_mvp", { required: true })}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Select>
                </Form.Group>
                <Button
                  className="btn btn-primary btn-md"
                  type="submit"
                  disabled={addLoading === "loading"}
                >
                  {addLoading === "loading" ? "Saving..." : "Save Realtor"}
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AddRealtor;
