import React from 'react';
import { Modal } from 'react-bootstrap';
import './modalStyle.css';

export default props => {
  let { children, onHide, show, keyboard, backdrop } = props;
  return (
    <Modal show={show} backdrop={backdrop} keyboard={keyboard} onHide={onHide}>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
