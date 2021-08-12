import API from '../../API'
import { fetchImageAction } from './actions'

const api = new API()

export const fetchImages = () => {
  return async (dispatch) => {
    return api.getImages()
      .then((images) => {
        dispatch(fetchImageAction(images))
      }).catch((error) => {
        alert('Failed to connect API: /images/')
        console.log(error)
      })
  }
}
