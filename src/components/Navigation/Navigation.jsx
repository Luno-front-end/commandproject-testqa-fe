import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { authSelectors, authOperations } from '../../redux/auth';
import routes from '../../routes';
import UserMenu from '../UserMenu';

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
            <div className="nav-menu-link">
              {isLoggedIn && (
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
            </div>

            {isLoggedIn && <UserMenu />}
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
              {isLoggedIn && (
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

              {isLoggedIn && (
                <div
                  className="sing-out-burger"
                  onClick={() => dispatch(authOperations.logOut())}
                >
                  <svg width="16" height="16">
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
}
