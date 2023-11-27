import { atom } from "recoil";
import { LOCAL_GROUPS } from "src/utils/const";

export const groupsInitialState = [];

export const groups = atom({
  key: "groups", // unique ID (with respect to other atoms/selectors)
  default:
    JSON.parse(localStorage.getItem(LOCAL_GROUPS) || "[]") ||
    groupsInitialState, // default value (aka initial value)
});
