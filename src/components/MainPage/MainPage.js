import sprite from '../../images/sprite.svg';

function MainPage() {
  return (
    <div className="bgcolor container ">
      <h1>THIS IS MAIN PAGE</h1>
      <h2 className="title">
        “Regression testing. What is it? <br /> If the system compiles, that's
        good, if it boots, that's
        <br /> great!”
      </h2>
      <p className="titleAuthor">Linus Torvalds</p>
      <p className="titleAuthorDetails">Linux kernel creator, hacker, 1969</p>
      <button>QA technical training</button>
      <button>
        Testing theory
        <svg>
          <use href={sprite + '#arrowLeft'}></use>
        </svg>
      </button>
    </div>
  );
}

export default MainPage;
