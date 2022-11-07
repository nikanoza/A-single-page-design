import "./App.css";
import FirstContainer from "./components/firstAndSecondContainerHeader/FirstContainer";
import SecondContainer from "./components/firstAndSecondContainerHeader/SecondContainer";
import ThirdContainer from "./components/ThirdContainer/ThirdContainer";
import FourthContainer from "./components/FourthContainer/FourthContainer";
import FifthContainer from "./components/FifthContainer/FifthContainer";

import SixthContainer from "./components/SixthContainer/SixthContainer";
import SeventhContainer from "./components/SeventhContainer/SeventhContainer";

function App() {
  return (
    <div className="Appcontainer">
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
      <SixthContainer />
      <SeventhContainer />
    </div>
  );
}

export default App;
