import { useEffect } from "react";

// Import Redux Stuff
import {
  getRealtorDetail,
  singleRealtor,
  singleRealtorStatus,
  updateRealtor,
  updateRealtorStatus,
} from "../../api/realtorApiSlice";
import { useDispatch, useSelector } from "react-redux";

// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Import Libraries
import { useParams, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const EditRealtor = () => {
  const { id } = useParams();
  const realtorId = id;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue, // Include setValue for handling files
  } = useForm();

  const dispatch = useDispatch();

  const realtor = useSelector(singleRealtor);
  const realtorLoading = useSelector(singleRealtorStatus);
  const updateLoading = useSelector(updateRealtorStatus);

  useEffect(() => {
    if (realtorId) {
      dispatch(getRealtorDetail(realtorId));
    }
  }, [dispatch, realtorId]);

  useEffect(() => {
    if (realtor) {
      setValue("name", realtor.name);
      setValue("phone_number", realtor.phone_number);
      setValue("email", realtor.email);
      setValue("facebook_link", realtor.facebook_link);
      setValue("linkedin_link", realtor.linkedin_link);
      setValue("instagram_link", realtor.instagram_link);
      setValue("bio", realtor.bio);
      setValue("is_mvp", realtor.is_mvp);
    }
  }, [realtor, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all form data
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const actionResult = await dispatch(
      updateRealtor({ data: formData, id: realtorId })
    );

    if (updateRealtor.fulfilled.match(actionResult)) {
      toast.success("Realtor has been updated successfully!");
      setTimeout(() => {
        window.location.reload();
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
            <div className="page_top">
              <Link
                className="btn btn-trans btn-sm mb-3"
                to="/dashboard/realtors"
              >
                <span>Back to Realtors</span>
              </Link>
              <h2>Edit Realtor</h2>
              <p>You can edit realtor information here</p>
            </div>
          </Col>
        </Row>

        {/* Form */}
        <div className="records_data mt-0">
          {realtorLoading === "loading" ? (
            "Loading...."
          ) : (
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
                    disabled={updateLoading === "loading"}
                  >
                    {updateLoading === "loading" ? "Saving..." : "Save Realtor"}
                  </Button>
                </Form>
              </Col>
              <Col lg={5}>
                <h6>Current Realtor Image:</h6>
                <Image src={realtor.image} fluid />
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
};

export default EditRealtor;
