// import { useSelector, useDispatch } from 'react-redux';
// import { useCallback } from 'react';
// import { name, loading } from '../../redux/auth/auth-selectors';
// import { logoutUser } from '../../redux/auth/auth-operations';
import sprite from '../../images/sprite.svg'

const UserMenu = () => {
  // const dispatch = useDispatch();
  // const userName = useSelector(name);
  // const loadingAuth = useSelector(loading);

  // const logout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  const logout = true
  const loadingAuth = false

  return (
    <div className="container-user">
        <div className="avatar">D
        {/* {userName.match(/[A-Z]/g).join('')}*/}</div>
        {/* {userName} */}
      <span className="userName">Dmitri</span>
      {/* {loadingAuth ? (
        '...'
      ) : (
          <div className="sing-out">
            <svg width="16" height="16" onClick={logout}>
              signOut
                 <use href={sprite + '#signOut'}></use>
            </svg>
          </div>
      )} */}
      {loadingAuth ? (
        '...'
      ) : (
          <div className="sing-out">
            <svg width="16" height="16" onClick={logout}>
              signOut
                 <use href={sprite + '#signOut'}></use>
            </svg>
          </div>
      )}
    </div>
  );
};

export default UserMenu;
