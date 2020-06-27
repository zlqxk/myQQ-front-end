import { all, call, put, takeEvery } from "redux-saga/effects";

export function* helloSaga() {
  yield put({ type: "add", demo: "1234" });
}

export function* watchIncrementAsync() {
  yield takeEvery("helloSaga", helloSaga);
}

export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync),
  ])
}