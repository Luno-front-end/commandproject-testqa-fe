export default function List({ el, id, onChange, answer }) {
  return (
    <li className="flexInputAndTextTest">
      <input
        type="radio"
        name="answer"
        className="inputBtn"
        id={id}
        value={el}
        onChange={e => onChange(e)}
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
