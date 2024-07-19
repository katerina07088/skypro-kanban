export const getUserFromLocalStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? user : null;
  } catch (_) {
    return null;
  }
};
