import "src/assets/css/App.css";

import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useIsAuthenticated } from "src/utils/functions";
import NavigateToHome from "../commons/formFields/NavigateToHome";
import { logoutService } from "src/services/userAuthService";
import NewGroup from "./NewGroup";
import GroupList from "./GroupList";

function Groups() {
  const isAuthenticated = useIsAuthenticated();

  const groupsForm = (
    <>
      {isAuthenticated ? (
        <Container
          maxW="lg"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", sm: "8" }}
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "sm" }}>Create Groups</Heading>
                {!isAuthenticated ? (
                  <Text color="fg.muted">
                    <Link href="signup">Sign up</Link> or{" "}
                    <Link href="signin">Log in</Link>
                  </Text>
                ) : (
                  <Link href="signin">
                    <Button
                      colorScheme="teal"
                      variant="link"
                      onClick={() => {
                        logoutService();
                      }}
                    >
                      Log out
                    </Button>
                  </Link>
                )}
              </Stack>
            </Stack>
            <Box
              py={{ base: "0", sm: "8" }}
              px={{ base: "4", sm: "10" }}
              bg={{ base: "transparent", sm: "bg.surface" }}
              boxShadow={{ base: "none", sm: "md" }}
              borderRadius={{ base: "none", sm: "xl" }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <NewGroup />
                </Stack>

                <Stack spacing="6">
                  <GroupList />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <>
      {useIsAuthenticated() ? (
        <>{groupsForm}</>
      ) : (
        <NavigateToHome path={"signin"} />
      )}
    </>
  );
}

export default Groups;
