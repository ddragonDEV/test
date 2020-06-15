import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

const ContenedorPromociones = ({ brand }) => (
<Container>
  <Row style={{ color:'#3d3d3d', fontFamily:'Roboto Condensed, sans-serif', textTransform: 'uppercase', fontWeight: 700, justifyContent:'center'}} >
  <h4>CONOCE NUESTROS PRODUCTOS</h4>
    
  </Row>
  <br></br>
  <Row>
    
  <Col xs={12} md={3}>
    <img style={{width:'100%'}} src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/home/280x280_metroid_amiibo.png"/>
    </Col>
    <Col xs={6} md={3}>
    <img style={{width:'100%'}} src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/home/280x280_daruk_amiibo.png"/>
    </Col>
    <Col xs={6} md={3}>
    <img style={{width:'100%'}} src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/home/280x280_plagueKnight_amiibo.png"/>
    </Col>
    <Col xs={6} md={3}>
    <img style={{width:'100%'}} src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/home/280x280_goomba_amiibo.png"/>
    </Col>

  </Row>
  <br></br>
  <Row style={{ color:'#3d3d3d', fontFamily:'Roboto Condensed, sans-serif', textTransform: 'uppercase', fontWeight: 700, justifyContent:'center'}} >
  <Button href="/productos" variant="warning" size="lg" > Ver Productos</Button>
    
  </Row>
  </Container>

)

export default ContenedorPromociones;