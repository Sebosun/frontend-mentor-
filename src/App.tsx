import "./App.scss";
import Card from "./components/Card";
import Report from "./components/Report";
import jeremy from "./images/image-jeremy.png";
import work from "./images/icon-work.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Report name="Jeremy Robson" image={jeremy} active="weekly" />
        <Card icon={work} activity="work" hours={32} last_week={10} />
      </div>
    </div>
  );
}

export default App;
