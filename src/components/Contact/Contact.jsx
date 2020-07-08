import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import MyFormModal from '../MyForm/MyFormModal';

const Contact = () => {
  const { contact, footer } = useContext(PortfolioContext);
  const { cta, btn } = contact;
  const { networks } = footer;
  const [modalShow, setModalShow] = useState(false);
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <Button
              // target="_blank"
              // rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              // href={`mailto:${email}`}
              href="#"
              onClick={() => setModalShow(true)}
            >
              {btn || "Let's Talk"}
            </Button>
            <MyFormModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <div className="social-links">
            {networks &&
              networks.map(network => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name || 'refresh'} fa`} />
                  </a>
                );
              })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
