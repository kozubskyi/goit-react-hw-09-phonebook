//* HOOKS

import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Operations
import { register } from '../redux-toolkit/auth/authOperations';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();

    dispatch(register({ name, email, password }));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className="register-form-title">Register form</h2>
      <form className="register-form" /*autoComplete="off"*/ onSubmit={onFormSubmit}>
        <div className="block name-block">
          <label htmlFor="register-name">Name</label>
          <input type="text" name="name" id="register-name" value={name} required onChange={handleNameChange} />
        </div>
        <div className="block email-block">
          <label htmlFor="register-email">Email</label>
          <input type="email" name="email" id="register-email" value={email} required onChange={handleEmailChange} />
        </div>
        <div className="block password-block">
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            name="password"
            id="register-password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;

//* CLASS

// import { Component } from 'react';
// import { connect } from 'react-redux';
// // Operations
// import * as authOperations from '../redux-toolkit/auth/authOperations';

// class RegisterPage extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   onFormSubmit = event => {
//     event.preventDefault();

//     this.props.onRegister(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <>
//         <h2 className="register-form-title">Register form</h2>
//         <form className="register-form" autoComplete="off" onSubmit={this.onFormSubmit}>
//           <div className="block name-block">
//             <label for="name">Name</label>
//             <input type="text" name="name" id="name" value={name} required onChange={this.handleInputChange} />
//           </div>
//           <div className="block email-block">
//             <label for="email">Email</label>
//             <input type="email" name="email" id="email" value={email} required onChange={this.handleInputChange} />
//           </div>
//           <div className="block password-block">
//             <label for="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={password}
//               required
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       </>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterPage);
