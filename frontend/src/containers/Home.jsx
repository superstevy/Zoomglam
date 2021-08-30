import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImgSearch from "../assets/img/icons8-search-500.svg";
import favIcon from "../assets/img/Group 97.png";

import { getImages, getHasNext } from "../reducks/images/selectors.js";
import { getFavorites } from "../reducks/favorites/selectors";

import { fetchImages } from "../reducks/images/operations";
import {
  addFavorite,
  fetchLocalStorage,
} from "../reducks/favorites/operations";

import Preview from "../components/Common/Preview";

export default function Home() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const images = getImages(selector);
  const hasNext = getHasNext(selector);
  const favorites = getFavorites(selector);
  const [imagePreview, setImagePreview] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchLocalStorage());
    dispatch(fetchImages(page));
    setPage(page + 1);
  }, []);

  const clickImage = (imageId) => {
    setImageId(imageId);
    setImagePreview(true);
  };

  const clickFavorite = (image) => {
    dispatch(addFavorite(image));
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
              <div className="instruct-btn">
                <p>
                  Find your zoom <span>background</span>
                </p>
              </div>
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
            {images.map((image) => (
              <li key={image.id}>
                {favorites.filter(
                  (favoriteImage) => image.id === favoriteImage.id
                ).length === 0 && (
                  <img
                    className="fav-icon"
                    src={favIcon}
                    alt="favIcon"
                    onClick={() => clickFavorite(image)}
                  />
                )}
                <img
                  src={image.image}
                  alt={image.description}
                  onClick={() => clickImage(image.id)}
                />
              </li>
            ))}
          </ul>
          <div className="show-more-btn">
            {hasNext && (
              <input
                className="show-more"
                type="submit"
                value="Show more"
                onClick={clickShowMore}
              />
            )}
          </div>

          <hr />
        </section>
      </div>
    </>
  );
}
