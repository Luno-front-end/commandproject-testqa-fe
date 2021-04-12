import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { getAllTest } from '../../redux/tetstOperaion';

import sprite from '../../images/sprite.svg';
//  dispatch(getAllTest('testTheory'));
function MainPage() {
  // const dispatch = useDispatch();

  return (
    <div className="container bgColorMain">
      <div>
        <h2 className="titleMain">
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </h2>
        <hr className="hrLineMain"></hr>

      </div>
      <p className="titleAuthorMain">Linus Torvalds</p>
      <p className="titleAuthorDetailsMain">
        Linux kernel creator, hacker, 1969
      </p>

      <div className="btnsBlockMain">
        <Link to="/test?name=qa" className="btnPrimaryMain">
          <p className="textPrimaryBtnMain">QA technical training</p>
          <svg className="markerMain">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
        </Link>

        <Link to="/test?name=testTheory" className="btnSecondaryMain">
          <p className="textSecondaryBtnMain">Testing theory</p>
          <svg className="markerMain">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
