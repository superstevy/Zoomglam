import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import ImgSearch from "../assets/img/icons8-search-500.svg";
import favIcon from "../assets/img/Group 97.png";

import { getImages, getHasNext } from "../reducks/images/selectors.js";
import { getFavorites } from "../reducks/favorites/selectors";
import { getTags } from "../reducks/tags/selectors.js";

import { fetchImages } from "../reducks/images/operations";
import {
  addFavorite,
  fetchLocalStorage,
} from "../reducks/favorites/operations";
import { fetchTags } from "../reducks/tags/operations";

import Preview from "../components/Common/Preview";

export default function Search() {
  const parsed = queryString.parse(window.location.search);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const images = getImages(selector);
  const hasNext = getHasNext(selector);
  const favorites = getFavorites(selector);
  const tags = getTags(selector);

  const [imagePreview, setImagePreview] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [tagId, setTagId] = useState(null);

  useEffect(() => {
    dispatch(fetchLocalStorage());
    if (parsed.page !== undefined) {
      setPage(parsed.page);
    }
    if (parsed.search !== undefined) {
      setSearch(parsed.search);
    }
    if (parsed.tag_id !== undefined) {
      setTagId(parsed.tag_id);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(fetchImages(page, search, null));
    }
    if (tagId) {
      dispatch(fetchImages(page, null, tagId));
    }
  }, [page, search, tagId]);

  const clickImage = (imageId) => {
    setImageId(imageId);
    setImagePreview(true);
  };

  const clickFavorite = (image) => {
    dispatch(addFavorite(image));
  };

  const clickShowMore = () => {
    if (page) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      {imagePreview && (
        <Preview setImageId={imageId} setImagePreview={setImagePreview} />
      )}

      <div className="result">
        <div className="container">
          <div className="search">
            <div className="search-inner">
              <form action="/search" method="get">
                <input type="text" name="search" placeholder={search} />
                <img src={ImgSearch} alt="" />
              </form>
            </div>
          </div>
          <div className="search-office">
            <p>Search {tagId ? <b>"tag name here"</b> : <b>"{search}"</b>}</p>
          </div>
        </div>
        <main className="grid-container">
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
          {hasNext && (
            <input
              className="show-more"
              type="submit"
              value="Show more"
              onClick={clickShowMore}
            />
          )}

          <hr />
        </main>
      </div>
    </div>
  );
}
