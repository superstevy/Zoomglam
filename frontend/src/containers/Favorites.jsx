import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImgSearch from "../assets/img/icons8-search-500.svg";

import {
  deleteFavorite,
  fetchLocalStorage,
} from "../reducks/favorites/operations";

import { getFavorites } from "../reducks/favorites/selectors";

export default function Favorites() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favorites = getFavorites(selector);

  useEffect(() => {
    dispatch(fetchLocalStorage());
  }, []);

  return (
    <div id="favorite">
      <div className="favorite">
        <div className="container">
          <div className="search">
            <div className="search-inner">
              <form action="/search" method="get">
                <input type="text" name="search" placeholder="Type here..." />
                <img src={ImgSearch} alt="search icon" />
              </form>
            </div>
          </div>
          <div className="title">
            <p>Favorites</p>
          </div>
        </div>

        <div className="fav-list">
          {favorites &&
            favorites.map((favorite) => (
              <div>
                <div className="fav-img" key={favorite.id}>
                  <img src={favorite.image} alt={favorite.description} />
                </div>
                <div className="fav-btn">
                  <input type="submit" value="-" className="mobile" />

                  <input
                    type="submit"
                    value="Download"
                    className="download-btn"
                  />

                  <input
                    type="submit"
                    value="Remove"
                    className="remove-btn"
                    onClick={() => dispatch(deleteFavorite(favorite.id))}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
