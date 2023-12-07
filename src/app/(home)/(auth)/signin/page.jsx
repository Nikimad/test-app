"use client";

import useAction from "@/hooks/useAction";
import { authActions } from "@/models/auth";
import { Formik } from "formik";
import AuthForm from "@/components/AuthForm";

const SigninPage = () => {
  const signin = useAction(authActions.signin);

  const handleSubmit = (values, { setSubmitting, setFieldTouched }) => {
    setSubmitting(false);
    setFieldTouched("error");
    signin(values);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
      component={AuthForm}
    />
  );
};

export default SigninPage;
