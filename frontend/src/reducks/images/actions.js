export const FETCH_IMAGE = 'FETCH_IMAGE'
export const fetchImageAction = (images) => {
  return {
    type: 'FETCH_IMAGE',
    payload: images
  }
}
export const DELETE_IMAGE = 'DELETE_IMAGE'
export const deleteImageAction = (images) => {
  return {
    type: 'DELETE_IMAGE',
    payload: images
  }
}
