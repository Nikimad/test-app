import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const adapter = createEntityAdapter();

const testsSlice = createSlice({
  name: "tests",
  initialState: adapter.getInitialState(),
  reducers: {
    getTests(state) {
      return state;
    },
    getTestsSuccess(state, { payload }) {
      adapter.addMany(state, payload);
    },
    getTest(state) {
      return state;
    },
    getTestSuccess: adapter.addOne,
    createTest(state) {
      return state;
    },
    createTestSuccess(state, { payload }) {
      adapter.addOne(state, payload);
    },
    editTest(state) {
      return state;
    },
    editTestSuccess: adapter.updateOne,
    deleteTest(state) {
      return state;
    },
    deleteTestSucces(state, { payload }) {
      adapter.removeOne(state, payload);
    },
  },
});

export const testsActions = testsSlice.actions;

export default testsSlice.reducer;
