const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return user;
  } else {
    return null;
  }
};

export default UserInfo;
