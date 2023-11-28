import { createSelector } from "@reduxjs/toolkit";

const rootSelector = createSelector(
  (state) => state,
  ({ auth }) => auth
);

export const authSelectors = {
  selectAuthData: createSelector(
    rootSelector,
    ({ is_authorized, is_admin }) => ({
      is_authorized,
      is_admin,
    })
  ),
};
