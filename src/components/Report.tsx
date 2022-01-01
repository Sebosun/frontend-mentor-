import "./Report.scss";
interface Types {
  active: string;
  name: string;
  image: string;
}
const Report = ({ active, name, image }: Types) => {
  const Name = name.split(" ");
  return (
    <div className="report">
      <div className="report__top">
        <img src={image} alt="profile" />
        <div className="name">
          <p>Report for</p>
          <h1>{name}</h1>
        </div>
      </div>
      <div className="report__list">
        <ul>
          <li className={`${active === "daily" && "active"}`}>Daily</li>
          <li className={`${active === "weekly" && "active"}`}>Weekly</li>
          <li className={`${active === "monthly" && "active"}`}>Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default Report;
