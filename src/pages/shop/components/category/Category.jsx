import style from "./Category.module.scss";

import { CATEGORIES } from "../../../../utils/constants";

const Category = () => {
  const links = CATEGORIES.map((category) => {
    return (
      <li key={category.id} className={style.li}>
        <a className={style.link}>{category.name}</a>
      </li>
    );
  });

  return (
    <aside className={style.sidebar}>
      <div className={style.category}>
        <h3>Categories</h3>
        <ul className={style.ul}>
          {links}
          {/* <li className={style.li}>
            <a className={style.link}>desktops</a>
          </li>
          <li className={style.li}>
            <a className={style.link}>laptops</a>
          </li>
          <li className={style.li}>
            <a className={`${style.link} ${style.current}`}>monitors</a>
          </li>
          <li className={style.li}>
            <a className={style.link}>components</a>
          </li>
          <li className={style.li}>
            <a className={style.link}>accessories</a>
          </li>
          <li className={style.li}>
            <a className={style.link}>connectors</a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default Category;
