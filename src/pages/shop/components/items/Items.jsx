/* eslint-disable react/prop-types */
import Rating from "../../../../components/rating/Rating";
import style from "./items.module.scss";

const Item = ({ item }) => {
  return (
    <div className={style.item}>
      <a className={style.link} href="#">
        <img src={item.image} alt={item.name} />
        <div className={style.desc}>
          <h4 className={style.title}>{item.name}</h4>
          <Rating
            reviewAvarage={parseFloat(item.customerReviewAverage)}
            reviewCount={item.customerReviewCount}
          />
        </div>
        <span className={style.price}>${item.salePrice}</span>
      </a>
    </div>
  );
};

const Items = ({ items }) => {
  const renderedItems = items.map((item) => (
    <Item key={item.sku} item={item} />
  ));

  return <div className={style.items}>{renderedItems}</div>;
};

export default Items;
