import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { appBarStyles, containerStyles, buttonStyles } from '../style/Header.style.js'
import { Link } from 'wouter';

const Header = () => {
    return (
        <AppBar position="static" sx={appBarStyles} >
            <Container maxWidth="xl" sx={containerStyles}>
            <Link style={buttonStyles} href="/">Home</Link>
                <Link style={buttonStyles} href="/calculadora">Calculadora</Link>
                <Link style={buttonStyles} href="/lista">Listar Médias</Link>
            </Container>
        </AppBar>
    );
}
export default Header;