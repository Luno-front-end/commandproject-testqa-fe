import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg'
// import Avatar from '@material-ui/core/Avatar';


import { isAuthenticated } from '../../redux/auth/auth-selectors';
import routes from '../../routes';
import UserMenu from '../UserMenu';

const Navigation = () => {
  const isAuthenticatedUser = useSelector(isAuthenticated);

  return (
    <header>
      <div className='nav-menu'>
        <NavLink
          exact
          to={routes.home}
          className="navLink"
        >
        <svg width="129" height="28">
        <use href={sprite + '#logo'}></use>
        </svg>
        </NavLink>

        {isAuthenticatedUser && (
          <div>
          <NavLink
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
           <NavLink
            to={routes.contactsPage}
            className="navLink"
            activeClassName="navLink--active"
          >
              Contacts
          </NavLink>
          </div>
        )} 
      </div>

      {isAuthenticatedUser ? (
        <UserMenu /> 
      ) : (
          <div>
          <NavLink
            to={routes.contactsPage}
            className="navLink"
            activeClassName="navLink--active"
          >
            Contacts
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navigation;
