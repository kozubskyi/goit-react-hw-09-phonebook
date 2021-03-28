import React from 'react';
import { NavLink } from 'react-router-dom';
// Styles
import './Authorization.scss';
// Others
import routes from '../../../routes';

const Authorization = ({ moveTo, navLinkActiveStyle }) => (
  <div className="register-login-block">
    <NavLink to={moveTo(routes.register)} className="navlink register-navlink" activeStyle={navLinkActiveStyle}>
      Register
    </NavLink>
    <NavLink to={moveTo(routes.login)} className="navlink login-navlink" activeStyle={navLinkActiveStyle}>
      Login
    </NavLink>
  </div>
);

export default Authorization;
