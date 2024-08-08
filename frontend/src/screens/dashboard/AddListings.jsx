import { useEffect, useRef, useState } from "react";

// Import Redux Stuff
import {
  getAllRealtors, // Updated import
  allRealtors,
  realtorsStatus,
} from "../../api/realtorApiSlice";
import { addNewListing, addListingStatus } from "../../api/listingApiSlice";
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

const AddListings = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue, // Include setValue for handling files
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const realtors = useSelector(allRealtors);
  const realtorsLoading = useSelector(realtorsStatus);

  const addLoading = useSelector(addListingStatus);

  useEffect(() => {
    if (realtorsLoading === "idle") {
      dispatch(getAllRealtors());
    }
  }, [dispatch]);

  const isMounted = useRef(true);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (shouldNavigate && isMounted.current) {
      navigate("/dashboard/listings");
    }
  }, [shouldNavigate, navigate]);

  // Update onSubmit to handle file uploads
  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all form data
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const actionResult = await dispatch(addNewListing(formData));

    if (addNewListing.fulfilled.match(actionResult)) {
      toast.success("Listing has been added successfully!");
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
              <h2>Add New Listing</h2>
              <p>You can add new listings here</p>
            </div>
          </Col>
        </Row>

        {/* Form */}
        <div className="records_data mt-0">
          <Row>
            <Col lg={12}>
              <Form onSubmit={handleSubmit(onSubmit)} className="custom_form">
                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      {...register("title", { required: "true" })}
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                      {...register("street_address", { required: "true" })}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>City</Form.Label>
                    <Form.Control {...register("city", { required: "true" })} />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      {...register("state", { required: "true" })}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control {...register("zip", { required: "true" })} />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Asking Price</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("price", { required: "true" })}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Square Feet</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("square_feet", { required: "true" })}
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("bedrooms", { required: "true" })}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("bathrooms", { required: "true" })}
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Garage</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("garage", { required: "true" })}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Lot Size</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("lot_size", { required: "true" })}
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Label>Realtor</Form.Label>
                    <Form.Select {...register("realtor", { required: "true" })}>
                      <option disabled>Select Realtor</option>
                      {realtorsLoading === "loading"
                        ? "Loading..."
                        : realtors?.map((r, index) => (
                            <option key={index} value={r._id}>
                              {r.name}
                            </option>
                          ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col lg={6}>
                    <Form.Label>Image</Form.Label>
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
                              console.log("Selected file:", e.target.files[0]); // Debugging log
                            }}
                          />
                          {errors.image && (
                            <p className="error">{errors.image.message}</p>
                          )}
                        </>
                      )}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    {...register("description", { required: "true" })}
                  />
                </Form.Group>

                <Button
                  className="btn btn-primary btn-md"
                  type="submit"
                  disabled={addLoading === "loading"}
                >
                  {addLoading === "loading" ? "Saving..." : "Save Listings"}
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AddListings;
