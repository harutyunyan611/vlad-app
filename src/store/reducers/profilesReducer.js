import { SET_PROFILES, UPDATE_PROFILE } from '../actionTypes/profilesTypes'

let initialState = {
  profiles: [],
}

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((profile, i) =>
          profile.id === action.payload.id
            ? { ...profile, contentLink: action.payload.value }
            : profile,
        ),
      }
    default:
      return state
  }
}
