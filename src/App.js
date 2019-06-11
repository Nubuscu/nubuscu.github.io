import React, { Component } from 'react';
import {Sidebar} from './components/sidebar'
import {Container, Row, Col} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid="true" className="fill">
        <Row noGutters="true">
          <Col xs="3" className="fill">
            <Sidebar/>
          </Col>
          <Col>
          hello there
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
