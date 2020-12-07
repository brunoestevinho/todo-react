import React from 'react'
import Header from './components/Header'
import App from './App';
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton';

const Layout = () => {
    
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <Header />

            {isAuthenticated && (
                <App />
            )}

            {!isAuthenticated && (
                <LoginButton />
            )}

        </>
    )
}

export default Layout
