import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { authOperations } from '../../redux/auth';
import AuthPhrase from './AuthPhrase';
import validation from '../Validation/Validation';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function restetForm() {
    setEmail('');
    setPassword('');
  }

  const isValidData = () => {
    try {
      const a = validation.validate({ email, password });
      if (a?.error) {
        toast.error(a.error.message);

        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmitLog = e => {
    e.preventDefault();

    if (!isValidData()) {
      restetForm();
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
  };

  const handleSubmitReg = async e => {
    e.preventDefault();

    if (!isValidData()) {
      restetForm();
      return;
    }

    dispatch(authOperations.register({ email, password }));
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
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="email"
              />
              <input
                name="password"
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
