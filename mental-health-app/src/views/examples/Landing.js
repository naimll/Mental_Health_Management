import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import CardsFooter from "../../components/Footers/CardsFooter.js";
import { FaCheckCircle, FaSmile, FaSpa } from "react-icons/fa";
import { FaCity } from "react-icons/fa"; // Ikonë alternative për "ni-istanbul"
import { FaRunning } from "react-icons/fa"; // Ikonë për aktivitet nga React Icons




import Download from "../IndexSections/Download.js";
import { FaGlobe } from "react-icons/fa"; // Alternativë për ikonën e planetit
import { FaBuilding } from "react-icons/fa"; // Ikonë për ndërtesa nga React Icons
import { FaEnvelope } from "react-icons/fa"; // Ikonë për email nga React Icons


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Mirë se vini në <b>MindAI</b>{" "}
                        <span></span>
                      </h1>
                      <p className="lead text-white">
                      Hidhni një hap drejt shëndetit më të mirë mendor. Ne jemi këtu për t'ju mbështetur në udhëtimin tuaj drejt mirëqenies emocionale.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                        
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="/register-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Regjistrohu</span>
                        </Button>
                        {/* <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href=""
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Check out our services
                          </span>
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </div>
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
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                         
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
  <FaCheckCircle size={30} color="#5e72e4" />
</div>
                          
                          <h6 className="text-primary text-uppercase">
                            Terapi
                          </h6>
                          <p className="description mt-3">
                          Psikoterapia ofron përfitime të shumta, duke përfshirë përmirësimin e shëndetit mendor, përmirësimin e çrregullimeve emocionale, 
                          si dhe mundësinë për të fituar vetëbesim e vetëvlerësim.
                          </p>
                          {/* <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div> */}
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/"
                            //onClick={(e) => e.preventDefault()}
                          >
                            Cakto një termin
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
  <FaCity size={30} color="#2dce89" />
</div>

                          <h6 className="text-success text-uppercase">
                            Humori
                          </h6>
                          <p className="description mt-3">
                          Regjistrimi i humorit të përditshëm mund t'ju ndihmojë
                          në përmirësimin e mirëqenies mendore duke ofruar njohuri për shëndetin tuaj emocional me kalimin e kohës.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="/mood-page"
                            onClick={(e) => e.preventDefault()}
                          >
                            Regjistro
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
  <FaGlobe size={30} color="#fb6340" />
</div>

                          <h6 className="text-warning text-uppercase">
                            Mjete relaksimi
                          </h6>
                          <p className="description mt-3">
                          Meditimi ofron përfitime të shumta, duke përfshirë uljen e stresit, 
                          përmirësimin e fokusit, përmirësimin e mirëqenies emocionale dhe një ndjenjë më të madhe paqeje të brendshme dhe vetëdije.
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Mëso më shumë
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
  <FaBuilding size={30} color="#5e72e4" />
</div>

                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Inteligjenca Artificiale</h4>
                      <p className="text-white">
                      Inteligjenca artificiale mund të përmirësojë kujdesin ndaj shëndetit mendor duke ofruar rekomandime të personalizuara të 
                      trajtimit, duke përmirësuar zbulimin e hershëm të çështjeve të shëndetit mendor dhe duke ofruar mbështetje të 
                      shkallëzuar përmes mjeteve të terapisë virtuale.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
  <FaSmile size={30} color="white" />
</div>

                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Zbulimi i hershëm
                          </h5>
                          <p>
                          Algoritmet e IA mund të analizojnë modele në humor, sjellje dhe madje edhe aktivitetin e mediave sociale 
                          për të identifikuar shenjat e hershme të çështjeve të shëndetit mendor si depresioni, 
                          ankthi ose PTSD. Ndërhyrja e hershme mund të ndihmojë në parandalimin e përkeqësimit të gjendjes.
                          </p>
                          {/* <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a> */}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
  <FaRunning size={30} color="white" />
</div>

                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Reduktimi i paragjykimeve
                          </h5>
                          <p>
                          Mjetet e IA shpesh ofrojnë mbështetje anonime, 
                          e cila mund të zvogëlojë stigmën rreth kujdesit për shëndetin mendor dhe të inkurajojë më shumë njerëz të kërkojnë ndihmë.
                          </p>
                          {/* <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a> */}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Njoftohu me anëtarët e ekipit</h2>
                  <p className="lead text-muted">
                    Ideatorët që qëndrojnë prapa këtij projekti që synon të përmirësojë shëndetin mendor dhe të sjellë mirëqenie emocionale.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-5-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Anila Gashi</span>
                        <small className="h6 text-muted">Founder / Data Scientist</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
          
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-6-800x800.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Naim Llumnica</span>
                        <small className="h6 text-muted">
                          Project Manager / Backend Developer
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-5-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Altinë Salihu</span>
                        <small className="h6 text-muted">UI/UX Designer / Frontent Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="danger"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-5-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Jeta Domi</span>
                        <small className="h6 text-muted">Backend Developer / Technical Writer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-5-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alma Novoberdaliu</span>
                        <small className="h6 text-muted">Frontent Developer / Scrum Master</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                       
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-5-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Filiz Gjini</span>
                        <small className="h6 text-muted">Frontent Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="danger"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                      Shumica prej nesh do të dinim si të ndihmonim dikë që pëson një sulm në zemër!
                      </h3>
                      <p className="lead text-white mt-3">
                      Do të fillonim CPR, ose të paktën të telefononim 112. Por shumë pak prej nesh do të dinim reagimin e duhur nëse shohim dikë me atak 
                        paniku ose nëse një mik shfaq shenja të përdorimit të pakontrolluar të alkoolit...
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.mentalhealthfirstaid.org/"
                        size="lg"
                      >
                        Lexo më shumë
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Edhe ju mund të jeni pjesë e ndryshimit</h2>
                  <p className="lead text-white">
                  Ne jemi të përkushtuar për të ofruar mbështetje të cilësisë së lartë të shëndetit mendor për individët në nevojë. 
                  Ne jemi një ekip inovativ i fokusuar në promovimin e mirëqenies dhe ndërgjegjësimit për shëndetin mendor.
                  </p>
                </Col>
              </Row>
              {/* <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row> */}
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Dëshironi t'i bashkangjiteni ekipit tonë?</h4>
                      <p className="mt-0">
                        Ju lusim që të na kontaktoni përmes këtij formulari.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <InputGroupText>
  <FaRunning size={20} />
</InputGroupText>

                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Emri"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <InputGroupText>
  <FaEnvelope size={20} />
</InputGroupText>

                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email adresa"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Mesazhi juaj..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Dërgo
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
