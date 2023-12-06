import { createSelector } from "@reduxjs/toolkit";
import { adapter } from ".";

const rootSelector = createSelector(
  (state) => state,
  ({ tests }) => tests
);

export const testsSelectors = adapter.getSelectors(rootSelector);
