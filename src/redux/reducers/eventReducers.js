import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
} from '../types/eventTypes'

const initialState = {
  events: [],
  loading: false,
}

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_EVENTS_SUCCESS:
      return {
        loading: false,
        events: action.payload,
      }
    case GET_EVENTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
