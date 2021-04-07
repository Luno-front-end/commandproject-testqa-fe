import { Route, Switch } from 'react-router-dom';

import TeamSection from './components/teamSection';
import AppBar from './components/AppBar';
import MainPage from './components/MainPage/MainPage.jsx';
import TestPage from './components/TestPage/TestPage.jsx';
import ResultsPage from './components/ResultsPage/ResultsPage';
import Footer from './components/Footer/Footer';
import proTestUsefulInfo from './components/proTestUsefulInfo/proTestUsefulInfo';

import NotFount from './components/NotFount/NotFound';

// import TestSpriteSVG from './components/TestSpriteSVG.jsx';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/test">
          <TestPage />
        </Route>
        <Route path="/results" exact>
          <ResultsPage />
        </Route>
        <Route path="/team">
          <TeamSection />
        </Route>
        <Route>
          <NotFount />
        </Route>

        {/* <TestSpriteSVG />  */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
