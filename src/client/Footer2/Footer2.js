import payment from './payment.png';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import React from "react";


const Footer = () => {

  return (
    <>
     <footer className="footer-section m-4 text-secondary">
      <Container fluid >
        <Row >
          <p>Except for Brand Partner Items Libas LLC has no association and/or affiliation with the brands whoese items are
            offered for sale on its website/App. <br></br>
            Except for Brand Approved items the authentication is performed independently by Libas LLC. </p>
        </Row>

        <Row className="m-1">
          <div className="col-sm-1"><img src={payment} style={{width:'180px', height:'45px'}}/></div>

        </Row>

        <Row className="mt-4">
        <div className="col-sm-10 small">Lebanon - UAE - USA - Canada</div>
        <div className="col-sm-2 float-end small">2022 - Libas LLC &copy;</div>
        </Row>
        
      </Container>
     </footer>
    </>

  );
}

export default Footer;