import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERROR,
} from '../types/adminTypes'

const initialState = {
  loading: false,
  success: false,
  credentials: {},
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        loading: true,
      }
    case ADMIN_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        credentials: action.payload,
      }
    case ADMIN_LOGIN_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      }
    // case ADMIN_LOGOUT:
    //   return {}
    default:
      return state
  }
}
