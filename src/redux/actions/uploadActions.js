import axios from 'axios'
import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
} from '../types/uploadTypes'

//* Upload Product Image
export const uploadProductImages = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: UPLOAD_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const { data } = await axios.post(
      `https://us-central1-uc-firesafecouncil.cloudfunctions.net/api/uploads`,
      formData,
      config
    )

    dispatch({
      type: UPLOAD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: UPLOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
