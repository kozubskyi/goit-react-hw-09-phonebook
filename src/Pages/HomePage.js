import { useSelector } from 'react-redux';
// Styles
import './HomePage.scss';
// Selectors
import { getIsAuthenticated } from '../redux-toolkit/auth/authSelectors';

const HomePage = () => {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));

  return (
    <>
      <h2 className="HomePage-title">
        Wellcome! {isAuthenticated ? 'You are already registered.' : 'Before start you should register or login.'}
      </h2>
    </>
  );
};

export default HomePage;
