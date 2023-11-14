/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Rating from "../../../../components/rating/Rating";
import style from "./items.module.scss";

const Item = ({ item }) => {
  return (
    <div className={style.item}>
      <Link to={`/product/${item.sku}`} className={style.link}>
        <img src={item.image} alt={item.name} />
        <div className={style.desc}>
          <h4 className={style.title}>{item.name}</h4>
          <Rating
            reviewAvarage={parseFloat(item.customerReviewAverage)}
            reviewCount={item.customerReviewCount}
          />
        </div>
        <span className={style.price}>${item.salePrice}</span>
      </Link>
    </div>
  );
};

const Items = ({ items }) => {
  const renderedItems = items.map((item) => (
    <Item key={item.sku} item={item} />
  ));

  if (items.length === 0) {
    return (
      <div className={style.noitems}>
        <strong>We are sorry! No items found!</strong>
      </div>
    );
  }

  return <div className={style.items}>{renderedItems}</div>;
};

export default Items;
