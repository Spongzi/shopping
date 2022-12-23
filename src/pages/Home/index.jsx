import Header from "../../components/Header";
import Select from "../../components/Select";
import Carousel from "../../components/Carousel";
import "./index.css";
import Commodity from "../../components/Commodity";
import Footer from "../../components/Footer";

const Home = () => {
  const zxtjInfos = [
    {
      image:
        "https://res.vmallres.com/cmscdn/CN/2022-12/b0041527eddd4c82866f9e2c286c9313.png",
      title: "HUAWEI MATE 50 Pro",
      desc: "超光变XMAGE影像|北斗卫星消息",
      price: "¥6799起",
    },
    {
      image:
        "https://res.vmallres.com/cmscdn/CN/2022-12/cf74457f29d44160a72df65c3145ae93.png",
      title: "WATCH GT 3",
      desc: "蓝牙通话|强劲续航|血氧检测",
      price: "¥1288",
    },
    {
      image:
        "https://res.vmallres.com/cmscdn/CN/2022-12/328a6239b56648f8b10fb4614e423a85.png",
      title: "HUAWEI MateBook X Pro",
      desc: "3.1K原色全面屏|12代酷睿处理器",
      price: "¥10199",
    },
    {
      image:
        "https://res.vmallres.com/cmscdn/CN/2022-12/acfb5fb31b284ac483b220734e8d3241.png",
      title: "MatePad Pro 12.6英寸",
      desc: "12.6英寸120Hz OLED全面屏",
      price: "¥4399起",
    },
  ];
  return (
    <div>
      <Header />
      <div className={"sticky"}>
        <Select />
      </div>
      <Carousel />
      <div className={"zxtj"}>
        <p className={"title"} style={{ fontSize: 24, fontWeight: 400 }}>
          甄选推荐
        </p>
        <div className={"show"}>
          {zxtjInfos.map((info, index) => {
            return (
              <div key={index}>
                <Commodity info={info} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
