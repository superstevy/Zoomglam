import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgSearch from "../assets/img/icons8-search-500.svg";
import { getImages } from "../reducks/images/selectors.js";
import { fetchImages } from "../reducks/images/operations";

export default function Home() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const images = getImages(selector);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <>
      <div className="homeHeader">
        <section className="searchbar">
          <div className="container">
            <div className="instruct">
              <p>
                Find your zoom <span>background</span>
              </p>
            </div>
            <div className="search">
              <input type="search" placeholder="Type here..." />
              <img src={ImgSearch} alt="search icon" />
            </div>
          </div>
        </section>
      </div>

      <div className="library">
        <section className="grid-container">
          <ul>
            {images &&
              images.map((image) => {
                return (
                  <li key={image.id}>
                    <img src={image.image} />
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    </>
  );
}
