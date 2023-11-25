import { get, post, _delete } from "@/helpers/fetchWrapper";

export default {
  signup: (data) => post("signup", data),
  signin: (data) => post("signin", data),
  logout: () => _delete("logout"),
  getUser: () => get("users/current"),
};
