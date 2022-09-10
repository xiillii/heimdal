import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Heimdal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">
                <i className="fas fa-house-user"></i>Home
              </Nav.Link>
              <Nav.Link href="#help">
                <i className="fas fa-circle-question"></i>Help
              </Nav.Link>
              <Nav.Link href="#about">
                <i className="fas fa-circle-info"></i>About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
