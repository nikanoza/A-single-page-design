import "./SeventhContainer.css";
import BlackRectangle from "../../ImagesAll/BlackRectangle.svg";
import HeaderBlackBox from "../../ImagesAll/HeaderBlackBox.svg";
function SeventhContainer(props) {
  return (
    <div className="SeventhContainer">
      <img
        src={HeaderBlackBox}
        className="SeventhHeaderBlackBox"
        alt="HeaderBlackBox"
      />

      <div className="SeventhBlackRectangleBox">Free Consultation</div>
    </div>
  );
}

export default SeventhContainer;
