import {
    SET_CURRENT_USER,
    SET_USER_PERMISSION,
    SET_LOADING_USER,
    SET_ERROR_USER,
} from '../keys'

const initialState = {
  loading: false,
  error: null,
  access_token: localStorage.getItem('access_token'),
  currentUser: {},
  permissions: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LOADING_USER:
      return { ...state, loading: payload }
    case SET_ERROR_USER:
      return { ...state, error: payload }

    case SET_CURRENT_USER:
      return { ...state, currentUser: payload }
    
    case SET_USER_PERMISSION:
      return { ...state, permissions: payload }


    default:
      return state
  }
}

export default reducer
  