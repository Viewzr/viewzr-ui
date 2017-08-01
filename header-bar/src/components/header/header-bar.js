import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Icon } from 'react-fa';
import Logo from '../../static/images/logo.jpg';


class HeaderBar extends Component {

  render() {
    return (
      <Navbar>
          <Nav>
            <NavItem href='/'><img src={Logo}></img></NavItem>
            <NavItem href='/browse'><h4>Browse</h4></NavItem>
            <NavItem href='/creatordashboard'><h4>Creator Dashboard</h4></NavItem>
            <NavItem href='/profile'><Icon className='profile-icon' name='user'/></NavItem>
          </Nav>
      </Navbar>
    );
  }
}
export default HeaderBar;