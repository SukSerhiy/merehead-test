/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from '../actions/users'

const defaultState = {
  isFetching: false,
  isDeleting: {},
  isSaving: false,
  items: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.FETCH_USERS_SUCCESS: {
      const { items } = action
      return {
        ...state,
        isFetching: false,
        items,
      }
    }
    case actionTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    case actionTypes.CREATE_USER_SUCCESS: {
      const { item: newItem } = action
      return {
        ...state,
        isSaving: false,
        items: [ ...state.items, newItem ],
      }
    }
    case actionTypes.CREATE_USER_REQUEST:
    case actionTypes.EDIT_USER_REQUEST:
      return {
        ...state,
        isSaving: true,
      }
    case actionTypes.EDIT_USER_SUCCESS: {
      const { id, item: newItem } = action
      const items = [ ...state.items ]
      const editedItem = items.find((_item) => _item.id === +id)
      const editedIndex = items.indexOf(editedItem)
      items.splice(editedIndex, 1, newItem)
      return {
        ...state,
        isSaving: false,
        items,
      }
    }
    case actionTypes.EDIT_USERS_ERROR:
    case actionTypes.CREATE_USERS_ERROR:
      return {
        ...state,
        isSaving: false,
      }
    case actionTypes.DELETE_USER_REQUEST: {
      const { id } = action
      return {
        ...state,
        isDeleting: { [id]: true },
      }
    }
    case actionTypes.DELETE_USER_SUCCESS: {
      const { id, items } = action
      const isDeleting = { ...state.isDeleting }
      delete isDeleting[id]
      return {
        ...state,
        isDeleting,
        items,
      }
    }
    case actionTypes.DELETE_USERS_ERROR:
      return {
        ...state,
        isDeleting: false,
      }
    default:
      return state
  }
}
