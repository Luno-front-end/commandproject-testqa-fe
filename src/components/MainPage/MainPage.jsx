import sprite from '../../images/sprite.svg';

function MainPage() {
  return (
    <div className="container bgColorMain">
      <div className="titleMain">
        <h2 >
          “Regression testing. What is it? If the system compiles, that's good, if it boots, that's great!”
        </h2>
      </div>
      <p className="titleAuthorMain">Linus Torvalds</p>
      <p className="titleAuthorDetailsMain">
        Linux kernel creator, hacker, 1969
      </p>
      <div className="btnsBlockMain">
       <button className="btnPrimaryMain">
        <p className="textPrimaryBtnMain">
          QA technical training
        </p>
        <svg className="markerMain">
          <use href={sprite + '#arrowLeft'}></use>
        </svg>
      </button>
      <button className="btnSecondaryMain">
        <p className="textSecondaryBtnMain">Testing theory</p>
        <svg className="markerMain">
          <use href={sprite + '#arrowLeft'}></use>
        </svg>
      </button>

      </div>
    </div>
  );
}

export default MainPage;
