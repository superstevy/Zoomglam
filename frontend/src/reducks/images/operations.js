import API from "../../API";
import { fetchImageAction } from "./actions";

const api = new API();

export const fetchImages = (page, search) => {
  return async (dispatch, getState) => {
    return api
      .getImages(page, search)
      .then((images) => {
        const prevImages = getState().images.list;
        const nextPosts = [...prevImages, ...images["results"]];
        let hasNext = false;
        if (images["next"]) {
          hasNext = true;
        }
        dispatch(fetchImageAction(nextPosts, hasNext));
      })
      .catch((error) => {
        alert("Failed to connect API: /images/");
        console.log(error);
      });
  };
};
