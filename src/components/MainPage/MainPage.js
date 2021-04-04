function MainPage() {
  return (
    <>
      <h1>THIS IS MAIN PAGE</h1>
      <h2>
        “Regression testing. What is it? <br /> If the system compiles, that's
        good, if it boots, that's
        <br /> great!”
      </h2>
      <p>Linus Torvalds</p>
      <p>Linux kernel creator, hacker, 1969</p>
      <button>QA technical training</button>
      <button>
        Testing theory
        <svg class="button-icon" width="24px" height="24px">
          <use href="arrow.svg"></use>
        </svg>
      </button>
    </>
  );
}

export default MainPage;
