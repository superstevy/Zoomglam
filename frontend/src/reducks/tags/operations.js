import API from "../../API";

import { fetchTagAction } from "./actions";

const api = new API();

export const fetchTags = () => {
  return async (dispatch) => {
    return api
      .getTags()
      .then((tags) => {
        dispatch(fetchTagAction(tags));
      })
      .catch((error) => {
        alert("Failed to connect API: /tags/");
        console.log(error);
      });
  };
};
