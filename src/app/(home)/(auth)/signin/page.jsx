"use client";

import useAction from "@/hooks/useAction";
import useForm from "@/hooks/useForm";
import { authActions } from "@/models/auth";

const SigninPage = () => {
  const [data, handlers] = useForm({
    username: "",
    password: "",
  });

  const signin = useAction(authActions.signin);

  const handleSubmit = (e) => {
    handlers.onSubmit(e);
    signin(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in</h2>
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
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SigninPage;
