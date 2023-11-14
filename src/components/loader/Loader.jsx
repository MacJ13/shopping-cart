import style from "./Loader.module.scss";
import Loading from "../../assets/icons/loading.svg?react";

const Loader = () => {
  return (
    <div className={style.loader}>
      <Loading />
    </div>
  );
};

export default Loader;
