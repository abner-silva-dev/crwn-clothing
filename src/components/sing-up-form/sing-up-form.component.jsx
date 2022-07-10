import { useState } from 'react';

import './sing-up-form.style.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.util';

const defaultFomFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SingUpForm = ({ setStatusAlert }) => {
  const [formFields, setFormFields] = useState(defaultFomFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFomFields);
  };

  const handlerSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setStatusAlert({ isOpen: true, message: 'password do not match' });
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      error.code === 'auth/email-already-in-use'
        ? setStatusAlert({
            isOpen: true,
            message: 'cannot create user, email already in use',
          })
        : setStatusAlert({
            isOpen: true,
            message: 'Error trying register user',
          });
      console.error(error);
    }
  };

  const handlerChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="form-box">
      <h2 className="heading-secondary">Don't have an accound?</h2>
      <span className="subheading">Sign Up with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          textLabel="Display name"
          type="text"
          required
          onChange={handlerChange}
          name="displayName"
          value={displayName}
        ></FormInput>
        <FormInput
          textLabel="Email"
          type="email"
          required
          onChange={handlerChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          textLabel="Password"
          type="password"
          required
          onChange={handlerChange}
          name="password"
          value={password}
        ></FormInput>
        <FormInput
          textLabel="Confirm your password"
          type="password"
          required
          onChange={handlerChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SingUpForm;
