import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!name) {
      errors.name = "Name is required";
      valid = false;
    }

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

    if (!agree) {
      errors.agree = "You must agree to the Privacy Policy";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Account created successfully!");
    }
  };

  return (
    <>
      <DemoNavbar />
      <main>
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
          {/* Container më i rrumbullakosur me hije të butë dhe background të lehtë */}
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
                      <small>Sign up with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon rounded-pill mx-1 shadow-sm"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img alt="..." src={require("../../assets/img/icons/common/facebook.svg").default} />
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
                          <img alt="..." src={require("../../assets/img/icons/common/google.svg").default} />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <Form role="form" onSubmit={handleSubmit}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative border rounded-pill mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="bg-light border-0 rounded-pill">
                              <i className="ni ni-hat-3 text-primary" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="border-0"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </InputGroup>
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative border rounded-pill mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="bg-light border-0 rounded-pill">
                              <i className="ni ni-email-83 text-primary" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="border-0"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative border rounded-pill">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="bg-light border-0 rounded-pill">
                              <i className="ni ni-lock-circle-open text-primary" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="border-0"
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                        />
                        <label className="custom-control-label" htmlFor="customCheckRegister">
                          <span> I agree to the <a href="#!">Privacy Policy</a></span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button className="my-4 rounded-pill shadow-sm" color="primary" type="submit">
                          Create account
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

export default Register;
