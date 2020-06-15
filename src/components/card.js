import React from 'react';
import { Media, Card, Button } from 'react-bootstrap';
import moment from 'moment';

const Cardi = ({ amiibo, onClick }) => (
  
  <Card style={{ width: '18rem', padding:10,  marginLeft:10, marginTop:10, backgroundColor:"#f59d24", boxShadow: "1px 3px 1px #9E9E9E"}}>
  <Card.Img style={{ marginTop:-49, width:'100%' }}variant="top" src={amiibo.image} />
  <Card.Body>
    <Card.Title>{amiibo.name}</Card.Title>
    <Card.Text>
      Personaje: {amiibo.character}<br/>
      Serie: {amiibo.gameSeries}<br/>
      Colección:  {amiibo.amiiboSeries}<br/>
      Lanzamiento: {moment(amiibo.release.na).format('DD-MM-YYYY')}<br/>
      <span>Precio: {moment(amiibo.release.na).format('YYYY') * Math.floor(Math.random() * 30)} </span>
    </Card.Text>
    <Button variant="dark" size="lg" block type="button" onClick={onClick}>Agregar</Button>
  </Card.Body>
</Card>
);

export default Cardi;