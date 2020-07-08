import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/mwkrlrbe',
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Row>
                <Form.Label className="mx-2" column="lg" lg={2}>
                  Name
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    required
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Row>
                <Form.Label className="mx-2" column="lg" lg={2}>
                  Email
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="message">
          <Row>
            <Form.Label className="mx-2" column="lg" lg={2}>
              Message
            </Form.Label>
            <Col>
              <Form.Control
                size="lg"
                as="textarea"
                rows="3"
                placeholder="Enter message"
                name="message"
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Button type="submit" size="lg" variant="outline-primary" disabled={serverState.submitting}>
          Submit
        </Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? 'errorMsg' : ''}>{serverState.status.msg}</p>
        )}
      </Form>
    </Container>
  );
};

export default MyForm;
