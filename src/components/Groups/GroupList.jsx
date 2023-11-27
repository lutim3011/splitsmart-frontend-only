import { Center, List, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { groups } from "src/atoms/groupAtoms";

import GroupCard from "./GroupCard";

const GroupList = () => {
  const [allGroups] = useRecoilState(groups);

  return (
    <>
      {allGroups?.length ? (
        <List spacing={5}>
          {allGroups.map((e, index) => (
            <GroupCard key={index} group={e} />
          ))}
        </List>
      ) : (
        <Center>
          <Text color="red.300">No Groups To Show !</Text>
        </Center>
      )}
    </>
  );
};

export default GroupList;
