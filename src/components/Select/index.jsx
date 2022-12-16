import "./index.css";
import logo from "../../static/images/logo_app.png";

function Select() {
  const tags = [
    { id: 1, name: "华为专区" },
    { id: 2, name: "鸿蒙智联" },
    { id: 3, name: "莫塞尔" },
    { id: 4, name: "华为智选" },
    { id: 5, name: "HarmonyOS" },
    { id: 6, name: "特惠企采" },
    { id: 7, name: "教育购" },
  ];
  return (
    <div className={"select"}>
      <img src={logo} alt={"logo"} />
      <div className={"select_tags"}>
        {tags.map((tag) => {
          return (
            <div className={"select_tag"} key={tag.id}>
              {tag.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
