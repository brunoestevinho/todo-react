import React from 'react'
import Header from './components/Header'
import App from './App';
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton';
import { Container, Row, Col } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';

const Layout = () => {
    
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row className="justify-content-center greet"> 
                    <h1>Hey {user.name}, good to see you!</h1>
                </Row>
                <Row>
                    <Col>
                        {isAuthenticated && (
                            <App />
                        )}

                        {/*Login appears only if not auth*/}
                        <LoginButton />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Layout
