import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import classnames from 'classnames';
import {ProjectsPage} from './components/ProjectsPage';
import {LinksPage} from './components/LinksPage';
import './style/bootstrap.css'
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);
  this.state = {
    activeTab: '1'
  };
}

toggle(tab) {
  if (this.state.activeTab !== tab) {
    this.setState({
      activeTab: tab
    });
  }
}

render() {
    return (
      <div>
        <Navbar className="bg-primary">
          <NavbarBrand>Nubuscu.me</NavbarBrand>
        <Nav tabs className="mr-auto">
        <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '1'})}
            onClick={() => { this.toggle('1'); }}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '2'})}
            onClick={() => { this.toggle('2'); }}
            >
              Links
            </NavLink>
          </NavItem>
        </Nav>
        </Navbar>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ProjectsPage/>
          </TabPane>
          <TabPane tabId="2">
            <LinksPage/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;
