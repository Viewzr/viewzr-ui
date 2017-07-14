import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class HeaderBar extends Component {
  render() {
  	<script src="https://use.fontawesome.com/d56e0e8fd7.js"></script>
    return (
    <div id='headerBar'>
        <ul class='headerBar'>
          <li><Link to='/'><h3>Logo</h3></Link></li>
          <li><Link to='/browse' ><h3>Browse</h3></Link></li>
          <li><Link to='/creatordashboard' ><h3>Creator Dashboard</h3></Link></li>
          <li><Link to='/profile' ><h3>Profile</h3></Link></li>
        </ul>
      </div>
    );
  }
}
export default HeaderBar;