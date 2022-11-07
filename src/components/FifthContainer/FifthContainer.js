import "./FifthContainer.css";
import photo1 from "../../ImagesAll/photo1.svg";
import photo2 from "../../ImagesAll/photo2.svg";
import photo3 from "../../ImagesAll/photo3.svg";
import photo4 from "../../ImagesAll/photo4.svg";
import photo5 from "../../ImagesAll/photo5.svg";
import ArrowLeft from "../../ImagesAll/ArrowLeft.svg";
import ArrowRight from "../../ImagesAll/ArrowRight.svg";
import React, { useState } from "react";

function FifthContainer(props) {
  const [left, setLeft] = useState(-520);
  console.log(left);

  function ChangePhotoLeft() {
    if (left >= -1090) {
      setLeft(left - 285);
    }
  }
  function ChangePhotoRight() {
    if (left < 335) {
      setLeft(left + 285);
    }
  }

  return (
    <div className="FifthContainer">
      <h1 className="FifthContainerHeaderText">My Work</h1>
      <div
        style={{ marginLeft: left + "px" }}
        className="FifthContainerSlideshowbox"
      >
        {" "}
        <img src={photo1} className="photo" id={photo1} alt="photo1" />
        <img src={photo2} id={photo2} className="photo" alt="photo2" />
        <img src={photo3} id={photo3} className="photo" alt="photo3" />
        <img src={photo4} id={photo4} className="photo" alt="photo4" />
        <img src={photo5} id={photo5} className="photo" alt="photo5" />
      </div>
      <div className="SwitchLeft" onClick={ChangePhotoLeft}>
        <img src={ArrowLeft} className="ArrowLeft" alt="Arrow Left" />
      </div>

      <div className="SwitchRight" onClick={ChangePhotoRight}>
        <img src={ArrowRight} className="ArrowRight" alt="Arrow Right" />
      </div>
    </div>
  );
}

function FifthContainerSlider(props) {
  return;
}

export default FifthContainer;
