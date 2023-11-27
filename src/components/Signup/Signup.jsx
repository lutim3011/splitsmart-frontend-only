import {
  Flex,
  Box,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import FormPassword from "src/components/commons/formFields/FormPassword";
import {
  ConfirmPasswordRules,
  EmailRules,
  FirstNameRules,
  LastNameRules,
  PasswordRules,
} from "src/utils/rules";

import FormInput from "src/components/commons/formFields/FormInput";
import { msg } from "src/utils/messages";
import { signupService } from "src/services/userAuthService";

import { useIsAuthenticated } from "src/utils/functions";
import NavigateToHome from "../commons/formFields/NavigateToHome";

export default function Signup() {
  // eslint-disable-next-line no-unused-vars

  const [signedUp, setSignedUp] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    watch,

    formState: { errors, dirtyFields },
  } = useForm();

  const passwordValue = watch("password");
  const cPasswordValue = watch("confirmPassword");

  const onSubmit = (data) => {
    signupService(data);
    setSignedUp(true);
  };

  const firstName = (
    <Box>
      <FormInput
        name={"fName"}
        id={"firstName"}
        type={"text"}
        label={"First Name :"}
        register={register}
        rules={FirstNameRules}
        errors={errors}
        isRequired={true}
        trigger={trigger}
      />
    </Box>
  );

  const lastName = (
    <Box>
      <FormInput
        name="lname"
        id={"lastName"}
        type={"text"}
        label={"Last Name:"}
        register={register}
        rules={LastNameRules}
        errors={errors}
        trigger={trigger}
      />
    </Box>
  );

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
      />
    </Box>
  );

  const passwords = (
    <>
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
      />
      <FormPassword
        cPasswordValue={cPasswordValue}
        confirmPasswordMessage={msg.passwordNotMatch}
        name="confirmPassword"
        label="Confirm Password:"
        type="password"
        id="confirmPassword"
        placeholder=""
        autoFocus={false}
        register={register}
        rules={ConfirmPasswordRules}
        errors={errors}
        isConfirmPassword={true}
        passwordValue={passwordValue}
        dirtyFields={dirtyFields}
        trigger={trigger}
      />
    </>
  );

  const userName = (
    <HStack>
      {firstName}
      {lastName}
    </HStack>
  );

  const signUpForm = !useIsAuthenticated() ? (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {userName}
            {email}
            {passwords}
            <Stack spacing={10} pt={2}>
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
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link href="signin" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  ) : (
    <NavigateToHome />
  );

  const returnValue = signedUp ? <NavigateToHome /> : <>{signUpForm}</>;

  return <>{returnValue}</>;
}
