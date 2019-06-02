import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h3 className="title">Made By:</h3>
              <h1 className="title">JL</h1>
            </Col>

            <Col md="3">
              <h3 className="title">Class project for:</h3>
              <h1 className="title">C LIT 240 C</h1>
            </Col>


            <Col md="3">
              <h3 className="title">Follow me:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/Rorschachly"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/jialiang-liu-uw/"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
