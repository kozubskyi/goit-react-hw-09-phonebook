import { useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
// Styles
import './Header.scss';
// Components
import Authorization from './Authorization/Authorization';
import UserMenu from './UserMenu/UserMenu';
// Selectors
import { getIsAuthenticated } from '../../redux-toolkit/auth/authSelectors';
// Others
import routes from '../../routes';

const Header = ({ location }) => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));

  const moveTo = pathname => ({
    pathname,
    state: { from: location },
  });

  const navLinkActiveStyle = { color: 'red' };

  return (
    <header className="Header">
      <nav>
        <NavLink exact to={moveTo(routes.home)} className="logo" activeStyle={navLinkActiveStyle}>
          Phonebook
        </NavLink>
        {isAuthenticated ? (
          <NavLink to={moveTo(routes.contacts)} className="contacts-navlink" activeStyle={navLinkActiveStyle}>
            Contacts
          </NavLink>
        ) : (
          <p className="contacts-text">Contacts</p>
        )}
        {isAuthenticated ? <UserMenu /> : <Authorization moveTo={moveTo} navLinkActiveStyle={navLinkActiveStyle} />}
      </nav>
    </header>
  );
};

export default withRouter(Header);
