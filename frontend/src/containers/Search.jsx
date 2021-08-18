import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import ImgSearch from "../assets/img/icons8-search-500.svg";

import { getImages, getHasNext } from "../reducks/images/selectors.js";
import { fetchImages } from "../reducks/images/operations";

import Preview from "../components/Common/Preview";

export default function Search() {
  const parsed = queryString.parse(window.location.search);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const images = getImages(selector);
  const hasNext = getHasNext(selector);
  const [imagePreview, setImagePreview] = useState(false);
  const [imageId, setImageId] = useState(null);

  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (parsed.page !== undefined) {
      setPage(parsed.page);
    }
    if (parsed.search !== undefined) {
      setSearch(parsed.search);
    }
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(fetchImages(page, search));
    }
  }, [page, search]);

  const clickImage = (imageId) => {
    setImageId(imageId);
    setImagePreview(true);
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
            <p>
              Search <b>"{search}"</b>
            </p>
          </div>
        </div>
        <main className="grid-container">
          <ul>
            {images.map((image) => (
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
        </main>
      </div>
    </div>
  );
}
