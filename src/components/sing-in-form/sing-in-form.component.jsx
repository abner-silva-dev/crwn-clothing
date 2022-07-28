import {
  // auth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.util';

import { useState } from 'react';
import Button from '../../components/button/button.component';
import FormInput from '../form-input/form-input.component';

import './sing-in-form.style.scss';

const defaultFomFields = {
  email: '',
  password: '',
};

const SignInForm = ({ setStatusAlert }) => {
  const [formFields, setFormFields] = useState(defaultFomFields);
  const { email, password } = formFields;

  const handlerChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async event => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          setStatusAlert({
            isOpen: true,
            message: 'wrong password, try again',
          });
          break;
        case 'auth/user-not-found':
          setStatusAlert({
            isOpen: true,
            message: 'no user associated with this email',
          });
          break;
        case 'auth/too-many-requests':
          setStatusAlert({
            isOpen: true,
            message: 'Many requests, try again later',
          });
          break;
        default:
          setStatusAlert({
            isOpen: true,
            message: 'error',
          });
      }
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    signInWithGooglePopup();
  };

  return (
    <div className="form-box">
      <h2 className="heading-secondary">I already have an account</h2>
      <span className="subheading">Sign in with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          textLabel="email"
          type="email"
          required
          onChange={handlerChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          textLabel="password"
          type="password"
          required
          onChange={handlerChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="form-buttons">
          <Button type="submit">Sing in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
