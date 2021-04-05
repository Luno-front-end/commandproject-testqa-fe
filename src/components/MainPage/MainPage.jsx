import sprite from '../../images/sprite.svg';

function MainPage() {
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
      <button className="btnPrimaryMain">
        <p className="textPrimaryBtnMain">
          QA technical <br /> training
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
  );
}

export default MainPage;
