import { useLocation, Link, useHistory } from 'react-router-dom';
import Diagram from '../Diagram/Diagram';

function Results() {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('name');

  return (
    <div className="container results_container">
      <h2 className="results_title">Results</h2>
      <p className="results_test">
        {query === 'qa' ? '[ QA technical training_]' : '[ Testing theory_]'}
      </p>
      <Diagram />
      <div className="results_flex">
        <p className="results_results">
          Correct answers - <span>9</span>
        </p>
        <p className="results_results">
          Total questions - <span>12</span>
        </p>
      </div>
      {console.log((<div>kl</div>).offsetWidth)}
      <div className="results_img" />
      <h2 className="results_appraisal">Not bad!</h2>
      <p className="results_message">
        Dut you still need to learn some materials
      </p>
      <Link to={`/test?name=${query}`} className="results_button">
        <p className="results_text">Try again</p>
      </Link>
    </div>
  );
}

export default Results;
