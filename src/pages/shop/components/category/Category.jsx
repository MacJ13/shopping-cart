/* eslint-disable react/prop-types */
import style from "./Category.module.scss";
import Close from "../../../../assets/icons/close.svg?react";

import { CATEGORIES } from "../../../../utils/constants";
import { NavLink, useNavigate } from "react-router-dom";

const Category = ({ categoryId, sortId }) => {
  const navigate = useNavigate();

  const button = (
    <button
      className={style.clear__btn}
      onClick={() => {
        navigate("/shop");
      }}
    >
      Clear category
      <Close />
    </button>
  );

  const links = CATEGORIES.map((category) => {
    const categoryPath = "category/" + category.id;
    const sortParams = sortId ? "?sort=" + sortId : "";
    const to = categoryPath + sortParams;
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
        <ul className={style.ul}>
          {links}
          {categoryId && (
            <li id={style.clear} className={style.li}>
              {button}
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Category;
