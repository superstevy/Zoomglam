import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImgSearch from "../assets/img/icons8-search-500.svg";

import { getImages, getHasNext } from "../reducks/images/selectors.js";
import { fetchImages } from "../reducks/images/operations";

import Preview from "../components/Common/Preview";

export default function Home() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const images = getImages(selector);
  const [imagePreview, setImagePreview] = useState(false);
  const [imageId, setImageId] = useState(null);
  const hasNext = getHasNext(selector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchImages(page));
    setPage(page + 1);
  }, []);

  const clickImage = (imageId) => {
    setImageId(imageId);
    setImagePreview(true);
  };

  const clickShowMore = () => {
    dispatch(fetchImages(page));
    setPage(page + 1);
  };

  return (
    <>
      {imagePreview && (
        <Preview setImageId={imageId} setImagePreview={setImagePreview} />
      )}

      <div className="homeHeader">
        <section className="searchbar">
          <div className="container">
            <div className="instruct">
              <p>
                Find your zoom <span>background</span>
              </p>
            </div>
            <div className="search">
              <form action="/search" method="get">
                <input type="text" name="search" placeholder="Type here..." />
                <img src={ImgSearch} alt="search icon" />
              </form>
            </div>
          </div>
        </section>
      </div>

      <div className="library">
        <section className="grid-container">
          <ul>
            {images &&
              images.map((image) => (
                <li key={image.id} onClick={() => clickImage(image.id)}>
                  <img src={image.image} alt={image.name} />
                </li>
              ))}
          </ul>
          {hasNext && (
            <input
              className="show-more"
              type="submit"
              value="Show more"
              onClick={clickShowMore}
            />
          )}

          <hr />
        </section>
      </div>
    </>
  );
}
