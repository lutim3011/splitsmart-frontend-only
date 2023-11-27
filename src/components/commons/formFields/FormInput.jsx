import { getDynamicFilter } from "src/utils/functions";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import FormError from "src/components/commons/formFields/FormError";

const FormInput = ({
  type,
  id,
  children,
  autoFocus,
  register,
  errors,
  name,
  rules,
  label,
  rows,
  decimal,
  inputDivClassName,
  errorMsg,
  placeholder,
  disabled,
  maxLength,
  isRequired,
  onEnter,
}) => {
  const { ref, ...rest } = register(name, rules);

  if (type === "textarea")
    rules.maxLength = {
      value: 500,
      message:
        (getDynamicFilter(label) ?? "Input") + " cannot exceed 500 characters",
    };
  if (type === "text")
    rules.maxLength = {
      value: 50,
      message:
        (getDynamicFilter(label) ?? "Input") + " cannot exceed 50 characters",
    };

  function onKeyDown(ev) {
    const keyCode = ev.code || ev.key;
    if (type === "number" && (ev.keyCode === 38 || ev.keyCode === 40)) {
      ev.preventDefault();
    }

    if (onEnter && keyCode === "Enter") {
      onEnter();
    }
  }

  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <div className={inputDivClassName}>
        <Input
          onKeyDown={onKeyDown}
          disabled={disabled}
          autoFocus={autoFocus}
          name={name}
          rows={rows}
          type={decimal ? "text" : type}
          id={id}
          className={
            errorMsg || errors[name]?.message
              ? "form-control required"
              : "form-control"
          }
          {...rest}
          ref={ref}
          onWheel={(ev) => ev.target.blur()}
          placeholder={placeholder}
          maxLength={maxLength || rules?.maxLength?.value}
        />
      </div>
      <FormError msg={errorMsg || errors[name]?.message} />
      {children}
    </FormControl>
  );
};

export default FormInput;
