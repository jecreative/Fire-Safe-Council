import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  CREATE_POSTS_REQUEST,
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_ERROR,
} from '../types/postTypes'

export const fetchAllPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const createPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case CREATE_POSTS_REQUEST:
      return {
        ...state,
        success: false,
        loading: true,
      }
    case CREATE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        post: action.payload,
      }
    case CREATE_POSTS_ERROR:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
