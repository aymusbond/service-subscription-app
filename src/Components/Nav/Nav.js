import React, {useState} from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Navi = () => {

  const [user, setUser] = useState({});

  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <Navbar>
      <Nav className="ms-auto me-3">
      <NavItem>
          {user?.email}
      </NavItem>
      </Nav>
      <Button className="me-3" hidden="false">Logout</Button>
    </Navbar>
  )
}
