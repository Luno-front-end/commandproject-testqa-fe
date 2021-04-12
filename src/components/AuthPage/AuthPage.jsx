import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import sprite from '../../images/sprite.svg';
// import { Link } from 'react-router-dom';
export default function AuthPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    login === 'login'
      ? dispatch(authOperations.logIn({ email, password }))
      : dispatch(authOperations.register({ email, password }));

    setEmail('');
    setPassword('');
  };

  const loginBTN = () => {
    setLogin('login');
  };
  //   const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  //   setEmail('');
  //   setPassword('');
  // };

  // console.log(email);

  return (
    <section className="section-test">
      <div className="container">
        <div className="auth">
          <h2 className="auth__title">Pro Test</h2>
          <p className="auth__text">
            <span className="auth__span">[</span> We will help you find weak
            points in knowledge so that you can strengthen it. We will show you
            what is relevant to know for a{' '}
            <span className="auth__span">QA Engineer</span> and will try to make
            the learning process more diverse_{' '}
            <span className="auth__span">]</span>
          </p>
        </div>
        <div className="form__wrap">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form__text">
              You can use your Google Account to authorize:
            </p>
            <a
              rel="noreferrer"
              href="https://team-project-be.herokuapp.com/auth/google"
              target="_blank"
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
                id="email"
                placeholder="E-mail"
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                id="pass"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <button
                name="login"
                type="submit"
                className="btn__sign-in sign__hover"
                onClick={loginBTN}
              >
                Sign in
              </button>
              <button
                name="register"
                type="submit"
                className="btn__sign-up sign__hover"
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
