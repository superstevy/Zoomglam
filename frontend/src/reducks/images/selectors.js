import { createSelector } from "reselect";

const imagesSelector = (state) => state.images;
const pagesSelector = (state) => state.images;

export const getImages = createSelector(
  [imagesSelector],
  (state) => state.list
);

export const getHasNext = createSelector(
  [pagesSelector],
  (state) => state.hasNext
);
