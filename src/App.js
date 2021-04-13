import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage.jsx';
import TestPage from './components/TestPage/TestPage.jsx';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ResultsPage from './components/ResultsPage/ResultsPage';
import TeamList from './components/TeamSection/TeamList';
import Footer from './components/Footer/Footer';
import NotFount from './components/NotFount/NotFound';
import teamMembers from './teamMembers.json';
// import TestSpriteSVG from './components/TestSpriteSVG.jsx';
function App() {
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
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
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <PublicRoute exact path="/auth" redirectTo="/" restricted>
              <AuthPage />
            </PublicRoute>
            <PrivateRoute path="/useful-info">
              <ProTestUsefulInfo />
            </PrivateRoute>

            <PublicRoute exact path="/team">
              <TeamList />
            </PublicRoute>

            <PrivateRoute exact path="/" redirectTo="/auth">
              <MainPage />
            </PrivateRoute>

            <PrivateRoute path="/test" redirectTo="/auth">
              <TestPage />
            </PrivateRoute>
            <PrivateRoute exact path="/results" redirectTo="/auth">
              <ResultsPage />
            </PrivateRoute>
            <PublicRoute>
              <NotFount />
            </PublicRoute>
            {/* <TestSpriteSVG />  */}
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
