import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import FormPassword from "../commons/formFields/FormPassword";
import { useForm } from "react-hook-form";
import { EmailRules, PasswordRules } from "src/utils/rules";
import { loginService } from "src/services/userAuthService";
import FormInput from "../commons/formFields/FormInput";
import { useState } from "react";
import { useIsAuthenticated } from "src/utils/functions";
import NavigateToHome from "../commons/formFields/NavigateToHome";
import FormError from "../commons/formFields/FormError";

export const Signin = () => {
  const {
    register,
    handleSubmit,
    trigger,
    watch,

    formState: { errors, dirtyFields },
  } = useForm();

  const [signedIn, setsignedIn] = useState(false);

  const onSubmit = (data) =>
    loginService(data) ? setsignedIn(true) : setsignedIn("error");

  const passwordValue = watch("password");

  const email = (
    <Box>
      <FormInput
        name="email"
        id={"email"}
        type={"email"}
        label={"Email:"}
        register={register}
        rules={EmailRules}
        errorMsg=""
        errors={errors}
        isRequired={true}
        trigger={trigger}
        placeholder="johndoe@gmail.com"
      />
    </Box>
  );

  const signInForm = (
    <>
      {signedIn !== true ? (
        <Container
          maxW="lg"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", sm: "8" }}
        >
          <Stack spacing="8">
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "sm" }}>
                  Log in to your account
                </Heading>
                <Text color="fg.muted">
                  {"Don't have an account"}? <Link href="signup">Sign up</Link>
                </Text>
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
                  {email}
                  <FormPassword
                    name="password"
                    label="Password:"
                    type="password"
                    id="password"
                    placeholder=""
                    autoFocus={false}
                    register={register}
                    rules={PasswordRules}
                    errors={errors}
                    dirtyFields={dirtyFields}
                    passwordValue={passwordValue}
                    trigger={trigger}
                    isRequired={true}
                  />
                </Stack>

                {signedIn === "error" ? (
                  <Stack>
                    <FormError msg="Couldn't log in try again" />
                  </Stack>
                ) : (
                  <></>
                )}

                <Stack spacing="6">
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Log In
                  </Button>
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

  return <>{!useIsAuthenticated() ? <>{signInForm}</> : <NavigateToHome />}</>;
};
