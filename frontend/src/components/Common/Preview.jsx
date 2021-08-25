import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ellipseIcon from "../../assets/img/Ellipse 2.svg";
import xIcon from "../../assets/img/×.svg";
import portrait from "../../assets/img/woman110.png";
import favIcon from "../../assets/img/Group 97.png";

import { getFavorites } from "../../reducks/favorites/selectors";

import {
  addFavorite,
  fetchLocalStorage,
} from "../../reducks/favorites/operations";

import API from "../../API";

export default function Preview({ setImageId, setImagePreview }) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [image, setImage] = useState({});
  const favorites = getFavorites(selector);
  const api = new API();

  useEffect(() => {
    dispatch(fetchLocalStorage());
    api
      .getImage(setImageId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickFavorite = (image) => {
    dispatch(addFavorite(image));
  };

  const clickCloseButton = () => {
    setImagePreview(false);
  };

  return (
    <div className="preview">
      <div id="preview">
        <div className="preview-icon">
          <img src={ellipseIcon} className="ellipse" alt="..." />
          <img
            src={xIcon}
            className="x-icon"
            alt="..."
            onClick={() => clickCloseButton()}
          />
        </div>
        <div className="figure1">
          <div className="image">
            <div className="fav-icon">
              {favorites.filter(
                (favoriteImage) => image.id === favoriteImage.id
              ).length === 0 && (
                <img
                  src={favIcon}
                  alt="favIcon"
                  onClick={() => clickFavorite(image)}
                />
              )}
            </div>
            <img
              src={image.image}
              className="figure-img"
              alt={image.description}
            />
          </div>
          <div className="caption">
            <div className="figure-caption">
              <p className="textstart"> {image.name}</p>
              <p className="textend">{image.description}</p>
            </div>
          </div>
        </div>
        <div className="sm-fig">
          <p>Preview</p>
          <div className="figure2">
            <div className="image">
              <img src={portrait} className="portrait" alt="..." />
              <img
                src={image.image}
                className="back-img"
                alt={image.description}
              />
            </div>
            <div className="caption">
              <a href={image.image} download={image.name} target="_blank">
                <input type="submit" value="Download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
