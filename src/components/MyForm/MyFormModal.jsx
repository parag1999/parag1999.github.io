import React from 'react';
import { Modal } from 'react-bootstrap';
import MyForm from './MyForm';

const MyFormModal = props => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: 'bold' }} id="contained-modal-title-vcenter">
          Contact me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyForm />
      </Modal.Body>
    </Modal>
  );
};

export default MyFormModal;
