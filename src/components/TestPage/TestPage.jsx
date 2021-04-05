import sprite from '../../images/sprite.svg';

function Test() {
  return (
    <div className="container bgColorTest">
      <h1>THIS IS TEST PAGE!!!!!</h1>
      <div className="flexContainer">
        <p className="nameOfTest">
          [ Testing <br /> theory_]
        </p>
        <button className="btnThirdTest">Finish test</button>
      </div>
      <form className="formOfQuestionTest">
        <p>Question 3 / 12 </p>
        <p>What is regression testing?</p>
        <label>
          <input type="radio" name="answer"></input> answer 1
        </label>
        <label>
          <input type="radio" name="answer"></input> answer 2
        </label>
        <label>
          <input type="radio" name="answer"></input> answer 3
        </label>
        <label>
          <input type="radio" name="answer"></input> answer 4
        </label>
        <label>
          <input type="radio" name="answer"></input> answer 5
        </label>
      </form>
      <button className="btnPrimaryTest">
        <p className="textPrimaryBtnTest">Previous question</p>
        <svg className="markerPrimaryTest">
          <use href={sprite + '#arrowLeft'}></use>
        </svg>
      </button>
      <button className="btnSecondaryTest">
        <p className="textSecondaryBtnTest">Next question</p>
        <svg className="markerSecondaryTest">
          <use href={sprite + '#arrowLeft'}></use>
        </svg>
      </button>
    </div>
  );
}

export default Test;
