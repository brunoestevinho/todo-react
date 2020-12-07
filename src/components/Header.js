import React from 'react'
import App from '../App'
import Nav from 'react-bootstrap/Nav'

//Auth0
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from "./LogoutButton";

const { isAuthenticated } = useAuth0;

const Header = () => {
    
    return(
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <LogoutButton />
        </Nav.Item>
      </Nav>

      <header>
        <h1>Take note !</h1>
      </header>
    </>
    )
}


export default Header
