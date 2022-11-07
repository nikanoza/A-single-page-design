import "./FirstContainer.css";
import BlackRectangle from "../../ImagesAll/BlackRectangle.svg";
import HeaderBlackBox from "../../ImagesAll/HeaderBlackBox.svg";

function FirstContainer(props) {
  return (
    <div className="FirstContainer">
      <img
        src={HeaderBlackBox}
        className="HeaderBlackBox"
        alt="HeaderBlackBox"
      />

      <div className="BlackRectangleBox">Free Consultation</div>
    </div>
  );
}
export default FirstContainer;
