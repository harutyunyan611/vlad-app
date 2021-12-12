import { profileAPI } from '../../api/api'
import { SET_PROFILES, UPDATE_PROFILE } from '../actionTypes/profilesTypes'

export const profilesThunk = (status) => {
  return async (dispatch) => {
    try {
      let data = await profileAPI.getProfiles(status)
      dispatch({ type: SET_PROFILES, payload: data })
    } catch (error) {
      console.log(error)
    }
  }
}

export const profileUpdateLink = (value, id) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE, payload: { value, id } })
  }
}
