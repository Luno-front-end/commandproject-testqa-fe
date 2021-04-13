import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink, useHistory } from 'react-router-dom';
import SpriteIcon from '../SpriteIcon/SpriteIcon';
import { v4 as uuidv4 } from 'uuid';

import { getAllTests } from '../../redux/tests/test-selectors';
import { getAllTest, getResults } from '../../redux/tests/testOperation';
import {
  addAnswer,
  cleanResults,
  cleanAnswers,
} from '../../redux/tests/testActions';

import List from './List/List';
import Button from '../Button/Button';

export default function Test() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const allTests = useSelector(getAllTests);

  const query = new URLSearchParams(location.search).get('name');

  useEffect(() => {
    if (query !== 'qa' && query !== 'testTheory') history.push(`/`);

    dispatch(getAllTest(query));
  }, [dispatch, history, query]);

  useEffect(() => {
    dispatch(cleanAnswers());
    dispatch(cleanResults());
  }, [dispatch]);

  function redirectResultsPage() {
    history.push(`/results?name=${query}`);
  }

  function handleClick(mod) {
    setAnswer('');
    setIndex(mod);
  }

  function handleChange(e) {
    setAnswer(e.target.value);
    const _id = allTests[index]._id;
    const type = allTests[index].type;

    const testAnswers = {
      type,
      answers: { _id, answer: e.target.value },
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
          `Question `<span className="numberOfQuestionTest">{index + 1}</span> /
          12
        </p>

        <p className="nameOfQuestionTest">{allTests[index]?.question}</p>
        {/* hr треба замінити на бордер і поставити як бефор чи афтер  */}
        <hr className="hrLineTest"></hr>

        <ul className="groupOfAnswersTest">
          {allTests[index]?.answers.map(el => {
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
          className="btnPrimaryTest"
          onClick={() => handleClick(index - 1)}
          disabled={!index ? true : null}
        >
          <SpriteIcon className="markerPrimaryTest" svgId="#arrowLeft" />
          <span className="textPrimaryBtnTest">Previous question</span>
        </Button>

        <Button
          className="btnSecondaryTest"
          onClick={
            index <= 10 ? () => handleClick(index + 1) : redirectResultsPage
          }
        >
          <span className="textSecondaryBtnTest">
            {index >= 11 ? 'finish' : 'Next question'}
          </span>
          <SpriteIcon className="markerSecondaryTest" svgId="#arrowLeft" />
        </Button>
      </div>
    </div>
  );
}
