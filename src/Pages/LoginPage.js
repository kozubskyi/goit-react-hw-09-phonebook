import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Operations
import { login } from '../redux-toolkit/auth/authOperations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();

    dispatch(login({ email, password }));

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className="login-form-title">Login form</h2>
      <form className="login-form" /*autoComplete="off"*/ onSubmit={onFormSubmit}>
        <div className="block email-block">
          <label htmlFor="login-email">Email</label>
          <input type="email" name="email" id="login-email" value={email} required onChange={handleEmailChange} />
        </div>
        <div className="block password-block">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            name="password"
            id="login-password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
