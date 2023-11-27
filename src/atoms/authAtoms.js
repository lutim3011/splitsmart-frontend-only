import { atom } from "recoil";
import { LOCAL_USERS, LOGGED_IN_USER } from "src/utils/const";

export const usersInitialState = [];
export const loggedInitialState = [];

export const users = atom({
  key: "users", // unique ID (with respect to other atoms/selectors)
  default:
    JSON.parse(localStorage.getItem(LOCAL_USERS) || "[]") || usersInitialState, // default value (aka initial value)
});

const localStorageLoggedInUser = () => {
  const usersArray = JSON.parse(localStorage.getItem(LOCAL_USERS) || "[]");

  const usersEmail = localStorage.getItem(LOGGED_IN_USER);

  const usersIndex = usersArray?.findIndex((e) => e?.email === usersEmail);
  if (usersIndex !== -1) {
    return usersArray[usersIndex];
  } else {
    return loggedInitialState;
  }
};

export const loggedInUser = atom({
  key: "loggedInUser", // unique ID (with respect to other atoms/selectors)
  default: localStorageLoggedInUser(), // default value (aka initial value)
});
