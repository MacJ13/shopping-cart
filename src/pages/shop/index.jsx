import { useFetch } from "../../hooks/useFetch";
import {
  DEFAULT_CATEGORY_ID,
  DEFAULT_SORT,
  PAGE_SIZE,
  START_PAGE,
} from "../../utils/constants";
import style from "./Shop.module.scss";
import Items from "./components/items/Items";
import SortItems from "./components/sortItems/SortItems";
import Category from "./components/category/Category";
import { useParams, useSearchParams } from "react-router-dom";

const Shop = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();

  const sortId = searchParams.get("sort");

  const categoryPathId = categoryId || DEFAULT_CATEGORY_ID;
  const sortedParams = sortId || DEFAULT_SORT;

  const url = `https://api.bestbuy.com/v1/products(categoryPath.id=${categoryPathId})?format=json&show=sku,name,customerReviewCount,customerReviewAverage,salePrice,image&pageSize=${PAGE_SIZE}&page=${START_PAGE}&sort=${sortedParams}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  const [data, error, loading] = useFetch(url);

  return (
    <>
      <section className={style.sec}>
        <div className={style.intro}>
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
          <div className={style.heading}>
            <h1 className={style.h1}>Best Hardware Sales</h1>
          </div>
        </div>
        <div className={style.panel}>
          <div className={`${style.column} ${style.left}`}>
            <SortItems total={data.total} sortId={sortId} />
            {Object.values(data).length !== 0 && (
              <Items items={data.products} />
            )}

            {/* Place of and Sort Items and Shop list and Pagination */}
          </div>
          <div className={`${style.column} ${style.right}`}>
            <Category categoryId={categoryId} sortId={sortId} />
            {/* Place of Shop Category */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
