import React, {useState} from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const Navi = () => {

  const [user, setUser] = useState({});

  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  function buttonShowHide()
  {
    let classes = "me-3 ";
    classes += user? "visible" : "invisible";
    return classes;
  }

  return (
    <Navbar>
      <Nav className="ms-auto me-3">
      <NavItem>
          {user?.email}
      </NavItem>
      </Nav>
      <Button className = {buttonShowHide()} onClick={logout}>Logout</Button>
    </Navbar>
  )
}
