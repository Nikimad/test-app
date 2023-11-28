import { call, put, takeEvery } from "redux-saga/effects";
import authApi from "@/api/authApi";
import { authActions } from ".";

function* signup({ payload }) {
  try {
    yield call(authApi.signup, payload);
    yield put(authActions.loginSuccess({ is_admin: payload.is_admin }));
  } catch (e) {
    yield console.log(e);
  }
}

function* signin({ payload }) {
  try {
    const user = yield call(authApi.signin, payload);
    yield put(authActions.signinSuccess(user));
  } catch (e) {
    yield console.log(e);
  }
}

function* logout() {
  yield call(authApi.logout);
  yield put(authActions.logoutSuccess());
}

function* getCurrentUser() {
  try {
    const user = yield call(authApi.getUser);
    yield put(authActions.getUserSuccess(user));
  } catch (e) {
    yield console.log(e);
  }
}

export default function* authSaga() {
  yield takeEvery(authActions.signup, signup);
  yield takeEvery(authActions.signin, signin);
  yield takeEvery(authActions.logout, logout);
  yield takeEvery(authActions.getUser, getCurrentUser);
}
