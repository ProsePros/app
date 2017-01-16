/**
 * Created by juanitasoranno on 1/12/17.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className='container'>
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {/*<li><Link to="'/">Homebase</Link></li>*/}
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/register">Create Account</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
