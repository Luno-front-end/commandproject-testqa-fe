import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, NavLink, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getAllTest } from '../../redux/tetstOperaion';
import sprite from '../../images/sprite.svg';

import { v4 as uuidv4 } from 'uuid';

function Test() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const allTests = useSelector(({ allTestsR }) => allTestsR);

  const query = new URLSearchParams(location.search).get('name');

  const [indexQuestion, setindexQuestion] = useState(0);
  const [loadind, setLoadind] = useState(false);
  const [value, setValue] = useState({
    type: `${query}`,
    answers: [{}],
  });

  useEffect(() => {
    if (!query || (query !== 'qa' && query !== 'testTheory')) {
      history.push(`/`);
    }
  }, [history, query]);

  useEffect(() => {
    setLoadind(true);
    dispatch(getAllTest(query));
    setLoadind(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function nextQuestion() {
    if (indexQuestion >= 11) {
      redirectResultsPage();
      dispatch(getAllTest([]));
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

  function inputTestValue(e) {
    setValue({ answers: e.target.nextSibling });

    console.log(value);
    console.log(e.target.nextSibling);
  }
  return (
    <div className="container bgColorTest">
      <div className="flexContainer">
        <p className="nameOfTest">
          {query === 'qa' ? '[ QA technical training_]' : '[ Testing theory_]'}
        </p>
        <NavLink to={`/`} className="btnThirdTest textThirdBtnTest">
          Finish test
        </NavLink>
      </div>
      <form className="formOfQuestionTest">
        <p className="textOfQuestionTest">
          `Question `
          <span className="numberOfQuestionTest">{indexQuestion + 1}</span> / 12
        </p>

        <p className="nameOfQuestionTest">
          {allTests[indexQuestion]?.question}
        </p>

        <hr className="hrLineTest"></hr>

        <ul className="groupOfAnswersTest">
          {allTests[indexQuestion]?.answers.map(arrAnswers => (
            <li className="flexInputAndTextTest" key={Math.random()}>
              <label className="textOfAnswersTest">
                <input
                  type="radio"
                  name="answer"
                  className="inputBtn"
                  onChange={inputTestValue}
                />
                {arrAnswers}
              </label>
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
