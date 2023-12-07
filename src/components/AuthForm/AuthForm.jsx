import { Form, Field, ErrorMessage } from "formik";

const AuthForm = ({ initialValues }) => (
  <Form>
    <h2>{"password_confirmation" in initialValues ? "Sign up" : "Sign in"}</h2>
    <label>
      Username
      <Field name="username" />
      <ErrorMessage name="username" component="span" />
    </label>
    <label>
      Password
      <Field name="password" />
      <ErrorMessage name="password" component="span" />
    </label>
    {"password_confirmation" in initialValues ? (
      <label>
        Password confirmation
        <Field name="password_confirmation" />
        <ErrorMessage name="password_confirmation" component="span" />
      </label>
    ) : null}
    <button type="submit">
      {"password_confirmation" in initialValues ? "Sign up" : "Sign in"}
    </button>
    <ErrorMessage name="error" component="span" />
  </Form>
);

export default AuthForm;
