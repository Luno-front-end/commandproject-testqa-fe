import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllTest } from '../../redux/tetstOperaion';

import sprite from '../../images/sprite.svg';

function MainPage() {
  const dispatch = useDispatch();

  return (
    <div className="container bgColorMain">
      <div>THIS IS MAIN PAGE</div>
      <div className="titleMain">
        <h2>
          “Regression testing. What is it? <br /> If the system compiles, that's
          good, if it boots, that's
          <br /> great!”
        </h2>
      </div>
      <p className="titleAuthorMain">Linus Torvalds</p>
      <p className="titleAuthorDetailsMain">
        Linux kernel creator, hacker, 1969
      </p>

      <Link
        to="/test"
        className="btnPrimaryMain"
        onClick={() => {
          dispatch(getAllTest('qa'));
        }}
      >
        <p className="textPrimaryBtnMain">
          QA technical <br /> training
        </p>
        <svg className="markerMain">
          <use href={sprite + '#arrowLeft'}></use>
        </svg>
      </Link>
      <Link
        to="/test"
        className="btnSecondaryMain"
        onClick={() => {
          dispatch(getAllTest('testTheory'));
        }}
      >
        <p className="textSecondaryBtnMain">Testing theory</p>
        <svg className="markerMain">
          <use href={sprite + '#arrowLeft'}></use>
        </svg>
      </Link>
    </div>
  );
}

export default MainPage;
