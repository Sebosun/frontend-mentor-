import "./App.scss";
import Card from "./components/Card";
import Report from "./components/Report";
import jeremy from "./images/image-jeremy.png";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import social from "./images/icon-social.svg";
import selfCare from "./images/icon-self-care.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Report name="Jeremy Robson" image={jeremy} active="weekly" />
        <div className="cards">
          <Card icon={work} activity="work" hours={32} last_week={10} />
          <Card icon={play} activity="play" hours={2} last_week={3} />
          <Card icon={study} activity="study" hours={3} last_week={24} />
          <Card icon={exercise} activity="exercise" hours={11} last_week={22} />
          <Card icon={social} activity="social" hours={15} last_week={5} />
          <Card icon={selfCare} activity="selfCare" hours={0} last_week={1} />
        </div>
      </div>
    </div>
  );
}

export default App;
