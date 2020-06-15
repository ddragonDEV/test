import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NBar = ({ brand }) => (
<Nav style={{backgroundColor:"#3d3d3d"}} className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link eventKey="disabled" style={{ color:"#FFF", fontFamily:'Roboto Condensed, sans-serif', textTransform: 'uppercase', fontWeight: 700}}>¡BIENVENIDOS A AMIIBOSTORE, TU TIENDA DE FIGURAS!

</Nav.Link>
    </Nav.Item>
  </Nav>

)

export default NBar;