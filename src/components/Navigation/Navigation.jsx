import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';

// import { isAuthenticated } from '../../redux/auth/auth-selectors';
import routes from '../../routes';
// import UserMenu from '../UserMenu';

const Navigation = () => {
  // const isAuthenticatedUser = useSelector(isAuthenticated);

  const isAuthenticatedUser = true;

  return (
    <header>
      <NavLink exact to={routes.home}>
        <svg width="129" height="28">
          <use href={sprite + '#logo'}></use>
        </svg>
      </NavLink>
      <div className="nav-menu">
        {isAuthenticatedUser && (
          <>
            <NavLink
              exact
              to={routes.homePage}
              className="navLink"
              activeClassName="navLink--active"
            >
              Home
            </NavLink>
            <NavLink
              to={routes.materialsPage}
              className="navLink"
              activeClassName="navLink--active"
            >
              Materials
            </NavLink>
          </>
        )}
        <NavLink
          to={routes.contactsPage}
          className="navLink"
          activeClassName="navLink--active"
        >
          Contacts
        </NavLink>

        {/* {isAuthenticatedUser && <UserMenu />} */}
      </div>
      <div className="menu-btn">
        <svg width="20" height="20">
          <use href={sprite + '#burgerMenu'}></use>
        </svg>

        {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5832 1.94417L14.0557 0.416672L7.99984 6.47251L1.944 0.416672L0.416504 1.94417L6.47234 8.00001L0.416504 14.0558L1.944 15.5833L7.99984 9.52751L14.0557 15.5833L15.5832 14.0558L9.52733 8.00001L15.5832 1.94417Z" fill="black"/>
        </svg> */}
      </div>
    </header>
  );
};

export default Navigation;
