export const FETCH_IMAGE = "FETCH_IMAGE";
export const fetchImageAction = (images) => {
  return {
    type: "FETCH_IMAGE",
    payload: images,
  };
};
