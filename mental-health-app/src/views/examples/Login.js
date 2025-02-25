import React, { useRef } from "react";


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

// core components 
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

const Login = () => {
  const mainRef = useRef(null);

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
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span className="btn-inner--icon mr-1">
                          <img alt="..." src={require("../../assets/img/icons/common/github.svg").default} />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button className="btn-neutral btn-icon ml-1" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
                        <span className="btn-inner--icon mr-1">
                          <img alt="..." src={require("../../assets/img/icons/common/google.svg").default} />
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
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                          <Input placeholder="Password" type="password" autoComplete="off" />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input className="custom-control-input" id="customCheckLogin" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheckLogin">
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
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
