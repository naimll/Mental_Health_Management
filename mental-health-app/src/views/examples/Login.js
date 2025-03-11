import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

const Login = () => {
  const mainRef = useRef(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate email and password fields
  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Handle login by fetching all users and filtering on the client side.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Fetch all users from backend
      fetch("https://localhost:44386/api/Users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((users) => {
          // Find user with matching email and password (password is stored in passwordHash)
          const foundUser = users.find(
            (user) => user.email === email && user.passwordHash === password
          );

          if (foundUser) {
            alert("Login successful!");
            // Optionally, store user data or token in localStorage or context
            navigate("/");
          } else {
            alert("Invalid credentials. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          alert("There was an error during login. Please try again.");
        });
    }
  };

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef}>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container
            className="pt-lg-7 px-4 py-5"
            style={{
              maxWidth: "500px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "20px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Row className="justify-content-center">
              <Col lg="12">
                <Card className="bg-white shadow-lg border-0 rounded-lg">
                  <CardHeader className="bg-light text-center pb-4 rounded-top">
                    <div className="text-muted text-center mb-4 mt-2">
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon rounded-pill mx-1 shadow-sm"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/icons/common/facebook.svg")
                                .default
                            }
                          />
                        </span>
                        <span className="btn-inner--text">Facebook</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon rounded-pill mx-1 shadow-sm"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/icons/common/google.svg")
                                .default
                            }
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form" onSubmit={handleSubmit}>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative border rounded-pill">
                          <InputGroupText className="bg-light border-0 rounded-pill">
                            <i className="ni ni-email-83 text-primary" />
                          </InputGroupText>
                          <Input
                            className="border-0"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative border rounded-pill">
                          <InputGroupText className="bg-light border-0 rounded-pill">
                            <i className="ni ni-lock-circle-open text-primary" />
                          </InputGroupText>
                          <Input
                            className="border-0"
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                        {errors.password && (
                          <small className="text-danger">{errors.password}</small>
                        )}
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckLogin"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckLogin"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-4 rounded-pill shadow-sm"
                          color="primary"
                          type="submit"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Login;
