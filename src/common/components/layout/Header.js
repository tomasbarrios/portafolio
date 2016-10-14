import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Digital Craft</a>
			    <small>Desarrollo Web Full Stack de Santiago, Chile</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;