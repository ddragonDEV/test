import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import List from './containers/productos';
import Checkout from './containers/checkout';
import NavbarCustom from './components/navbar';
import NBar from './components/announcebar';
import Home from './containers/home'
import Cart from './components/cart';
import { addToItem, removeItem } from './actions';
import './App.scss';
function App() {
  const shoppingCart = useSelector(state => [ ...state.shoppingCart ]);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <Router>
      <NBar />
      <NavbarCustom  />
      <nav style={{ backgroundColor:'#F59D24'}} className="navbar navbar-expand-lg navbar-light ">
        <div><Link style={{ color:'#3d3d3d', fontFamily:'Roboto Condensed, sans-serif', textTransform: 'uppercase', fontWeight: 700}} to={'/'} className="nav-link"> Inicio </Link></div>
        <div><Link style={{ color:'#3d3d3d', fontFamily:'Roboto Condensed, sans-serif', textTransform: 'uppercase', fontWeight: 700}} to={'/productos'} className="nav-link"> Productos </Link></div>
        <div><Button style={{ color:'#3d3d3d', fontFamily:'Roboto Condensed, sans-serif', textTransform: 'uppercase', fontWeight: 700}} variant="link" onClick={() => setShow(true)} >Carrito ({shoppingCart.length})</Button></div>
        <div>
          
        </div>
      </nav>
      <Switch>
        <Route exact path='/cart' component={Checkout} />
        <Route exact path='/productos' component={List} />
        <Route exact path='/' component={Home}/>
       
      </Switch>


    
      <Modal  show={show} handleClose={() => setShow(false)} >
        <Modal.Header style={{backgroundColor:'#F59D24'}}>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:'#F59D24'}}>
        
          <Cart shoppingCart={shoppingCart} onClick={(amiibo) => dispatch(addToItem(amiibo))} onRemove={(amiibo) => dispatch(removeItem(amiibo))} />
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#F59D24'}}>
          <Button variant="danger" onClick={() => setShow(false)}>Cancelar</Button>
          <Link to={'/cart'} className="link"> <Button variant="dark" onClick={() => setShow(false)}> Ir a Checkout </Button> </Link>
        </Modal.Footer>
      </Modal>
      
    </Router>
  );
}

export default App;
