export default function List({ id, arrAnswers, inputTestValue }) {
  return (
    <li className="flexInputAndTextTest">
      <input
        type="radio"
        name="answer"
        className="inputBtn"
        id={id}
        value={arrAnswers}
        onChange={inputTestValue}
      />
      <label className="textOfAnswersTest" htmlFor={id}>
        <span> {arrAnswers}</span>
      </label>
    </li>
  );
}
