import "./index.css";

const Commodity = (props) => {
  const { image, title, desc, price } = props.info;
  return (
    <div className={"commodity"}>
      <img src={image} alt="商品图片" />
      <p className={"title"}>{title}</p>
      <p className={"desc"}>{desc}</p>
      <p className={"price"}>{price}</p>
    </div>
  );
};

export default Commodity;
