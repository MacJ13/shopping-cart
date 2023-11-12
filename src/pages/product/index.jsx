import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { imgRegex } from "../../utils/constants";

const Product = () => {
  const { productId } = useParams();

  const url = `https://api.bestbuy.com/v1/products/${productId}.json?show=sku,name,longDescription,manufacturer,features.feature,details.value,details.name,quantityLimit,image,regularPrice,includedItemList.includedItem,images,customerReviewCount,customerReviewAverage,thumbnailImage,modelNumber&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  const [data, error, loading] = useFetch(url);

  console.log(data);

  const images = data.images?.reduce((acc, current) => {
    if (current.primary || imgRegex.test(current.rel))
      return [...acc, { ...current, number: acc.length }];
    return acc;
  }, []);

  return <div>{data.name}</div>;
};

export default Product;
