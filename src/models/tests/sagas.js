import { call, put, takeEvery } from "redux-saga/effects";
import testsApi from "@/api/testsApi";
import { testsActions } from ".";

function* getTests() {
  try {
    const { tests } = yield call(testsApi.getTests);
    yield put(testsActions.getTestsSuccess(tests));
  } catch (e) {
    yield console.log(e);
  }
}

function* getTest({ payload }) {}

function* createTest({ payload: { title } }) {
  try {
    const test = yield call(testsApi.createTest, { title });
    yield put(testsActions.createTestSuccess(test));
  } catch (e) {
    yield console.log(e);
  }
}

function* editTest({ payload }) {}

function* deleteTest({ payload }) {
  try {
    yield call(testsApi.deleteTest, payload);
    yield put(testsActions.deleteTestSucces(payload));
  } catch {
    yield console.log(e);
  }
}

export default function* testsSaga() {
  yield takeEvery(testsActions.getTests, getTests);
  yield takeEvery(testsActions.getTest, getTest);
  yield takeEvery(testsActions.createTest, createTest);
  yield takeEvery(testsActions.editTest, editTest);
  yield takeEvery(testsActions.deleteTest, deleteTest);
}
