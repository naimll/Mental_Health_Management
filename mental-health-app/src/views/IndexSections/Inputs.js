import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Inputs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section pb-0 section-components">
          <Container className="mb-5">
            {/* Inputs */}
            <h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Form controls
              </small>
            </div>
            <Row>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input placeholder="Regular" type="text" />
                </FormGroup>
                <FormGroup
                  className={classnames({
                    focused: this.state.searchFocused,
                  })}
                >
                  <InputGroup className="mb-4">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                    <Input
                      placeholder="Search"
                      type="text"
                      onFocus={() => this.setState({ searchFocused: true })}
                      onBlur={() => this.setState({ searchFocused: false })}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input disabled placeholder="Regular" type="text" />
                </FormGroup>
                <FormGroup
                  className={classnames({
                    focused: this.state.birthdayFocused,
                  })}
                >
                  <InputGroup className="mb-4">
                    <Input
                      placeholder="Birthday"
                      type="text"
                      onFocus={() => this.setState({ birthdayFocused: true })}
                      onBlur={() => this.setState({ birthdayFocused: false })}
                    />
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup className="has-success">
                  <Input
                    className="is-valid"
                    placeholder="Success"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="has-danger">
                  <Input
                    className="is-invalid"
                    placeholder="Error Input"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>
          <div className="py-5 bg-secondary">
            <Container>
              {/* Inputs (alternative) */}
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Form controls (alternative)
                </small>
              </div>
              <Row>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      placeholder="Regular"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.searchAltFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative mb-4">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                      <Input
                        placeholder="Search"
                        type="text"
                        onFocus={() =>
                          this.setState({ searchAltFocused: true })
                        }
                        onBlur={() =>
                          this.setState({ searchAltFocused: false })
                        }
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      disabled
                      placeholder="Regular"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.birthdayAltFocused,
                    })}
                  >
                    <InputGroup className="input-group-alternative mb-4">
                      <Input
                        placeholder="Birthday"
                        type="text"
                        onFocus={() =>
                          this.setState({ birthdayAltFocused: true })
                        }
                        onBlur={() =>
                          this.setState({ birthdayAltFocused: false })
                        }
                      />
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" sm="6">
                  <FormGroup className="has-success">
                    <Input
                      className="form-control-alternative is-valid"
                      placeholder="Success"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup className="has-danger">
                    <Input
                      className="form-control-alternative is-invalid"
                      placeholder="Error Input"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </>
    );
  }
}

export default Inputs;
