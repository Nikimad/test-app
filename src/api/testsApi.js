import { get, post, patch, _delete } from "@/helpers/fetchWrapper";

export default {
  getTests: () => get("tests"),
  getTest: (id) => get(`tests/${id}`),
  createTest: (test) => post("tests", test),
  editTest: ({ id, ...changes }) => patch(`tests/${id}`, changes),
  deleteTest: (id) => _delete(`tests/${id}`),
};
