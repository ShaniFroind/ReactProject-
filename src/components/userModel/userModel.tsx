import React, { FC, ReactNode, useEffect } from 'react';
import './userModel.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface UserModelProps {
  children: ReactNode;
  titel: string;
  onClickDescraption: string;
  onClick: () => void;
  onClose: () => void;
}

const UserModel: FC<UserModelProps> = (props: UserModelProps) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);


  return (
    <div className='userModel'>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.titel}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            close
          </Button>
          <Button variant="primary" onClick={props.onClick}>
            {props.onClickDescraption}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserModel;
