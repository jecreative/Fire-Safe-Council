import axios from 'axios'
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERROR,
} from '../types/adminTypes'

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'https://us-central1-uc-firesafecouncil.cloudfunctions.net/api/admin/login',
      { email, password },
      config
    )

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
