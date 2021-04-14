import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { useLocation } from 'react-router-dom';
import { saveUserData } from './redux/auth/auth-actions';
import queryString from 'query-string';
import { useEffect, Suspense, lazy } from 'react';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader/Loader';
import teamMembers from './teamMembers.json';

import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer';
import NotFount from './components/NotFount/NotFound';

const AuthPage = lazy(() => import('./components/AuthPage/AuthPage'));
const MainPage = lazy(() => import('./components/MainPage/MainPage.jsx'));
const TestPage = lazy(() => import('./components/TestPage/TestPage.jsx'));
const ResultsPage = lazy(() => import('./components/ResultsPage/ResultsPage'));
const TeamListPage = lazy(() =>
  import('./components/TeamSectionPage/TeamList'),
);
const UsefulInfoPage = lazy(() =>
  import('./components/UsefulInfoPage/UsefulInfoPage'),
);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (errorStatus === 403) {
      return dispatch(authOperations.fetchWithRefreshToken());
    }
  }, [dispatch, errorStatus]);

  return (
    <>
      {isFetchingCurrentUser ? (
        // <h1 className="container loadingPage">loading...</h1>
        <Loader />
      ) : (
        <>
          <div className="content">
            <Suspense fallback={<Loader />}>
              <Navigation />
              <Switch>
                <PublicRoute exact path="/auth" redirectTo="/" restricted>
                  <AuthPage />
                </PublicRoute>
                <PrivateRoute path="/useful-info">
                  <UsefulInfoPage />
                </PrivateRoute>

                <PublicRoute exact path="/team">
                  <TeamListPage teamMembers={teamMembers} />
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
              </Switch>
            </Suspense>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
