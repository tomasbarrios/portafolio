import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  	const portfolio = getPortfolio();
	const RoleRows = (roles) => {
		return roles.map((role) => {
			return (
				<div key={role.title} className="role_wrapper clearfix">
					<p className="role">Role</p>
					<p className="role_title">{role.title}<br />
					<span className="role_skills">{role.skills}</span></p>
				</div>
			)
		});
	}

    const PortfolioRows = portfolio.map((row) => {
    	const classname = classNames('portfolio_item','rombo',row.classname);
        return (
          
          <div key={row.title} className={classname}>
    				<h2><a href={row.link} target="_blank">(visit site)</a> {row.title}</h2>
    				{RoleRows(row.roles)}
    			</div>
        
        )
    });

    return (
        <div>
          <div className="posts container">
            <div className="post banner">
            <p className="post-title">Por Humanos, para humanos </p>
            <h1>Construyo aplicaciones web <em>usables</em>, <em>rápidas</em> y <em>mantenibles</em>.</h1>
            <p>Para <em>agencias</em>, <em>start-ups</em> y <em>Pymes</em>.</p>
          </div>
            

        </div>
          <div className="posts portfolio">
          	{PortfolioRows}
          </div>
        </div>
    );

  }
}

export default Portfolio;