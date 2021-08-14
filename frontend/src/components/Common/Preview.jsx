import React from "react";

import Img6 from "../../assets/img/copernico-p_kICQCOM-1.png";

import ellipseIcon from "../../assets/img/Ellipse 2.svg";
import xIcon from "../../assets/img/×.svg";
import portrait from "../../assets/img/woman110.png";

import Search from "../../containers/Search";

export default function Preview() {
  return (
    <div className="preview">
      <Search />

      <div id="preview">
        <div className="preview-icon">
          <img src={ellipseIcon} className="ellipse" alt="..." />
          <img src={xIcon} className="x-icon" alt="..." />
        </div>
        <div className="figure1">
          <div className="image">
            <img src={Img6} className="figure-img" alt="..." />
          </div>
          <div className="caption">
            <div className="figure-caption">
              <p className="textstart"> Office #1</p>
              <p className="textend">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </div>
        </div>
        <div className="sm-fig">
          <p>Preview</p>
          <div className="figure2">
            <div className="image">
              <img src={portrait} className="portrait" alt="..." />
              <img src={Img6} className="back-img" alt="..." />
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
