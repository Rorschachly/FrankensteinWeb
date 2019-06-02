import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {Button} from 'reactstrap';

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Frankenstein</h1>
            <h3 className="d-none d-sm-block">
              Welcome to the world of Frankenstein!
            </h3>
            <Button color="primary" size="lg" href="haha.html">Start the journey</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
