import { put } from 'redux-saga/effects'
import { api, history } from '../config'
import { actionTypes } from '../actions/users'

export function* fetchUsers() {
  try {
    const resp = yield api.getUsers()
    yield put({
      type: actionTypes.FETCH_USERS_SUCCESS,
      items: resp.data,
    })
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_USERS_ERROR,
      error,
    })
  }
}

export function* editUser(action) {
  try {
    const resp = yield api.editUser(action.id, action.data)
    yield put({
      type: actionTypes.EDIT_USER_SUCCESS,
      id: action.id,
      item: resp.data,
    })
  } catch (error) {
    yield put({
      type: actionTypes.EDIT_USER_ERROR,
      error,
    })
  }
}

export function* createUser(action) {
  try {
    const resp = yield api.createUser(action.data)
    yield put({
      type: actionTypes.CREATE_USER_SUCCESS,
      item: resp.data,
    })
    history.replace('/')
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  } catch (error) {
    yield put({
      type: actionTypes.CREATE_USER_ERROR,
      error,
    })
  }
}

export function* deleteUser(action) {
  const { id } = action
  try {
    const resp = yield api.deleteUser(id)
    yield put({
      type: actionTypes.DELETE_USER_SUCCESS,
      id,
      items: resp.data,
    })
  } catch (error) {
    yield put({
      type: actionTypes.DELETE_USER_ERROR,
      error,
    })
  }
}
