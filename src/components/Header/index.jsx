import "./index.css";
import { Link } from "react-router-dom";
import Icon from "../Icon";

function Header() {
  const toolbarItems = [
    { name: "首页", path: "/" },
    { name: "华为官网", path: "/" },
    { name: "V码(优选购)", path: "/" },
    { name: "企业购", path: "/" },
    { name: "Select Region", path: "/" },
  ];

  const functionBarItems = [
    { name: "请登录", path: "/" },
    { name: "登录", path: "/" },
    { name: "我的订单", path: "/" },
  ];

  const moreSelectItems = [
    { id: 1, name: "客服" },
    { id: 2, name: "网站导航" },
    { id: 3, name: "手机版" },
  ];

  return (
    <div id={"header"}>
      <div className={"toolbar_shortcut"}>
        <ul>
          {toolbarItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          <li>
            <div>
              更多精彩
              <Icon iconName={"icon-xiala1"} />
            </div>
          </li>
        </ul>
      </div>
      <div className={"function_bar_shortcut"}>
        <ul>
          {functionBarItems.map((item) => {
            return (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
          {moreSelectItems.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  {item.name}
                  <Icon className={"icon_style"} iconName={"icon-xiala1"} />
                </div>
              </li>
            );
          })}
          <li className={"car"}>
            <Icon
              className={"shopping_car_icon"}
              iconName={"icon-gouwuchekong"}
            ></Icon>
            <div className={"shopping_car"}>购物车(0)</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
