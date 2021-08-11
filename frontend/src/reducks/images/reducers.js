import * as Actions from './actions'
import initialState from '../store/initialState'

export const ImagesReducer = (state = initialState.images, action) => {
  switch (action.type) {
    case Actions.FETCH_IMAGE:
      return {
        ...state,
        list: action.payload
      }
    case Actions.DELETE_IMAGE:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}
