import { VALID_EMAIL_REGEX, VALID_PASSWORD_REGEX } from "src/utils/regex";
import { msg } from "src/utils/messages";
import {
  INPUT_FIELD_MAX_LENGTH,
  INPUT_PASSWORD_MAX_LENGTH,
  INPUT_PASSWORD_MIN_LENGTH,
} from "src/utils/const";

export const EmailRules = {
  required: msg.email,
  pattern: {
    value: VALID_EMAIL_REGEX,
    message: msg.invalidEmail,
  },
};

export const groupNameRules = {
  required: msg.groupName,
};

export const FirstNameRules = {
  required: msg.firstName,
  maxLength: {
    value: INPUT_FIELD_MAX_LENGTH,
    message: msg.firstNameMaxLength,
  },
};

export const LastNameRules = {
  maxLength: {
    value: INPUT_FIELD_MAX_LENGTH,
    message: msg.lastNameMaxLength,
  },
};

export const PasswordRules = {
  required: msg.password,
  pattern: {
    value: VALID_PASSWORD_REGEX,
    message: msg.invalidPassword,
  },

  minLength: {
    value: INPUT_PASSWORD_MIN_LENGTH,
    message: msg.passwordNameMinLength,
  },
  maxLength: {
    value: INPUT_PASSWORD_MAX_LENGTH,
    message: msg.passwordNameMinLength,
  },
};

export const ConfirmPasswordRules = {
  required: msg.confirmPassword,
};
