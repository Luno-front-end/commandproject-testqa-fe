import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getAllTest } from '../../redux/tetstOperaion';
import sprite from '../../images/sprite.svg';

function Test() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const allTests = useSelector(({ allTestsR }) => allTestsR);

  const query = new URLSearchParams(location.search).get('name');

  const [indexQuestion, setindexQuestion] = useState(0);

  useEffect(() => {
    if (!query || (query !== 'qa' && query !== 'testTheory')) {
      history.push(`/`);
    }
  }, [history, query]);

  useEffect(() => {
    dispatch(getAllTest(query));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function nextQuestion() {
    if (indexQuestion >= 11) {
      redirectResultsPage();
    }
    setindexQuestion(prevState => prevState + 1);
  }

  function previousQuestion() {
    if (indexQuestion <= 0) {
      return;
    }
    setindexQuestion(prevState => prevState - 1);
  }

  function redirectResultsPage() {
    history.push(`/results?name=${query}`);
  }

  return (
    <div className="container bgColorTest">
      <div className="flexContainer">
        <p className="nameOfTest">
          {query === 'qa' ? '[ QA technical training_]' : '[ Testing theory_]'}
        </p>
        <Link to={`/`} className="btnThirdTest">
          Finish test
        </Link>
      </div>
      <form className="formOfQuestionTest">
        <p>{`Question ${indexQuestion + 1} / 12 `}</p>
        <p>{allTests[indexQuestion]?.question}</p>

        <ul>
          {allTests[indexQuestion]?.answers.map(arrAnswers => (
            <li key={Math.random()}>
              <input type="checkbox" />
              <p>{arrAnswers}</p>
            </li>
          ))}
        </ul>
      </form>
      <div className="btnsBlockTest">
        <button
          className="btnPrimaryTest"
          onClick={previousQuestion}
          disabled={indexQuestion <= 0 ? true : false}
        >
          <svg className="markerPrimaryTest">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
          <p className="textPrimaryBtnTest">Previous question</p>
        </button>
        <button className="btnSecondaryTest" onClick={nextQuestion}>
          <p className="textSecondaryBtnTest">
            {indexQuestion >= 11 ? 'finish' : 'Next question'}
          </p>
          <svg className="markerSecondaryTest">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Test;
