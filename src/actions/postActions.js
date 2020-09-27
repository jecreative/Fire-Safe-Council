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

// Get all posts
export const getPosts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('https://fsc-backend.herokuapp.com/posts');
    const data = await res.json();

    dispatch({
      type: GET_POSTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

// Get single post
export const getPost = (post) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      `https://fsc-backend.herokuapp.com/posts/${post.id}`,
      {
        method: 'GET',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();

    dispatch({
      type: GET_POST,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Get Featured Posts
export const getFeaturedPosts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('https://fsc-backend.herokuapp.com/posts');
    const data = await res.json();

    const featuredPosts = [];

    data.forEach((item) => {
      if (item.Featured === true) {
        featuredPosts.push(item);
      }
    });

    dispatch({
      type: GET_FEATURED_POSTS,
      payload: featuredPosts,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

// Get News Posts
export const getNewsPosts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('https://fsc-backend.herokuapp.com/posts');
    const data = await res.json();

    const newsPosts = [];

    data.forEach((item) => {
      if (item.Category === 'News') {
        newsPosts.push(item);
      }
    });

    dispatch({
      type: GET_NEWS_POSTS,
      payload: newsPosts,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

// Get Events
export const getEvents = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('https://fsc-backend.herokuapp.com/posts');
    const data = await res.json();

    const events = [];

    data.forEach((item) => {
      if (item.Category === 'Events') {
        events.push(item);
      }
    });

    dispatch({
      type: GET_EVENT_POSTS,
      payload: events,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response,
    });
  }
};

// Search posts
export const searchPosts = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      `https://fsc-backend.herokuapp.com/posts?q=${text}`
    );
    const data = await res.json();

    dispatch({
      type: SEARCH_POSTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set current post
export const setCurrent = (post) => {
  return {
    type: SET_CURRENT,
    payload: post,
  };
};

// Get current post
export const getCurrent = (current) => {
  return {
    type: GET_CURRENT,
    payload: current,
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
