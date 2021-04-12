import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage.jsx';
import TestPage from './components/TestPage/TestPage.jsx';
import ResultsPage from './components/ResultsPage/ResultsPage';
import TeamList from './components/TeamSection/TeamList';
import Footer from './components/Footer/Footer';
import proTestUsefulInfo from './components/proTestUsefulInfo/proTestUsefulInfo';

import NotFount from './components/NotFount/NotFound';
import teamMembers from './teamMembers.json';
// import TestSpriteSVG from './components/TestSpriteSVG.jsx';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>

        <Route path="/test">
          <TestPage />
        </Route>
        <Route path="/results" exact>
          <ResultsPage />
        </Route>
        <Route path="/team">
          <TeamList teamMembers={teamMembers} />
        </Route>
        <Route>
          <NotFount />
        </Route>

        {/* <TestSpriteSVG />  */}
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
