"use client";

import useAction from "@/hooks/useAction";
import { authActions } from "@/models/auth";
import { Formik } from "formik";
import AuthForm from "@/components/AuthForm";

const SignupPage = () => {
  const signup = useAction(authActions.signup);

  const handleSubmit = (values, { setSubmitting, setFieldTouched }) => {
    setSubmitting(false);
    setFieldTouched("error");
    signup(values);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "", password_confirmation: "" }}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
      component={AuthForm}
    />
  );
};

export default SignupPage;
