import "./index.css";
import Icon from "../Icon";

function Classification() {
  const data = [
    "手机",
    "电脑",
    "平板",
    "智慧屏",
    "穿戴",
    "耳机音箱",
    "门锁路由",
    "出行车品",
    "配件",
    "生态产品",
    "美食饮酒",
    "增产服务/企业商用",
  ];
  return (
    <div className={"classification"}>
      <div className={"data"}>
        {data.map((item, index) => {
          return (
            <div className={"item_data"} key={index}>
              <p>{item}</p>
              <Icon iconName={"icon-right"} className={"icon_style"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Classification;
