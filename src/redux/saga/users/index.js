import { takeEvery, put, call } from "redux-saga/effects";
import { getUsersFailure, getUsersResponse } from "../../action/users";
import * as actionType from "../../action-types/users";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers() {
  try {
    const response = yield call(getApi);
    yield put(getUsersResponse(response));
  } catch (e) {
    yield put(getUsersFailure(e.message || "Error ocured"));
  }
}

function* userSaga() {
  yield takeEvery(actionType.USER_REQUEST, fetchUsers);
}

export default userSaga;
