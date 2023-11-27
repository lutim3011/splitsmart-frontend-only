import { getRecoil } from "recoil-nexus";
import { loggedInUser } from "src/atoms/authAtoms";
import { groups } from "src/atoms/groupAtoms";
import FormInput from "../commons/formFields/FormInput";
import { groupNameRules } from "src/utils/rules";
import { editGroupService } from "src/services/groupService";
import { useForm } from "react-hook-form";

const EditGroup = () => {
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
      editGroupService(data);
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
      register={register}
      rules={groupNameRules}
      errorMsg=""
      errors={errors}
      trigger={trigger}
      onEnter={handleSubmit(onEnter)}
    />
  );
};

export default EditGroup;
