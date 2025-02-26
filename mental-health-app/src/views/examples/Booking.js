import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

const contacts = [
  {
    id: 1,
    name: "Jessica Jones",
    email: "jessica.jones@example.com",
    phone: "+1 123 456 7890",
    image: require("../../assets/img/staff/3.jpg"),
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 987 654 3210",
    image: require("../../assets/img/staff/2.png"),
  },
  {
    id: 3,
    name: "Emily Smith",
    email: "emily.smith@example.com",
    phone: "+1 555 123 4567",
    image: require("../../assets/img/staff/3.jpg"),
  },
  {
    id: 4,
    name: "Emily Smith",
    email: "emily.smith@example.com",
    phone: "+1 555 123 4567",
    image: require("../../assets/img/staff/3.jpg"),
  },
  {
    id: 5,
    name: "Emily Smith",
    email: "emily.smith@example.com",
    phone: "+1 555 123 4567",
    image: require("../../assets/img/staff/3.jpg"),
  },
  {
    id: 6,
    name: "Emily Smith",
    email: "emily.smith@example.com",
    phone: "+1 555 123 4567",
    image: require("../../assets/img/staff/2.png"),
  },
];

const ContactCards = () => {
  return (
    <>
      <DemoNavbar />
      <main className="contact-page">
        <Container className="mt-7">
          <Row>
            {contacts.map((contact) => (
              <Col md="4" key={contact.id} className="mb-4">
                <Card className="shadow">
                  <CardImg top width="100%" src={contact.image} alt={contact.name} />
                  <CardBody>
                    <CardTitle tag="h5">{contact.name}</CardTitle>
                    <CardText>
                      <strong>Email:</strong> {contact.email} <br />
                      <strong>Phone:</strong> {contact.phone}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <SimpleFooter />
    </>
  );
};

export default ContactCards;