import React from "react";

import { Button, Card, Container, Row, Col } from "reactstrap";

import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class Mood extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    // Get the current date
  var currentDate = new Date();

  // Format the date as a string (you can customize the format here)
  var formattedDate = currentDate.toLocaleDateString(); // Format: MM/DD/YYYY

  const handleButtonClick = (value) => {
    // Make an API request to save the button's value
    fetch('https://localhost:44386/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved:', data);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };
    return (
      <>
        <DemoNavbar />
        <main className="mood-page" ref="main">
          <section className="section-profile-cover-2 section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
            </div>
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
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            
                            src={require("../../assets/img/staff/mood.avif")}
                            
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        {/* <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button> */}
                        {/* <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button> */}
                      </div>
                    </Col>
                    
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Jessica Jones{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania 
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Regjistrimi i përditshëm i humorit ju ndihmon që të jeni më të vetëdijshëm për emocionet tuaja, dhe kështu mund t'i kuptoni më mirë ndikimet e faktorëve të jashtëm në shëndetin tuaj mendor. Ju mund të zgjedhni njërën nga 5 kategoritë e mundshme!
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Regjistro humorin për datën: {formattedDate}
                        </a>
                        <div className="moodbutton-container">
                          <button className="moodbutton">I/E stresuar</button>
                          <button className="moodbutton">I/E shqetësuar / me ankth</button>
                          <button className="moodbutton">I/E mërzitur</button>
                          <button className="moodbutton">Neutral</button>
                          <button className="moodbutton">I/E lumtur </button>
                          {/* <button className="moodbutton" onClick={() => handleButtonClick('Stressed')}>I/E stresuar</button>
                          <button className="moodbutton" onClick={() => handleButtonClick('Anxious')}>I/E shqetësuar / me ankth</button>
                          <button className="moodbutton" onClick={() => handleButtonClick('Sad')}>I/E mërzitur</button>
                          <button className="moodbutton" onClick={() => handleButtonClick('Neutral')}>Neutral</button>
                          <button className="moodbutton" onClick={() => handleButtonClick('Happy')}>I/E lumtur</button> */}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        
      </>
    );
  }
}

export default Mood;
