import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HeaderBar extends Component {
    render() {
        return (
            <div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="/">Viewzr</a>
						</div>
						<ul className="nav navbar-nav">
							<li><Link to="/browse">Browse</Link></li>
							<li><Link to="/creator-dashboard">Creator Dashboard</Link></li>
							<li className="dropdown">
								<Link to="/profile" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-user"></i>
									<span className="caret"></span></Link>
								<ul className="dropdown-menu">
									<li><Link to="/profile">Dashboard</Link></li>
									<li><Link to="/profile">Account</Link></li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
            </div>
        );
    }
}
export default HeaderBar;