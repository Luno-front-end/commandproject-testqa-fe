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
      <NavLink
        exact
        to={routes.home}
        // className="navLink"
      >
        <svg width="129" height="28">
        <use href={sprite + '#logo'}></use>
        </svg>
      </NavLink>
      <div className='nav-menu'>
        {/* {isAuthenticatedUser && ( */}
         <>
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
        </>
        {/*   )} */}
           <NavLink
            to={routes.contactsPage}
            className="navLink"
            activeClassName="navLink--active"
          >
          Contacts
          </NavLink>
        
        {/* {isAuthenticatedUser && ( */}
        <UserMenu />
        
        {/*   )} */}
      </div>
      <div className='menu-btn'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 15H17.5V13.3333H2.5V15ZM2.5 10.8333H17.5V9.16667H2.5V10.8333ZM2.5 5V6.66667H17.5V5H2.5Z" fill="black"/>
        </svg>
        </div>
    </header>
  );
};

export default Navigation;
