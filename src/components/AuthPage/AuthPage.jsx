import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import { authOperations } from '../../redux/auth';
import AuthPhrase from './AuthPhrase';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const notify = () => toast.error('Wow so easy !');

  function restetForm() {
    setEmail('');
    setPassword('');
  }

  const isValidData = () => {
    return email.length > 6 && password.length > 8;
  };

  const handleSubmitLog = e => {
    e.preventDefault();
    if (isValidData()) {
      dispatch(authOperations.logIn({ email, password }));
      restetForm();
      return;
    }
    toast.error('Credentials is not valid');
  };

  const handleSubmitReg = e => {
    if (isValidData()) {
      dispatch(authOperations.register({ email, password }));
      restetForm();
      return;
    }
    toast.error('Credentials is not valid');
  };

  return (
    <section className="section-test">
      <div className="container auth__test">
        <AuthPhrase />
        <div className="form__wrap">
          <form className="form" onSubmit={handleSubmitLog}>
            <p className="form__text">
              You can use your Google Account to authorize:
            </p>
            <a
              href="https://team-project-be.herokuapp.com/auth/google"
              className="btn__google"
            >
              <svg className="btn__google-svg">
                <use href={sprite + '#google'}></use>
              </svg>
              <span className="span__google">Google</span>
            </a>
            <p className="form__text">
              Or login to our app using e-mail and password:
            </p>
            <div className="input__inner">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="email"
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                className="pass"
              />
            </div>
            <div className="btn">
              <button
                type="submit"
                className="btn__sign-in sign__hover"
                onClick={e => handleSubmitLog(e)}
              >
                Sign in
              </button>
              <button
                type="button"
                className="btn__sign-up sign__hover"
                onClick={e => handleSubmitReg(e)}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}
