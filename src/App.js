import MainPage from './components/MainPage/MainPage.jsx';
import TestPage from './components/TestPage/TestPage.jsx';
// import AppBar from './components/AppBar';
import ResultsPage from './components/ResultsPage/ResultsPage';
import { Route } from 'react-router';
// import Vector from './components/Diagram/Vector';

// import TestSpriteSVG from './components/TestSpriteSVG.jsx';

function App() {
  return (
    <>
      {/* <AppBar /> */}
      <Route path="/" exact>
        <MainPage />
      </Route>

      <Route path="/test">
        <TestPage />
      </Route>

      <Route path="/results">
        <ResultsPage />
      </Route>

      {/* <TestSpriteSVG />  */}
    </>
  );
}

export default App;
