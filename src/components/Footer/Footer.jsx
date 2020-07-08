import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <hr />
        <p className="footer__text">
          <a href="https://github.com/parag1999" target="_blank" rel="noopener noreferrer">
            Designed by Parag Vaid
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
