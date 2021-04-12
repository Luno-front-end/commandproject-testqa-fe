import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
// eslint-disable-next-line no-unused-vars
import { useEffect, Suspense, lazy } from 'react';
import TeamSection from './components/teamSection';
import AppBar from './components/AppBar';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage.jsx';
import TestPage from './components/TestPage/TestPage.jsx';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ResultsPage from './components/ResultsPage/ResultsPage';
import Footer from './components/Footer/Footer';
// import proTestUsefulInfo from './components/proTestUsefulInfo/proTestUsefulInfo';

import NotFount from './components/NotFount/NotFound';

// import TestSpriteSVG from './components/TestSpriteSVG.jsx';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <PublicRoute exact path="/auth" redirectTo="/" restricted>
              <AuthPage />
            </PublicRoute>

            <PublicRoute exact path="/team" restricted>
              <TeamSection />
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
            <PrivateRoute>
              <NotFount />
            </PrivateRoute>
            {/* <TestSpriteSVG />  */}
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
