import { getRecoil, setRecoil } from "recoil-nexus";
import { loggedInUser } from "src/atoms/authAtoms";
import { groups } from "src/atoms/groupAtoms";
import { LOCAL_GROUPS } from "src/utils/const";
import { removeFromArray } from "src/utils/functions";

export const newGroupService = (data) => {
  const currentUser = getRecoil(loggedInUser);
  const currentGroups = getRecoil(groups);

  const newGroup = {
    groupName: data?.groupName,
    email: currentUser?.email,
  };

  const newGroups = [...currentGroups, newGroup];
  setRecoil(groups, newGroups);

  localStorage.setItem(LOCAL_GROUPS, JSON?.stringify(newGroups));
};

export const deleteGroupService = (data) => {
  const currentGroups = getRecoil(groups);
  const currentUser = getRecoil(loggedInUser);

  const groupOwenerAndCurrentUser = () => data?.email === currentUser?.email;

  if (groupOwenerAndCurrentUser) {
    const newGroups = [...removeFromArray(currentGroups, data?.groupName)];
    setRecoil(groups, newGroups);

    localStorage.setItem(LOCAL_GROUPS, JSON?.stringify(newGroups));
  }
};

export const editGroupService = (newData, oldData) => {
  newGroupService(newData);
  deleteGroupService(oldData);
};
