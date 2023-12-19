import cn from "classnames";
import { Form, Field, ErrorMessage } from "formik";
import s from "./AuthForm.module.scss";

const AuthForm = ({ initialValues }) => (
  <Form className={s.authform}>
    <h2>{"password_confirmation" in initialValues ? "Sign up" : "Sign in"}</h2>
    <div className={s.authform__fields}>
      <label>
        Username
        <Field name="username" className={s.authform__field} />
        <ErrorMessage name="username" component="span" className={s.authform__error} />
      </label>
      <label>
        Password
        <Field name="password" className={s.authform__field} />
        <ErrorMessage name="password" component="span" className={s.authform__error} />
      </label>
      {"password_confirmation" in initialValues ? (
        <label>
          Password confirmation
          <Field name="password_confirmation" className={s.authform__field} />
          <ErrorMessage name="password_confirmation" component="span" className={s.authform__error} />
        </label>
      ) : null}
    </div>
    <button type="submit" className={s.authform__submit}>
      {"password_confirmation" in initialValues ? "Sign up" : "Sign in"}
    </button>
    <ErrorMessage name="error" component="span" className={cn(s.authform__error, s.authform__error_container)} />
  </Form>
);

export default AuthForm;
