import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Selectors
import { getIsAuthenticated } from '../redux-toolkit/auth/authSelectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
