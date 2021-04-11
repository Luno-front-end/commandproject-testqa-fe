const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => {
  console.log(state.auth.user);
};

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;
