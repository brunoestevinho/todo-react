import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Row, Spinner, Button } from 'react-bootstrap';

const LoginButton = () => {

    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <Row  className="justify-content-center">
                <Spinner animation="border" variant="light" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Row>
            
        )
    }

    return (
        !isAuthenticated && (
        <>
            <Row  className="justify-content-center">
                <header>
                    <h4>Click below to Log in</h4>
                </header>
            </Row>
            
            <Row  className="justify-content-center">
                <Button variant ="light" onClick={() => loginWithRedirect()}> Hey there! {"     "}
                <svg width="2rem" viewBox="0 0 16 16" class="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/>
                    <path fill-rule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/>
                    <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/>
                </svg>
                </Button>
            </Row>
        </>
        )
    )


}

export default LoginButton
