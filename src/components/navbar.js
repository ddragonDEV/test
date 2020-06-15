import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const NavbarCustom = ({ brand }) => (
  <Navbar className="justify-content-center" bg="light" expand="lg">
  <Navbar.Brand href="/"><img src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/common/logo-amiibo-glow.png"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

)

export default NavbarCustom;