import axios from 'axios'
import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
} from '../types/eventTypes'

export const fetchWildFireEvents = (req, res) => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENTS_REQUEST })

    const { data } = await axios.get(
      'https://us-central1-uc-firesafecouncil.cloudfunctions.net/api/events'
    )
    dispatch({
      type: GET_EVENTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_EVENTS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
