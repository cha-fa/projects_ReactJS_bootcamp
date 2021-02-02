
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import Receipe from './components/Receipe'
import Game from './components/Game'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


const App = () => (
  <Container fluid>
    <Row>
      <Form />
      <Receipe />
    </Row>
    <Row>
      <Game />
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
