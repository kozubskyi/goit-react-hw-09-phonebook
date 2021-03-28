import { Suspense, lazy, useEffect } from 'react';
import { useDispatch /*useSelector*/ } from 'react-redux';
import { Redirect, Route, Switch /*useHistory*/ } from 'react-router-dom';
// Styles
import './App.scss';
// Components
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
// Oprerations
import { getCurrentUser } from './redux-toolkit/auth/authOperations';
//Selectors
// import { getIsAuthenticated } from './redux-toolkit/auth/authSelectors';
// Others
import routes from './routes';
// Pages
const HomePage = lazy(() => import('./Pages/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

const App = () => {
  // const isAuthenticated = useSelector(state => getIsAuthenticated(state));
  const dispatch = useDispatch();
  // const history = useHistory(); // вроде как не нужен

  useEffect(() => {
    dispatch(getCurrentUser());
    // isAuthenticated && history.push(routes.contacts);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PrivateRoute path={routes.contacts} component={ContactsPage} redirectTo={routes.login} />
          <PublicRoute path={routes.register} component={RegisterPage} redirectTo={routes.contacts} restricted />
          <PublicRoute path={routes.login} component={LoginPage} redirectTo={routes.contacts} restricted />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
