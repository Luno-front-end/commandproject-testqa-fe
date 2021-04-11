// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';

// import { isAuthenticated } from '../../redux/auth/auth-selectors';
// import routes from '../../routes';

// const PublicRoute = ({ component: Component, ...routeProps }) => {
//   const isAuthenticatedUser = useSelector(isAuthenticated);
//   return (
//     <Route
//       {...routeProps}
//       render={props =>
//         isAuthenticatedUser && routeProps.restricted ? (
//           <Redirect to={routes.homePage} />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

// export default PublicRoute;

import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
