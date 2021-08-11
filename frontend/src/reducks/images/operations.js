import API from '../../API'
import { fetchImageAction, deleteImageAction } from './actions'

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

export const deleteImage = (id) => {
  return async (dispatch, getState) => {
    return api.deleteImage(id)
      .then((response) => {
        const prevImage = getState().images.list
        const nextImage = prevImage.filter(image => image.id !== id)
        dispatch(deleteImageAction(nextImage))
      }).catch((error) => {
        alert('Failed to connect API to delete an image')
        console.log(error)
      })
  }
}