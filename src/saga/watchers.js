import { takeEvery, all } from 'redux-saga/effects'
import { actionTypes } from '../actions/users'
import {
  fetchUsers, editUser, createUser, deleteUser,
} from './workers'

function* fetchUsersWatcher() {
  yield takeEvery(actionTypes.FETCH_USERS_REQUEST, fetchUsers)
}

function* editUserWatcher() {
  yield takeEvery(actionTypes.EDIT_USER_REQUEST, editUser)
}

function* createUserWatcher() {
  yield takeEvery(actionTypes.CREATE_USER_REQUEST, createUser)
}

function* deleteUserWatcher() {
  yield takeEvery(actionTypes.DELETE_USER_REQUEST, deleteUser)
}

export default function* rootSaga() {
  yield all([
    fetchUsersWatcher(),
    editUserWatcher(),
    createUserWatcher(),
    deleteUserWatcher(),
  ])
}
