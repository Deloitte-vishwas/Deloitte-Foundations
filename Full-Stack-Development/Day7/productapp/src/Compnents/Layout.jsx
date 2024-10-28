import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import { Container } from 'react-bootstrap';
import Footer from './Footer';

function Layout() {
    return ( 
        <>
         <MyNavbar />
        <Container fluid>
        <main>
            <Outlet />
        </main>
        </Container>
        <Footer />
        </>
     );
}

export default Layout;