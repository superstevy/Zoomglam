import API from '../../API'
import { fetchImageAction, deleteImageAction } from './actions'

const api = new API()

export const fetchImages = () => {
  return async (dispatch) => {
    return api.getImages()
      .then((images) => {
        dispatch(fetchImageAction(images))
      }).catch((error) => {
        alert('Failed to connect API: /posts/')
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
        alert('Failed to connect API to delete a post')
        console.log(error)
      })
  }
}

// export const addPost = (name, body, image) => {
//     return async (dispatch, getState) => {
//         // Validation
//         if (name === "" || body === "") {
//             alert("Please fill out name and body.")
//             return false
//         }

//         return api.addPost(name, body, image)
//             .then((post) => {
//                 const prevPosts = getState().posts.list
//                 const nextPosts = [post, ...prevPosts]
//                 dispatch(addPostAction(nextPosts))
//             }).catch((error) => {
//                 alert("Failed to connect API to add a post")
//                 console.log(error);
//             })
//    }
// }
