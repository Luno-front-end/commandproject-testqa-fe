export default function List({ el, id, onChange, answer }) {
  return (
    <li className="flexInputAndTextTest">
      <div className="activeCircleTestList">
        <input
        type="radio"
        name="answer"
        className="inputBtn"
        id={id}
        value={el}
        onChange={e => onChange(e)}
        checked={answer === el}
      />
</div>
      {/* <div className="activeCheckTestList"></div> */}

      <label className="textOfAnswersTest" htmlFor={id}>
        <p> {el}</p>
      </label>
    </li>
  );
}
