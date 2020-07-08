import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const skills = [
    ['Python', 'C', 'C++', 'JavaScript', 'GraphQL', 'NodeJS', 'ReactJS', 'Django'],
    ['DRF', 'Redis', 'ExpressJS', 'Heroku', 'Hasura', 'AWS Lambda', 'Serverless', 'SQL'],
    // ['Java', 'CSS', 'Bootstrap4', 'Java', '', 'Git', 'OpenCV', 'Numpy' Golang],
  ];
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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <Row>
                  {skills.map(skillSection => {
                    return (
                      <Col>
                        <ul className="unord-style">
                          {skillSection.map(skill => {
                            return (
                              <li>
                                <Badge className="shadow badge-style">{skill}</Badge>
                              </li>
                            );
                          })}
                        </ul>
                      </Col>
                    );
                  })}
                </Row>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
