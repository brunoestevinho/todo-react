import React from 'react'
import { Navbar } from 'react-bootstrap';

//Auth0
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from "./LogoutButton";


const Header = () => {
  
  const { user, isAuthenticated } = useAuth0();
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Take Note!</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand>
        {isAuthenticated && (<img className="avatar" src={user.picture} alt="Avatar"/>)}
        </Navbar.Brand>    
        </Navbar.Collapse>
        <LogoutButton />
      </Navbar>
    </>
  )
}

export default Header
