import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
// eslint-disable-next-line no-unused-vars
import queryString from 'query-string';
import { useEffect, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage.jsx';
import TestPage from './components/TestPage/TestPage.jsx';
import { useLocation } from 'react-router-dom';
import { saveUserData } from './redux/auth/auth-actions';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ResultsPage from './components/ResultsPage/ResultsPage';
import TeamList from './components/TeamSection/TeamList';
import UsefulInfo from './components/UsefulInfoPage/UsefulInfoPage';
import Footer from './components/Footer/Footer';
import NotFount from './components/NotFount/NotFound';
import teamMembers from './teamMembers.json';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const errorStatus = useSelector(authSelectors.getErrorStatus);
  const location = useLocation();
  const query = queryString.parse(location.search);

  useEffect(() => {
    if (query.token) {
      dispatch(saveUserData({ ...query }));
    }
    dispatch(authOperations.fetchWithRefreshToken());
  }, []);

  useEffect(() => {
    console.log(errorStatus);
    if (errorStatus === 403) {
      return dispatch(authOperations.fetchWithRefreshToken());
    }
  }, [dispatch, errorStatus]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <Navigation />
          <Switch>
            <PublicRoute exact path="/auth" redirectTo="/" restricted>
              <AuthPage />
            </PublicRoute>
            <PrivateRoute path="/useful-info">
              <UsefulInfo />
            </PrivateRoute>

            <PublicRoute exact path="/team">
              <TeamList teamMembers={teamMembers} />
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
