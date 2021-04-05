import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
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
            <div className='avatar'>{userName.match(/[A-Z]/g).join('')}</div> {userName}</div>
      {loadingAuth ? (
        'Loading...'
      ) : (
        <Button variant="outlined" color="action" onClick={logout}>
          <ExitToAppIcon />
        </Button>
      )}
    </div>
  );
};

export default UserMenu;
