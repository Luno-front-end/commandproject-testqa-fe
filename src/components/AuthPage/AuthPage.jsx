import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import sprite from '../../images/sprite.svg';
import { useHistory } from 'react-router-dom';
import AuthPhrase from './AuthPhrase';
export default function AuthPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function restetForm() {
    setEmail('');
    setPassword('');
  }

  const isValidData = () => {
    // Валидация данных
    return email.length > 5 && password.length > 6;
  };

  const handleSubmitLog = e => {
    e.preventDefault();
    restetForm();
    isValidData
      ? dispatch(authOperations.logIn({ email, password }))
      : console.log('Error');
    // ==========================
    // history.push('/');
  };

  const handleSubmitReg = e => {
    restetForm();
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
    </section>
  );
}
