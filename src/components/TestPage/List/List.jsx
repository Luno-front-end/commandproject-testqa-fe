export default function List({ id, el, onChange, answer }) {
  const data = {};

  return (
    <li className="flexInputAndTextTest">
      <input
        type="radio"
        name="answer"
        className="inputBtn"
        id={id}
        value={el}
        onChange={e => onChange(e, data)}
        checked={answer === el}
      />
      <label className="textOfAnswersTest" htmlFor={id}>
        <span> {el}</span>
      </label>
      {/* <div className="checkQ ">
        <p className="active"></p>
      </div>
      <p>{arrAnswers}</p> */}
    </li>
  );
}
