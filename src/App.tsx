import "./App.scss";
import Report from "./components/Report";
import jeremy from "./images/image-jeremy.png";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Report name="Jeremy Robson" image={jeremy} active="weekly" />
      </div>
    </div>
  );
}

export default App;
