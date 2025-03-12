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
      userId: "65f8d9f0e5b3a5b6d6a3f28a", // ID e përdoruesit ekzistues
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

  generateObjectId = () => {
    return Math.floor(Math.random() * 100000000000000000000000).toString(16).padStart(24, "0");
  };

  handleButtonClick = async (value) => {
    const quotes = {
      Stressed: "Merr frymë thellë dhe kujto se çdo sfidë kalon.",
      Anxious: "Qëndro i/e fortë, çdo gjë e ke kapërcyer, dhe gjithçka do të kalojë.",
      Sad: "Çdo ditë është një mundësi e re për të gjetur lumturinë.",
      Neutral: "Gjithçka ka rrjedhën e vet – gëzo momentin dhe bëje ç’të ke.",
      Happy: "Uroj të jeni gjithmonë kështu, sepse lumturia juaj ndriçon ditën.",
    };

    this.setState({ quote: quotes[value], recommendedAction: "" });

    const moodData = {
      id: this.generateObjectId(), // Gjeneron një ObjectId valid për MongoDB
      userId: this.state.userId,
      mood: value,
      notes: "",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://localhost:44386/api/MoodEntries", {
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

      if (data.recommendedAction) {
        this.setState({ recommendedAction: data.recommendedAction });
      }

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
        <main className="mood-page" ref={(el) => (this.mainRef = el)}>
  <section className="section">
    <Container>
      <Card className="card-profile shadow mt--300">
        <div className="px-4">
          <Row className="justify-content-center">
            <Col lg="8" className="d-flex justify-content-center mt-8">
              <div className="card-profile-image text-center" ref={(el) => (this.imageContainer = el)}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                  
                    style={{ height: "300px", width: "600px", objectFit: "cover" }}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <h3>Mood Tracker</h3>
          </div>
          <div className="mt-5 py-5 border-top text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <p>Regjistroni humorin tuaj të përditshëm.</p>
                <div className="moodbutton-container">
                  <Button onClick={() => this.handleButtonClick("Stressed")}>I/E stresuar</Button>
                  <Button onClick={() => this.handleButtonClick("Anxious")}>I/E shqetësuar</Button>
                  <Button onClick={() => this.handleButtonClick("Sad")}>I/E mërzitur</Button>
                  <Button onClick={() => this.handleButtonClick("Neutral")}>Neutral</Button>
                  <Button onClick={() => this.handleButtonClick("Happy")}>I/E lumtur</Button>
                </div>
                <h4 className="mt-4">Hyrjet e fundit të humorit:</h4>
                <div className="mood-entries-container">
                  {this.state.moodEntries.map((entry) => (
                    <Card key={entry.id} className="mood-entry shadow-sm p-3 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>{entry.mood}</h5>
                        {entry.recommendedAction && (
                          <Badge color="info">{entry.recommendedAction}</Badge>
                        )}
                      </div>
                      <p><strong>Koha:</strong> {new Date(entry.createdAt).toLocaleString()}</p>
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


        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Detajet e humorit</ModalHeader>
          <ModalBody>
            <p><strong>Mesazh frymëzues:</strong> {this.state.quote}</p>
            {this.state.recommendedAction && (
              <p><strong>Rekomandim:</strong> {this.state.recommendedAction}</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Mbyll</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Mood;