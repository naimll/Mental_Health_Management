import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import { Row, Col } from "reactstrap";

class CustomControls extends React.Component {
  state = {
    simpleValue: 100.0,
    rangeLow: 200.0,
    rangeHigh: 400.0,
  };
  componentDidMount() {
    if (!this.slider1) {
      this.slider1 = this.refs.slider1;
      Slider.create(this.slider1, {
        start: [0.0],
        connect: [true, false],
        step: 0.01,
        range: { min: 100.0, max: 500.0 },
      }).on(
        "update",
        function (values, handle) {
          this.setState({ simpleValue: values[0] });
        }.bind(this)
      );
    }
    
    if (!this.slider2) {
      this.slider2 = this.refs.slider2;
      Slider.create(this.slider2, {
        start: [200.0, 400.0],
        connect: [false, true, false],
        step: 0.01,
        range: { min: 100.0, max: 500.0 },
      }).on(
        "update",
        function (values, handle) {
          this.setState({ rangeLow: values[0], rangeHigh: values[1] });
        }.bind(this)
      );
    }
  }

  componentWillUnmount() {
    if (this.slider1 && this.slider1.noUiSlider) {
      this.slider1.noUiSlider.destroy();
    }
    if (this.slider2 && this.slider2.noUiSlider) {
      this.slider2.noUiSlider.destroy();
    }
  }
  
  render() {
    return (
      <>
        <Row>
          <Col className="mt-4 mt-md-0" lg="3" sm="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">Sliders</small>
            </div>
            <div className="input-slider-container">
              <div className="slider" ref="slider1" />
              <Row className="mt-3 d-none">
                <Col xs="6">
                  <span className="range-slider-value">
                    {this.state.simpleValue}
                  </span>
                </Col>
              </Row>
            </div>
            <div className="mt-5">
              <div className="slider" ref="slider2" />
              <Row className="d-none">
                <Col xs="6">
                  <span className="range-slider-value value-low">
                    {this.state.rangeLow}
                  </span>
                </Col>
                <Col className="text-right" xs="6">
                  <span className="range-slider-value value-high">
                    {this.state.rangeHigh}
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default CustomControls;
