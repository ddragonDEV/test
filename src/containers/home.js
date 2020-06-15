import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import BannerP from '../components/banner';
import ContenedorPromociones from '../components/promotions';

const Home = () => (
    <div>
    <BannerP/>
    <ContenedorPromociones />
    </div>
)

export default Home;