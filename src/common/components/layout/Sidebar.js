import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item sidebar-footer">
		    <p>I built this site with Redux and React. You can get the <a href="https://github.com/caljrimmer/portfolio-redux-app">source code here</a></p>
		  </div>

		  <nav className="sidebar-nav">
		    /*<Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Portfolio</Link>*/
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Portfolio</Link>
		    <Link to="/services" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Servicios</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

		    <p>
				Visita <a href="https://github.com/tomasbarrios">My GitHub Repo</a><br/>
				Visita <a href="https://www.linkedin.com/in/tomasbarrios">My Linkedin</a><br/>
				Visita <a href="https://codepen.com/tomasbarrios">Codepen</a><br/>
		    </p>

		    <p>
		    	React App basada en una idea de <a href="http://www.callumrimmer.co.uk/">Callum Rimmer</a> 
		    </p>

		  </div>

		</div>
    );
  }
}

export default Sidebar;