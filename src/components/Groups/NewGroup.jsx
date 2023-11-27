import { useForm } from "react-hook-form";
import { getRecoil } from "recoil-nexus";
import { loggedInUser } from "src/atoms/authAtoms";
import { groups } from "src/atoms/groupAtoms";
import FormInput from "src/components/commons/formFields/FormInput";
import { newGroupService } from "src/services/groupService";
import { groupNameRules } from "src/utils/rules";

const NewGroup = () => {
  const {
    register,
    handleSubmit,
    trigger,
    resetField,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onEnter = (data) => {
    const currentGroups = getRecoil(groups);
    const currentUser = getRecoil(loggedInUser);

    const groupAlreadyExists = (e) =>
      e?.email === currentUser?.email &&
      e?.groupName?.toLowerCase() === data?.groupName?.toLowerCase();

    if (!currentGroups?.find((e) => groupAlreadyExists(e))) {
      clearErrors("groupName");
      newGroupService(data);
      resetField("groupName");
    } else {
      setError(
        "groupName",
        { type: "custom", message: "Already Exists" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <FormInput
      name="groupName"
      id={"groupName"}
      type={"text"}
      label={"After Creating Group Name Press Enter"}
      register={register}
      rules={groupNameRules}
      errorMsg=""
      errors={errors}
      isRequired={true}
      trigger={trigger}
      onEnter={handleSubmit(onEnter)}
    />
  );
};

export default NewGroup;
