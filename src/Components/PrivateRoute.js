import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Selectors
import { getIsAuthenticated } from '../redux-toolkit/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));

  return (
    <Route
      {...routeProps}
      render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  );
};

export default PrivateRoute;
