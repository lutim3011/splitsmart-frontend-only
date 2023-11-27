import {
  INPUT_FIELD_MAX_LENGTH,
  INPUT_PASSWORD_MAX_LENGTH,
  INPUT_PASSWORD_MIN_LENGTH,
} from "src/utils/const";

export const msg = {
  groupName: "Group Name is required",

  email: "Email is required",
  invalidEmail: "Please enter correct email address",

  confirmEmail: "Confirm email is required",
  confirmEmailMatch: "Email address fields does not match",

  firstName: "First name is required",
  firstNameMaxLength: `First name should not exceed ${INPUT_FIELD_MAX_LENGTH} characters`,

  lastNameMaxLength: `Last name should not exceed ${INPUT_FIELD_MAX_LENGTH} characters`,

  password: "Password is required",
  passwordNameMaxLength: `Password should not exceed ${INPUT_PASSWORD_MAX_LENGTH} characters`,
  passwordNameMinLength: `Password must at least be of ${INPUT_PASSWORD_MIN_LENGTH} characters`,

  NotEnterBlankSpace: "Blank space is not allowed",

  confirmPassword: "Confirm password is required",
  confirmNewPassword: "Confirm new password is required",
  passwordNotMatch: "Password and confirm password must match",
  newPasswordNotMatch: "New password and confirm new password must match",
  passwordMatch: "Password can only contain Latin letters.",
};
