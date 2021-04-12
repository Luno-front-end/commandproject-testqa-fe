import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTestResults } from '../../redux/tests/test-selectors';
import { getAllTest, getResults } from '../../redux/tests/testOperation';
import { arrayResults } from '../../redux/tests/testActions';
import sprite from '../../images/sprite.svg';

import { v4 as uuidv4 } from 'uuid';

function Test() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const allTests = useSelector(({ allTestsR }) => allTestsR);
  const res = useSelector(getTestResults);
  console.log('res', res);

  const query = new URLSearchParams(location.search).get('name');

  const [indexQuestion, setindexQuestion] = useState(0);
  // const [loadind, setLoadind] = useState(false);
  // const [checkVelue, setCheckVelue] = useState('');

  useEffect(() => {
    if (!query || (query !== 'qa' && query !== 'testTheory')) {
      history.push(`/`);
    }
  }, [history, query]);

  useEffect(() => {
    // setLoadind(true);
    dispatch(getAllTest(query));
    // setLoadind(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function nextQuestion() {
    if (indexQuestion >= 11) {
      redirectResultsPage();
      dispatch(getAllTest([]));
    }

    dispatch(getResults(res));
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
  const onSubmite = e => {
    // console.log(e.target);
  };

  function inputTestValue(e) {
    const answer = e.currentTarget.value;
    const _id = allTests[indexQuestion]._id;
    const type = allTests[indexQuestion].type;

    // console.log(());

    const testAnswers = {
      type,
      answers: { _id, answer },
    };

    dispatch(arrayResults(testAnswers));

    // console.log();
    // console.log();
    // dispatch(getResults(id, type, answer));

    // console.log(value);
    // console.log(e.target.textContent);
  }
  return (
    <div className="container bgColorTest">
      <div className="flexContainer">
        <p className="nameOfTest">
          {query === 'qa' ? '[ QA technical training_]' : '[ Testing theory_]'}
        </p>
        <Link
          to={`/`}
          className="btnThirdTest"
          // onClick={dispatch(getAllTest([]))}
        >
          Finish test
        </Link>
      </div>
      <form className="formOfQuestionTest" onSubmit={onSubmite}>
        {/* {loadind ?? <p>loading</p>}
         <p>{`Question ${indexQuestion + 1} / 12 `}</p>
         <p>{allTests[indexQuestion]?.question}</p>
         <ul>
           {allTests[indexQuestion]?.answers.map(arrAnswers => (
             <li key={Math.random()}>
               <input type="checkbox" />
               <p>{arrAnswers}</p> */}

        <p className="textOfQuestionTest">
          Question
          <span className="numberOfQuestionTest">{indexQuestion + 1}</span> / 12
        </p>

        <p className="nameOfQuestionTest">
          {allTests[indexQuestion]?.question}
        </p>

        <hr className="hrLineTest"></hr>

        <ul className="groupOfAnswersTest">
          {allTests[indexQuestion]?.answers.map(arrAnswers => {
            const id = uuidv4();
            return (
              <li
                className="flexInputAndTextTest"
                key={id}
                // onClick={inputTestValue}
              >
                <input
                  type="radio"
                  name="answer"
                  className="inputBtn"
                  id={id}
                  value={arrAnswers}
                  onChange={inputTestValue}
                  // defaultChecked="false"
                />
                <label className="textOfAnswersTest" htmlFor={id}>
                  <span> {arrAnswers}</span>
                </label>
              </li>
            );
          })}
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
