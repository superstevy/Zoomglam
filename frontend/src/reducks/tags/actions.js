export const FETCH_TAG = "FETCH_TAG";
export const fetchTagAction = (tags) => {
  return {
    type: "FETCH_TAG",
    payload: tags,
  };
};
