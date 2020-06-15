import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { addToCart } from '../actions';
import { Container, Row, Col, Dropdown, InputGroup, FormControl, Pagination, Spinner } from 'react-bootstrap';
import moment from 'moment';

import Cardi from '../components/card';

import './style.scss';

const Productos = () => {
  const dispatch = useDispatch();
  const [typeList, setTypeList] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [amiiboList, setAmiiboList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [pages, setPages] = useState(1);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);

  const [nameFilter, setNameFilter] = useState("");
  const [amiiboFilter, setAmiiboFilter] = useState("");
  const [gameFilter, setGameFilter] = useState("");

  const [sortObj, setSortObj] = useState({ dir: false, variable: 'name'});

  useEffect(() => {
    axios.get('https://www.amiiboapi.com/api/type').then((results) => setTypeList(results.data.amiibo));
    axios.get('https://www.amiiboapi.com/api/gameseries').then((results) => setGameList(results.data.amiibo));
    axios.get('https://www.amiiboapi.com/api/amiiboseries').then((results) => setAmiiboList(results.data.amiibo));
  }, []);

  useEffect(() => {
    setPages(Math.ceil(searchResults.length / 20));
    setCurrent(1);
  }, [searchResults])

  useEffect(() => {
    const temp = [ ...searchResults ];
    temp.sort((item1, item2) => {
      let result;
      if(sortObj.variable === 'release')
        result = moment(item1[sortObj.variable].jp).valueOf() > moment(item2[sortObj.variable].jp).valueOf();
      else
        result = item1[sortObj.variable].toUpperCase() > item2[sortObj.variable].toUpperCase();
      if(sortObj.dir)
        return result ? 1 : -1;
      else
        return result ? -1 : 1;
    });
    setSearchResults(temp);
  }, [sortObj]);

  const getList = (name, variable) => {
    setLoading(true);
    axios.get('https://www.amiiboapi.com/api/amiibo?'+variable+'='+name).then(results => {
      setSearchResults(results.data.amiibo);
      setLoading(false);
    });  
  }

  const addCart = (item) => dispatch(addToCart(item));

  const paginationFn = (item, index) => (index <= (20 * current)) && (index >= (20 * (current - 1)));

  const filter = (item) => {
    if(nameFilter.length > 0 && !item.name.includes(nameFilter)) return false;
    if(gameFilter.length > 0 && !item.gameSeries.includes(gameFilter)) return false;
    if(amiiboFilter.length > 0 && !item.amiiboSeries.includes(amiiboFilter)) return false;
    return true;
  }

  return (
    <div>
      <img style={{width:'100%'}} src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/home/header.png"/>
      <nav style={{marginLeft:30, }} className="nav flex-column">
      <p style={{ color:'#3d3d3d', fontFamily:'Roboto Condensed, sans-serif', textTransform: 'uppercase', fontWeight: 700, justifyContent:'center'}}>Filtros</p>
        <Dropdown>
          
          <Dropdown.Toggle style={{width:'15%'}} variant="warning" id="dropdown-basic">
            { typeList.length === 0 && <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            /> } Por Tipo
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {typeList && typeList.map((item) => 
            <Dropdown.Item onClick={() => getList(item.name, 'type')}>
              {item.name}
            </Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          
          <Dropdown.Toggle style={{width:'15%'}} variant="warning" id="dropdown-basic">
          { gameList.length === 0 && <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />} Por Serie de Juegos
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {gameList && gameList.map((item) => 
            <Dropdown.Item onClick={() => getList(item.name, 'gameseries')}>
              {item.name}
            </Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle style={{width:'15%'}} variant="warning" id="dropdown-basic">
          { amiiboList.length === 0 && <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            /> } Por Colección de Amiibos
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {amiiboList && amiiboList.map((item) => 
            <Dropdown.Item onClick={() => getList(item.name, 'amiiboSeries')}>
              {item.name}
            </Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
      </nav>
      { loading && <div className="pagination"><Spinner animation="grow" size="lg" /></div> }
      { searchResults.length > 0 && !loading && <React.Fragment>
        <nav style={{marginLeft:30, }} className="nav flex-column">
        <Dropdown>
          <Dropdown.Toggle style={{width:'15%'}} variant="warning" id="dropdown-basic">
            Ordenar por:
          </Dropdown.Toggle>
          <Dropdown.Menu> 
            <Dropdown.Item onClick={() => setSortObj({ dir: false, variable: "release" })}>
              Desendiente - Fecha (NA)
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortObj({ dir: true, variable: "release" })}>
              Acendente - Fecha (NA)
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortObj({ dir: false, variable: "name" })}>
              Desendiente - Nombre
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortObj({ dir: true, variable: "name" })}>
              Acendiente - Nombre
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <InputGroup className="mb-1">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Por Nombre:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Texto"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              onChange={(value) => setNameFilter(value.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-1">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Por Juego:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Texto"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              onChange={(value) => setGameFilter(value.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-1">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Por Serie:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Texto"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              onChange={(value) => setAmiiboFilter(value.target.value)}
            />
          </InputGroup>
        </nav>
        <Container>
          <Row sm="1" md="3" lg="2">
            {searchResults && searchResults.filter(filter).filter(paginationFn).map((item) => <Col sm={12} md={6} lg={4}>
              <Cardi amiibo={item} onClick={() => addCart(item)} />
            </Col>)}
          </Row>
        </Container>
        <div className="pagination">
          <Pagination>
            <Pagination.Prev disabled={current === 1} onClick={() => setCurrent(current - 1)} />
            <Pagination.Next disabled={current === pages} onClick={() => setCurrent(current + 1)} />
          </Pagination>
        </div>
      </React.Fragment> }
    </div>
  );
}

export default Productos;