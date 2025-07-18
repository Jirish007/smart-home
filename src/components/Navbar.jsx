// src/components/Navbar.jsx
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <i className="bi bi-house-fill me-2 text-primary"></i>
          Smart Home Services
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
