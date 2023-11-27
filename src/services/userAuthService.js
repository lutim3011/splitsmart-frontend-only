import { getRecoil, setRecoil } from "recoil-nexus";
import { loggedInUser, loggedInitialState, users } from "src/atoms/authAtoms";
import { LOCAL_USERS, LOGGED_IN_USER } from "src/utils/const";

export const signupService = (data) => {
  const currentUsers = getRecoil(users);
  if (!currentUsers?.find((e) => e?.email === data?.email)) {
    const newUsers = [...currentUsers, data];
    setRecoil(users, newUsers);
    localStorage.setItem(LOCAL_USERS, JSON?.stringify(newUsers));
    loginService(data);
    return true;
  } else {
    loginService(data);
    return false;
  }
};

export const loginService = (data) => {
  const currentUsers = getRecoil(users);
  const usersExistance = currentUsers?.findIndex(
    (e) => e?.email === data?.email && e?.password === data?.password
  );

  if (usersExistance !== -1) {
    const user = currentUsers[usersExistance];
    setRecoil(loggedInUser, user);
    localStorage?.setItem(LOGGED_IN_USER, data?.email);

    return true;
  } else {
    return false;
  }
};

export const logoutService = () => {
  setRecoil(loggedInUser, loggedInitialState);
  localStorage?.removeItem(LOGGED_IN_USER);
};
