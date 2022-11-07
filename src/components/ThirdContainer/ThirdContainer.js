import "./ThirdContainer.css";
import GraphicDesignBoxIllustration from "../../ImagesAll/GraphicDesignBoxIllustration.svg";
import UIandUX from "../../ImagesAll/UIandUX.svg";
import AppsLogo from "../../ImagesAll/AppsLogo.svg";
import IllustrationLogo from "../../ImagesAll/IllustrationLogo.svg";
import PhotographyLogo from "../../ImagesAll/PhotographyLogo.svg";
import MotionGraphic from "../../ImagesAll/MotionGraphic.svg";

function ThirdContainer(props) {
  return (
    <div className="ThirdContainer">
      <div className="GraphicDesignBox">
        <img
          src={GraphicDesignBoxIllustration}
          className="GraphicDesignBoxIllustration"
          alt="Illustration"
        />
        <a className="GraphicDesignBoxText">Graphic Design</a>
      </div>

      <div className="DivforUIandAppBox">
        <div className="UIandUXBox">
          <img src={UIandUX} className="UIandUXBoxLogo" alt="UI and UX" />
          <a className="UIandUXText">UI/UX</a>
        </div>

        <div className="AppsBox">
          <img src={AppsLogo} className="AppsLogo" alt="Apps Logo" />
          <a className="AppsText">Apps</a>
        </div>
      </div>

      <div className="IllustrationsBox">
        <img
          src={IllustrationLogo}
          className="IllustrationLogo"
          alt="Illustration logo"
        />
        <a className="IllustrationText">Illustrations</a>
      </div>

      <div className="PhotographyBox">
        <img
          src={PhotographyLogo}
          className="PhotographyLogo"
          alt="Photography Logo"
        />
        <a className="PhotographyText">Photography</a>
      </div>

      <div className="MotionGraphicBox">
        <img
          src={MotionGraphic}
          className="MotionGraphic"
          alt="Motion Graphic"
        />
        <a className="MotionGraphicText">Motion Graphics</a>
      </div>
    </div>
  );
}

export default ThirdContainer;
