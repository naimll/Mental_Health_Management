import React from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from "reactstrap";
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "65f8d9f0e5b3a5b6d6a3f28a",
      moodEntries: [],
      modalOpen: false,
      quote: "",
      recommendedAction: "",
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (this.refs.main) this.refs.main.scrollTop = 0;
    this.fetchMoodEntries();
  }

  fetchMoodEntries = async () => {
    try {
      const response = await fetch("https://localhost:44386/api/MoodEntries");
      if (!response.ok) {
        throw new Error(`Gabim: ${response.statusText}`);
      }
      const data = await response.json();
      this.setState({ moodEntries: data });
    } catch (error) {
      console.error("Gabim gjatë marrjes së të dhënave:", error);
    }
  };

  handleButtonClick = async (value) => {
    // Define the quotes for each mood.
    const quotes = {
      Stressed: "Merr frymë thellë dhe kujto se çdo sfidë kalon.",
      Anxious:
        "Qëndro i/e fortë, çdo gjë e ke kapërcyer, dhe gjithçka do të kalojë.",
      Sad: "Çdo ditë është një mundësi e re për të gjetur lumturinë.",
      Neutral: "Gjithçka ka rrjedhën e vet – gëzo momentin dhe bëje ç’të ke.",
      Happy: "Uroj të jeni gjithmonë kështu, sepse lumturia juaj ndriçon ditën.",
    };

    // Set the corresponding quote in the state.
    this.setState({ quote: quotes[value], recommendedAction: "" });

    const moodData = {
      id: "",
      userId: this.state.userId,
      mood: value,
      notes: "",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://localhost:44386/api/MoodEntries/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(moodData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gabim: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Të dhënat u ruajtën me sukses:", data);

      // If the API returns a recommendedAction, update it in state.
      if (data.recommendedAction) {
        this.setState({ recommendedAction: data.recommendedAction });
      }

      // Open the modal popup.
      this.setState({ modalOpen: true });
      this.fetchMoodEntries();
    } catch (error) {
      console.error("Gabim gjatë ruajtjes së të dhënave:", error);
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({ modalOpen: !prevState.modalOpen }));
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="mood-page" ref="main">
          <section className="section-profile-cover-2 section-shaped my-0">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col lg="8" className="d-flex justify-content-center mt-5">
                      <div className="card-profile-image text-center">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={require("../../assets/img/staff/mood.gif")}
                            style={{ height: "300px", objectFit: "cover" }}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Altina Salihu <span className="font-weight-light">, 24</span>
                    </h3>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Regjistrimi i përditshëm i humorit ju ndihmon që të jeni më të vetëdijshëm për emocionet tuaja.
                        </p>
                        <div className="moodbutton-container">
                          <Button className="moodbutton mb-3" onClick={() => this.handleButtonClick("Stressed")}>
                            I/E stresuar
                          </Button>
                          <Button className="moodbutton mb-3" onClick={() => this.handleButtonClick("Anxious")}>
                            I/E shqetësuar / me ankth
                          </Button>
                          <Button className="moodbutton mb-3" onClick={() => this.handleButtonClick("Sad")}>
                            I/E mërzitur
                          </Button>
                          <Button className="moodbutton mb-3" onClick={() => this.handleButtonClick("Neutral")}>
                            Neutral
                          </Button>
                          <Button className="moodbutton mb-3" onClick={() => this.handleButtonClick("Happy")}>
                            I/E lumtur
                          </Button>
                        </div>
                        <h4 className="mt-4">Hyrjet e fundit të humorit:</h4>
                        <div className="mood-entries-container">
                          {this.state.moodEntries.map((entry) => (
                            <Card key={entry.id} className="mood-entry shadow-sm p-3 mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <h5>{entry.mood}</h5>
                                {entry.recommendedAction && (
                                  <Badge color="info" className="ml-2">
                                    {entry.recommendedAction}
                                  </Badge>
                                )}
                              </div>
                              <p>
                                <strong>Koha:</strong> {new Date(entry.createdAt).toLocaleString()}
                              </p>
                            </Card>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>

        {/* Modal popup that displays the mood label and recommended action */}
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Detajet e humorit</ModalHeader>
          <ModalBody>
            <p>
              <strong>Mesazh frymëzues:</strong> {this.state.quote}
            </p>
            {this.state.recommendedAction && (
              <p>
                <strong>Rekomandim:</strong> {this.state.recommendedAction}
              </p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Mbyll
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Mood;
