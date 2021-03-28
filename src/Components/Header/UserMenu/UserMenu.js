import { useDispatch, useSelector } from 'react-redux';
// Styles
import './UserMenu.scss';
// Selectors
import { getUserEmail } from '../../../redux-toolkit/auth/authSelectors';
// Operations
import { logout } from '../../../redux-toolkit/auth/authOperations';

const UserMenu = () => {
  const email = useSelector(state => getUserEmail(state));

  const dispatch = useDispatch();

  return (
    <div className="UserMenu">
      <p className="user-email">{email}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
