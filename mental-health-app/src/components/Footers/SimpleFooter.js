import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SimpleFooter = () => {
  return (
    <footer className="footer bg-light text-dark py-5">
      <Container>
        <Row className="align-items-center text-center text-md-left mb-4">
          <Col md="6">
            <h3 className="text-primary font-weight-bold" style={{ color: '#5A9BD5' }}>
              Qendro pozitiv!
            </h3>
            <p className="font-weight-light mb-0">
              Shoqerohu me ne ne rrjetet tona sociale!
            </p>
          </Col>
          <Col className="text-md-right mt-3 mt-md-0" md="6">
            <Button className="btn-icon-only rounded-circle mr-2" color="primary" href="#" id="tooltip-twitter">
              <i className="fa fa-twitter" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip-twitter">
              Follow us on Twitter
            </UncontrolledTooltip>
            <Button className="btn-icon-only rounded-circle mr-2" color="primary" href="#" id="tooltip-facebook">
              <i className="fa fa-facebook" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip-facebook">
              Like us on Facebook
            </UncontrolledTooltip>
            <Button className="btn-icon-only rounded-circle mr-2" color="primary" href="#" id="tooltip-github">
              <i className="fa fa-github" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip-github">
              Star us on GitHub
            </UncontrolledTooltip>
          </Col>
         
        </Row>
        <hr className="my-4 border-light" />
        <Row className="align-items-center">
          <Col md="6" className="text-center text-md-left">
            <p className="mb-0">© {new Date().getFullYear()} UBT. All rights reserved </p>
          </Col>
          <Col md="6">
            <Nav className="nav-footer justify-content-center justify-content-md-end">

           
              <NavItem>
                <NavLink href="#">Kontakto me ne!
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Regjitro humorin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Cakto nje termin!

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Privacy Policy

                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SimpleFooter;
