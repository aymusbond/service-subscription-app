import React, {useState} from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  } from "firebase/auth";
import { auth } from '../../firebase';

export const ModalComponent = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} 
      variant = {props.variant} 
      size="lg" style={{marginRight: "1rem", padding: "0.5rem 3rem"}}> 
      {props.text} </Button>

      <Modal show={show} onHide={handleClose}> 
        <Modal.Header>
          <Modal.Title> Sign Up </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <FormControl type="email" onChange={(event) => {
            setEmail(event.target.value);
          }}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Password</InputGroup.Text>
            <FormControl type="password" onChange={(event) => {
            setPassword(event.target.value);
          }}/>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          {props.text === "Sign Up" ? <Button variant="primary" onClick={register}> {props.text} </Button> : 
          <Button variant="primary" onClick={login}> {props.text} </Button>}
        </Modal.Footer>
      </Modal>
    </>
  )
}
