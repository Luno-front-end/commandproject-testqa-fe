import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { fetchResults } from '../../redux/tests/testOperation';
import { getTestResults } from '../../redux/tests/test-selectors';
import Message from '../Diagram/Message';
import Diagram from '../Diagram/Diagram';

function Results() {
  const location = useLocation();

  const results = useSelector(getTestResults);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults('adasdasd'));
  }, [dispatch]);

  const query = new URLSearchParams(location.search).get('name');

  return (
    <div className="container results_container">
      <h2 className="results_title">Results</h2>
      <p className="results_test">
        {query === 'qa' ? '[ QA technical training_]' : '[ Testing theory_]'}
      </p>
      <Diagram correctAnswers={results?.data?.amountOfRightAnswers ?? 0} />
      <div className="results_flex">
        <p className="results_results">
          Correct answers -
          <span>{results?.data?.amountOfRightAnswers ?? 0}</span>
        </p>
        <p className="results_results">
          Total questions - <span>12</span>
        </p>
      </div>
      <Message correctAnswers={results?.data?.amountOfRightAnswers ?? 0} />
      <Link to={`/test?name=${query}`} className="results_button">
        <p className="results_text">Try again</p>
      </Link>
    </div>
  );
}

export default Results;
