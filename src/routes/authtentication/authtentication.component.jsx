import './authtentication.style.scss';
import SingUpForm from '../../components/sing-up-form/sing-up-form.component';
import SignInForm from '../../components/sing-in-form/sing-in-form.component';
import AlertPopUp from '../../components/alert-pop-up/alert-pop-up.component';
import { useState } from 'react';

const alertPopUpDefault = {
  isOpen: false,
  message: '',
};

const Authtentication = () => {
  const [statusAlert, setStatusAlert] = useState(alertPopUpDefault);

  return (
    <div className="sing-in-form">
      <div className="container-forms">
        <SignInForm setStatusAlert={setStatusAlert} />
        <SingUpForm setStatusAlert={setStatusAlert} />
      </div>
      <AlertPopUp isOpen={statusAlert.isOpen} statusAlert={setStatusAlert}>
        {statusAlert.message}
      </AlertPopUp>
    </div>
  );
};

export default Authtentication;
