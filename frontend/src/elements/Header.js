import React, {Component} from 'react';
import './menu.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
     <div>
            <p>List Based</p>
            <Nav>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
              </NavItem>
            </Nav>
            <hr />
            <p>Link Based</p>
            <Nav>
              <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
            </Nav>
          </div>


    );
  }
}


export default Header;