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

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className={style.bg}>
        <div className={style.curveBottom}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className={style.shapeFill}
            ></path>
          </svg>
        </div>
      </div>

      <div className={style.product}>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.heading}>
              <h1>{data.name}</h1>
              <div className={style.catalog}>
                <strong>Catalog number: </strong> {data.sku}
              </div>
              <div className={style.content}>
                <div className={style.price}>${data.regularPrice}</div>
                <Rating
                  reviewAvarage={data.customerReviewAverage}
                  reviewCount={data.customerReviewCount}
                  large={true}
                />
              </div>
            </div>
            <p className={style.p}>{data.longDescription}</p>
            <button className={style.button}>Add to cart</button>
          </div>
          <div className={style.col}></div>
        </div>
      </div>
    </>
  );
};

export default Product;
