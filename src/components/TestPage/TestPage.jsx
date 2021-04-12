import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, NavLink, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addAnswer } from '../../redux/tests/testActions';

import { getTestResults } from '../../redux/tests/test-selectors';
import { getAllTest, getResults } from '../../redux/tests/testOperation';
import { arrayResults } from '../../redux/tests/testActions';

import List from './List/List';
import Button from '../Button/Button';

import sprite from '../../images/sprite.svg';

import { v4 as uuidv4 } from 'uuid';

function Test() {
  const [indexQuestion, setindexQuestion] = useState(0);
  const [answer, setAnswer] = useState('');

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const allTests = useSelector(({ allTestsR }) => allTestsR);

  // dispatch('отправить результат');
  // console.log('results', results);

  const query = new URLSearchParams(location.search).get('name');

  // useEffect(() => {
  //   // if (!query || (query !== 'qa' && query !== 'testTheory')) {
  //   //   history.push(`/`);
  //   // }
  // }, [history, query]);

  useEffect(() => {
    dispatch(getAllTest(query));
  }, [dispatch, query]);

  function nextQuestion() {
    console.log('next q');
    if (indexQuestion >= 11) {
      redirectResultsPage();
      dispatch(getAllTest([]));
    }
    // // dispatch(getResults(res));
    setindexQuestion(prevState => prevState + 1);
    dispatch(addAnswer);
  }

  function previousQuestion() {
    console.log('prev q');
    if (indexQuestion <= 0) return;

    // setindexQuestion(indexQuestion + 1);
    dispatch('action');
  }

  function redirectResultsPage() {
    history.push(`/results?name=${query}`);
  }

  // function inputTestValue(e) {
  //   console.log(e.target);
  //   const answer = e.currentTarget.value;
  //   const _id = allTests[indexQuestion]._id;
  //   const type = allTests[indexQuestion].type;

  //   const testAnswers = {
  //     type,
  //     answers: { _id, answer },
  //   };
  //   console.log(testAnswers);
  //   dispatch(addAnswer(testAnswers));
  // }

  function handleChange(e) {
    setAnswer(e.target.value);
    const _id = allTests[indexQuestion]._id;
    const type = allTests[indexQuestion].type;

    const testAnswers = {
      type,
      answers: { _id, answer },
    };

    dispatch(addAnswer(testAnswers));
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
        {/* hr треба замінити на бордер і поставити як бефор чи афтер  */}
        <hr className="hrLineTest"></hr>

        <ul className="groupOfAnswersTest">
          {allTests[indexQuestion]?.answers.map(el => {
            const id = uuidv4();
            return (
              <List
                key={id}
                id={id}
                el={el}
                onChange={handleChange}
                answer={answer}
              />
            );
          })}
        </ul>
      </form>
      <div className="btnsBlockTest">
        <Button
          cssClass={'btnPrimaryTest'}
          onClick={previousQuestion}
          disabledBtn={indexQuestion <= 0 ? true : false}
        >
          <svg className="markerPrimaryTest">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
          <span className="textPrimaryBtnTest">Previous question</span>
        </Button>

        <Button
          cssClass={'btnSecondaryTest'}
          onClick={indexQuestion >= 10 ? nextQuestion : console.log('12')}
        >
          <span className="textSecondaryBtnTest">
            {indexQuestion >= 11 ? 'finish' : 'Next question'}
          </span>
          <svg className="markerSecondaryTest">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Test;
