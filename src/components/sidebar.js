import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export class Sidebar extends React.Component {
  render() {
    return (
      <span className="sidebar fill">
        <h2>Nubuscu.me</h2>
        {/* top align this one */}
        <span>
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
        </span>
        {/* bottom align this one */}
        <span>
          <h4>External Links</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="https://github.com/Nubuscu">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/tyler-kennedy-b03280170/">LinkedIn</NavLink>
            </NavItem>
          </Nav>
        </span>
      </span>
    )
  }
}