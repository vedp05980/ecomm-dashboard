import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Navbar fixed="bottom" className="bg-dark text-light">
      <Container>
        <Navbar.Text className="text-light text-center w-100">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer