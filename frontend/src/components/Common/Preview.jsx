import React, { useEffect, useState } from "react";

import ellipseIcon from "../../assets/img/Ellipse 2.svg";
import xIcon from "../../assets/img/×.svg";
import portrait from "../../assets/img/woman110.png";
import favIcon from "../../assets/img/Group 97.png";

import API from "../../API";

export default function Preview({ setImageId, setImagePreview }) {
  const [image, setImage] = useState({});
  const api = new API();

  useEffect(() => {
    api
      .getImage(setImageId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              <img src={favIcon} alt="favIcon" />
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
              <input type="submit" value="Download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
