import "./App.css";
import PrashantButton from "./component/PrashantButton";
import SamyakFooter from "./component/SamyakFooter";
import SamyakPart1 from "./component/SamyakPart1";

function App() {
  return (
    <div className="main">
      <div className="top-part">
        <div className="top-part-text">Your Essence, Our Excellence:</div>
      </div>
      <SamyakPart1 />
      <div className="top-part">
        <div className="top-part-text">Your Essence, Our Excellence:</div>
      </div>
      <div
        style={{ width: "100%", height: "50px", backgroundColor: "#21232D" }}
      ></div>
      <SamyakFooter />
    </div>
  );
}

export default App;
