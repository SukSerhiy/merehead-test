export const actionTypes = {
  FETCH_USERS_REQUEST: 'users/FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'users/FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'users/FETCH_USERS_ERROR',
  CREATE_USER_REQUEST: 'users/CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'users/CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'users/CREATE_USER_ERROR',
  EDIT_USER_REQUEST: 'users/EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS: 'users/EDIT_USER_SUCCESS',
  EDIT_USER_ERROR: 'users/EDIT_USER_ERROR',
  DELETE_USER_REQUEST: 'users/DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'users/DELETE_USER_SUCCESS',
  DELETE_USER_ERROR: 'users/DELETE_USER_ERROR',
}

export const fetchUsers = () => ({
  type: actionTypes.FETCH_USERS_REQUEST,
})

export const editUser = (id, { name, surname, desc }) => ({
  type: actionTypes.EDIT_USER_REQUEST,
  id,
  data: { name, surname, desc },
})

export const createUser = ({ name, surname, desc }) => ({
  type: actionTypes.CREATE_USER_REQUEST,
  data: { name, surname, desc },
})

export const deleteUser = (id) => ({
  type: actionTypes.DELETE_USER_REQUEST,
  id,
})
