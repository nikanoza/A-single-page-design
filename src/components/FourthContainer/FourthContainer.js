import "./FourthContainer.css";
import FourthContainerGirl from "../../ImagesAll/FourthContainerGirl.svg";

function FourthContainer(props) {
  return (
    <div className="FourthContainer">
      <img
        src={FourthContainerGirl}
        className="FourthContainerGirl"
        alt="Girl Photo"
      />
      <h1 className="FourthContainerText">
        I’m Amy, and I’d love to work on your next project
      </h1>
      <div className="FourthContainerTextSmall">
        I love working with others to create beautiful design solutions. I’ve
        designed everything from brand illustrations to complete mobile apps.
        I’m also handy with a camera!
      </div>
      <button className="FourthContainerButton">Free Consultation</button>
    </div>
  );
}

export default FourthContainer;
