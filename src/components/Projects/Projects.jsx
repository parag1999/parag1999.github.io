import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Row>
            {projects.map(project => {
              const { title, info, info2, repo } = project;

              return (
                <>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text" style={{ margin: '2rem' }}>
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {info ||
                              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                          <p className="mb-4">
                            <strong>Tech Stack: </strong>
                            {info2 || ''}
                          </p>
                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={repo}
                        >
                          Source Code
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
