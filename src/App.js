import { Route } from 'react-router-dom';

import TeamSection from './components/teamSection';

import MainPage from './components/MainPage/MainPage.jsx';
import TestPage from './components/TestPage/TestPage.jsx';
import AppBar from './components/AppBar';
// import TestSpriteSVG from './components/TestSpriteSVG.jsx';

function App() {
  return (
    <>
      <AppBar />
      <Route path="/" exact>
        <MainPage />
      </Route>

      <Route path="/test">
        <TestPage />
      </Route>

      <Route path="/team">
        <TeamSection />
      </Route>

      {/* <TestSpriteSVG /> */}
    </>
  );
}

export default App;
