import { takeLatest, call, put } from "redux-saga/effects";;

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
  	.then(response => response.json())
  	.then(data => data.message)
}

function* workerSaga() {
  try {
    const dog = yield call(fetchDog);
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}