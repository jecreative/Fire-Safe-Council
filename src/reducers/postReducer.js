import {
  GET_POSTS,
  GET_POST,
  GET_FEATURED_POSTS,
  GET_NEWS_POSTS,
  GET_EVENT_POSTS,
  SEARCH_POSTS,
  SET_CURRENT,
  GET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  POSTS_ERROR,
} from '../actions/types';

const initialState = {
  posts: null,
  featuredPosts: null,
  news: null,
  events: null,
  post: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        posts: state.post.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case GET_FEATURED_POSTS:
      return {
        ...state,
        featuredPosts: action.payload,
        loading: false,
      };
    case GET_NEWS_POSTS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case GET_EVENT_POSTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case SEARCH_POSTS:
      return {
        ...state,
        logs: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case GET_CURRENT:
      return {
        ...state,
        post: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
