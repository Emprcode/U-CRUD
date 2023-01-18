import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CustomModal = ({show, setShow}) => {


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      

      <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ...
        </Modal.Body>
       
      </Modal>
    </>
  );
}
