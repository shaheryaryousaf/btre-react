// import authLoginMutation from '../api/userApiSlice'
// import { setCredentials } from '../api/authSlice';
// import { useDispatch, useSelector } from 'react-redux';

// // Import Bootstrap
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// // Import Libraries
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="authPage">
//       <Container>
//         <Row>
//           <Col lg={5} className="m-auto">
//             <h2>Login to your account</h2>
//             <Form className="custom_form" onSubmit={handleSubmit(onSubmit)}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control {...register("email", { required: true })} />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   {...register("password", { required: true })}
//                 />
//               </Form.Group>
//               <Button className="btn btn-primary btn-md w-100" type="submit">
//                 Login
//               </Button>
//             </Form>

//             <div className="authLinks">
//               <p className="mb-0">
//                 Do not have an account?{" "}
//                 <Link to="/register">Create Account</Link>
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Login;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// // Import Bootstrap
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// // Import Libraries
// import { toast, ToastContainer } from "react-toastify";

// // Redux actions and selectors
// import { setCredentials } from '../api/authSlice';
// import { useLoginMutation } from '../api/userApiSlice';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/";

//   const { userInfo } = useSelector((state) => state.auth);

//   const [login, { isLoading }] = useLoginMutation();

//   const { register, handleSubmit, formState: { errors } } = useForm();

//   useEffect(() => {
//     if (userInfo && !userInfo.type) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);

//   const onSubmit = async (data) => {
//     try {
//       const res = await login(data).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate("/dashboard");
//     } catch (err) {
//       const errorMessage = err?.data?.message || "An unexpected error occurred";
//       toast.error(errorMessage);
//     }
//   };

//   return (
//     <div className="authPage">
//       <ToastContainer />
//       <Container>
//         <Row>
//           <Col lg={5} className="m-auto">
//             <h2>Login to your account</h2>
//             <Form className="custom_form" onSubmit={handleSubmit(onSubmit)}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   {...register("email", { required: "Email is required" })}
//                 />
//                 {errors.email && <p className="text-danger">{errors.email.message}</p>}
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   {...register("password", { required: "Password is required" })}
//                 />
//                 {errors.password && <p className="text-danger">{errors.password.message}</p>}
//               </Form.Group>
//               <Button
//                 className="btn btn-primary btn-md w-100"
//                 type="submit"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Loading..." : "Login"}
//               </Button>
//             </Form>

//             <div className="authLinks">
//               <p className="mb-0">
//                 Do not have an account?{" "}
//                 <Link to="/register">Create Account</Link>
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Import Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import Libraries
import { toast, ToastContainer } from "react-toastify";

// Redux actions and selectors
import { setCredentials, selectedUserInfo } from "../api/authSlice";
import { useLoginMutation } from "../api/userApiSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/dashboard"; // default to dashboard if no redirect

  const userInfo = useSelector(selectedUserInfo);

  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Check if userInfo is present and navigate to the dashboard
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials(res));
      navigate(redirect); // navigate immediately after setting credentials
    } catch (err) {
      const errorMessage = err?.data?.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="authPage">
      <ToastContainer />
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <h2>Login to your account</h2>
            <Form className="custom_form" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Form.Group>
              <Button
                className="btn btn-primary btn-md w-100"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </Form>

            <div className="authLinks">
              <p className="mb-0">
                Do not have an account?{" "}
                <Link to="/register">Create Account</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
