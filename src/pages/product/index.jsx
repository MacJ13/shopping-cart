import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { imgRegex } from "../../utils/constants";
import style from "./Product.module.scss";

import Rating from "../../components/rating/Rating";

const Product = () => {
  const { productId } = useParams();

  const url = `https://api.bestbuy.com/v1/products/${productId}.json?show=sku,name,longDescription,manufacturer,features.feature,details.value,details.name,quantityLimit,image,regularPrice,includedItemList.includedItem,images,customerReviewCount,customerReviewAverage,thumbnailImage,modelNumber&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  const [data, error, loading] = useFetch(url);

  const images = data.images?.reduce((acc, current) => {
    if (current.primary || imgRegex.test(current.rel))
      return [...acc, { ...current, number: acc.length }];
    return acc;
  }, []);

  return (
    <div className={style.product}>
      <div className={style.row}>
        <div className={style.col}>
          <div className={style.heading}>
            <h1>{data.name}</h1>
            <div className={style.content}>
              <div className={style.catalog}>
                <strong>Catalog number: </strong> {data.sku}
              </div>
              <Rating
                reviewAvarage={data.customerReviewAverage}
                reviewCount={data.customerReviewCount}
                large={true}
              />
            </div>
            <div className={style.price}>${data.regularPrice}</div>
          </div>
          <p className={style.p}>{data.longDescription}</p>
          <button className={style.button}>Add to cart</button>
        </div>
        <div className={style.col}>{/* place for gallery image */}</div>
      </div>
    </div>
  );
};

export default Product;
