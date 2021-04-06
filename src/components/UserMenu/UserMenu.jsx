import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { name, loading } from '../../redux/auth/auth-selectors';
import { logoutUser } from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(name);
  const loadingAuth = useSelector(loading);

  const logout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  return (
    <div className="container-user">
      <div className="user-greeting">
        <div className="avatar">D
        {/* {userName.match(/[A-Z]/g).join('')}*/}</div>
        {/* {userName} */}
        Dmitri
      </div>
      {loadingAuth ? (
        'Loading...'
      ) : (
          <div className="sing-out">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={logout}>
            <g clip-path="url(#clip0)">
            <path d="M12.6465 4.64645L11.9395 5.35348L14.086 7.49997H7V8.49998H14.086L11.9395 10.6465L12.6465 11.3535L16 7.99997L12.6465 4.64645Z" fill="black"/>
            <path d="M11 15H1.00001V1.00001H11V2.00002H12V0.500005C12 0.223628 11.7764 0 11.5 0H0.500005C0.223628 0 0 0.223628 0 0.500005V15.5C0 15.7764 0.223628 16 0.500005 16H11.5C11.7764 16 12 15.7764 12 15.5V14H11V15Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
      )}
    </div>
  );
};

export default UserMenu;
