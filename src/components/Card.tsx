import "./Card.scss";
import ellipsis from "../images/icon-ellipsis.svg";

interface props {
  activity: string;
  hours: number;
  last_week: number;
  icon: string;
}

export default function Card({ icon, activity, hours, last_week }: props) {
  return (
    <div className={`card ${activity}`}>
      <div className="card__modal">
        <img src={icon} />
      </div>
      <div className="card__activity">
        <p className="activity">{activity}</p>
        <img className="icon" src={ellipsis} alt="ellipsis" />
        <p className="hours">{hours}hrs</p>
        <p className="last_week">Last week - {last_week}hrs</p>
      </div>
    </div>
  );
}
