import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="experience">
      <Container>
        <div className="experience-wrapper">
          <Title title="Experience" />
          {experience.map(exp => {
            const { title, info, info2, role, start, end } = exp;
            return (
              <Row>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div
                    className="experience-wrapper__text"
                    style={{ margin: '2rem', width: '100%' }}
                  >
                    <div style={{ display: 'flex' }}>
                      <h3
                        className="experience-wrapper__text-title"
                        style={{ marginRight: 'auto' }}
                      >
                        {title || 'Experience Title'}
                      </h3>
                      <p style={{ marginLeft: 'auto', fontStyle: 'italic', fontWeight: 'bold' }}>
                        {`${start} - ${end}`}
                      </p>
                    </div>
                    <h1 className="experience-wrapper__text-subtitle">
                      {role || 'Experience Title'}
                    </h1>
                    <div>
                      <ul>
                        {info.map(val => {
                          return (
                            <li>
                              <p>{val}</p>
                            </li>
                          );
                        })}
                      </ul>
                      {info2 ? (
                        <p className="mb-4">
                          <strong>Tech Stack: </strong>
                          {info2 || ''}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </Fade>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
