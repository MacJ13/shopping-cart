/* eslint-disable react/prop-types */
import style from "./Category.module.scss";

import { CATEGORIES } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";

const Category = ({ categoryId }) => {
  const links = CATEGORIES.map((category) => {
    const to = "category/" + category.id;
    return (
      <li key={category.id} className={style.li}>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          {category.name}
        </NavLink>
      </li>
    );
  });

  return (
    <aside className={style.sidebar}>
      <div className={style.category}>
        <h3>Categories</h3>
        <ul className={style.ul}>{links}</ul>
      </div>
    </aside>
  );
};

export default Category;
