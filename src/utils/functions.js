import { capitalize } from "radash";
import { getRecoil } from "recoil-nexus";
import { loggedInUser } from "src/atoms/authAtoms";

export const getDynamicFilter = (label) => {
  if (!label) return undefined;
  return capitalize(label.replace(":", ""));
};

export const useIsAuthenticated = () => {
  const currentUser = getRecoil(loggedInUser);
  const authenticated = Object.keys(currentUser).length ? true : false;

  return authenticated;
};

export const removeFromArray = (arr, value) => {
  const newArr = arr?.filter((item) => item?.groupName !== value);
  return [...newArr];
};
