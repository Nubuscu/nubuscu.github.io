import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Nubuscu.me</h2>
        {/* top align this one */}
        <div>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Spoofy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Project 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Some other third thing</NavLink>
            </NavItem>
          </Nav>
        </div>
        {/* bottom align this one */}
        <div>
          <h4>External Links</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">LinkedIn</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    )
  }
}