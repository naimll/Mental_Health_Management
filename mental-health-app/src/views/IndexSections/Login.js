import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
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

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                  A beautiful Design System{" "}
                  <span className="text-white">completed with examples</span>
                </h3>
                <p className="lead text-white">
                  The Design System comes with four pre-built pages to help you
                  get started faster. You can change the text and images and
                  you're good to go. More importantly, looking at them will give
                  you a picture of what you can build with this powerful
                  Bootstrap 4 Design System.
                </p>
                <div className="btn-wrapper">
                  <Button color="success" to="/login-page" tag={Link}>
                    Login Page
                  </Button>
                  <Button
                    className="btn-white"
                    color="default"
                    to="/register-page"
                    tag={Link}
                  >
                    Register Page
                  </Button>
                </div>
              </Col>
              <Col className="mb-lg-auto" lg="5">
                <div className="transform-perspective-right">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("../../assets/img/icons/common/github.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("../../assets/img/icons/common/google.svg")}
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
                      <Form role="form">
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.emailFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupText>
                            <i className="ni ni-email-83" />

                            </InputGroupText>
                            <Input
                              placeholder="Email"
                              type="email"
                              onFocus={() =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={() =>
                                this.setState({ emailFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames({
                            focused: this.state.passwordFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onFocus={() =>
                                this.setState({ passwordFocused: true })
                              }
                              onBlur={() =>
                                this.setState({ passwordFocused: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckLogin2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckLogin2"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
