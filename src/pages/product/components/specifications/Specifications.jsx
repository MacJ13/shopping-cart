/* eslint-disable react/prop-types */
import style from "./Specifications.module.scss";

const Specifications = ({ title, children }) => {
  return (
    <div className={style.spec}>
      <h2 className={style.h2}>{title}</h2>
      <ul className={style.list}>{children}</ul>
    </div>
  );
};

export default Specifications;
