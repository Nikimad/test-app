"use client";

import useAction from "@/hooks/useAction";
import useForm from "@/hooks/useForm";
import { authActions } from "@/models/auth";

const SignupPage = () => {
  const [data, handlers] = useForm({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const signup = useAction(authActions.signup);

  const handleSubmit = (e) => {
    handlers.onSubmit(e);
    signup(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handlers.onChange}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handlers.onChange}
        />
      </label>
      <label>
        Password confirmation
        <input
          type="text"
          name="password_confirmation"
          value={data.password_confirmation}
          onChange={handlers.onChange}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupPage;
