import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import sprite from '../../images/sprite.svg';

const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(authSelectors.getUsername);
  return (
    <div className="container-user">
      <div className="avatar">
        {/* D */}
        {userName && userName.slice(0, 1).toUpperCase()}
      </div>

      <span className="userName">{userName}</span>
      {/* {loadingAuth ? (
        '...'
      ) : ( */}
      <div className="sing-out">
        <svg
          width="16"
          height="16"
          onClick={() => dispatch(authOperations.logOut())}
        >
          <use href={sprite + '#signOut'}></use>
        </svg>
      </div>
      {/* )} */}
    </div>
  );
};

export default UserMenu;
