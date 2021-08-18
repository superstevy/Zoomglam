export const FETCH_IMAGE = "FETCH_IMAGE";
export const fetchImageAction = (images, hasNext) => {
  return {
    type: "FETCH_IMAGE",
    list: images,
    hasNext: hasNext,
  };
};
