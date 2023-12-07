import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormikContext } from "formik";
import { authSelectors } from "@/models/auth/selectors";
import AuthForm from "./AuthForm";

const AuthFormContainer = () => {
  const { initialValues, setErrors } = useFormikContext();
  const errors = useSelector(authSelectors.selectErrors);

  useEffect(() => {
    if (errors) setErrors(errors);
  }, [errors]);

  return <AuthForm initialValues={initialValues} />;
};

export default AuthFormContainer;
