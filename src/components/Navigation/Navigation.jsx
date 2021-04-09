import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
// import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// import { isAuthenticated } from '../../redux/auth/auth-selectors';
import routes from '../../routes';
import UserMenu from '../UserMenu';

const Navigation = () => {
  // const isAuthenticatedUser = useSelector(isAuthenticated);

  const [menuActive, setMenuActive] = useState(false);

  const isAuthenticatedUser = true; //// заглушка
  const logout = true; //// заглушка

    const onBurgerClick = () => {
    const el = document.querySelector('body');
   !menuActive ? disableBodyScroll(el) : enableBodyScroll(el);
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="container header-content">
        <NavLink exact to={routes.home}>
          <svg width="129" height="28">
            <use href={sprite + '#logo'}></use>
          </svg>
        </NavLink>
        <div className="nav-and-burger">
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

            {isAuthenticatedUser && <UserMenu />}
          </div>
          <div className="menu-btn" onClick={onBurgerClick}>
            {!menuActive ? (
              <svg width="20" height="20">
                <use href={sprite + '#burgerMenu'}></use>
              </svg>
            ) : (
              <svg width="20" height="20">
                <use href={sprite + '#close'}></use>
              </svg>
            )}
            <nav className={menuActive ? 'nav-burger active' : 'nav-burger'}>
              {isAuthenticatedUser && (
                <>
                  <div className="navLink-menu">
                    <NavLink
                      exact
                      to={routes.homePage}
                      className="navLink-burger"
                      activeClassName="navLink--active "
                    >
                      Home
                    </NavLink>
                  </div>
                  <div className="navLink-menu">
                    <NavLink
                      to={routes.materialsPage}
                      className="navLink-burger"
                      activeClassName="navLink--active"
                    >
                      Materials
                    </NavLink>
                  </div>
                </>
              )}
              <div className="navLink-menu">
                <NavLink
                  to={routes.contactsPage}
                  className="navLink-burger"
                  activeClassName="navLink--active"
                >
                  Contacts
                </NavLink>
              </div>

              {isAuthenticatedUser && (
                <div className="sing-out-burger">
                  <svg width="16" height="16" onClick={logout}>
                    <use href={sprite + '#signOut'}></use>
                  </svg>
                </div>
              )}
              </nav>
          </div>
        </div>
      </div>
        </header>
  );
};

export default Navigation;
