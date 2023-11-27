import { ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  HStack,
  IconButton,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { deleteGroupService } from "src/services/groupService";

const GroupCard = ({ group }) => {
  return (
    <ListItem>
      <HStack spacing={4} align="stretch">
        <Box h="40px">
          <ListIcon as={ArrowForwardIcon} color="green.500" />
        </Box>
        <Box w={"170px"} h="50px">
          <Center>
            <Text size="4xl">{group?.groupName}</Text>
          </Center>
        </Box>
        <Box h="25px">
          <IconButton
            aria-label="Delete This Group"
            icon={<DeleteIcon />}
            bg="red.400"
            onClick={() => deleteGroupService(group)}
          />
        </Box>
      </HStack>
    </ListItem>
  );
};

export default GroupCard;
