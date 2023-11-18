/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./SortItems.module.scss";
import PropTypes from "prop-types";

import {
  SORTS,
  DEFAULT_SORT,
  DEFAULT_CATEGORY_ID,
} from "../../../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Controls = ({ children }) => (
  <div className={style.frame}>
    <div className={style.controls}>{children}</div>
  </div>
);

const SortItem = ({ total, sortId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortType, setSortType] = useState(DEFAULT_SORT);

  const page = searchParams.get("page");

  const searchTerm = searchParams.get("search");

  useEffect(() => {
    if (!sortId) setSortType(DEFAULT_SORT);
    else setSortType(sortId);
  }, [sortId]);

  const changeSearchParams = (type) => {
    if (sortType === type) return;
    setSortType(type);

    if (page) {
      searchParams.delete("page");
    }

    if (type === DEFAULT_CATEGORY_ID) {
      searchParams.delete("sort");
    } else {
      searchParams.set("sort", type);
    }

    setSearchParams(searchParams);
  };

  const options = SORTS.map((sort) => (
    <option key={sort.type} value={sort.type}>
      {sort.name}
    </option>
  ));

  const buttons = SORTS.map((sort) => (
    <button
      onClick={() => {
        changeSearchParams(sort.type);
      }}
      key={sort.type}
      className={`${style.sort__btn} ${
        sortType === sort.type ? style.active : ""
      }`}
    >
      {sort.name}
    </button>
  ));

  return (
    <div className={style.sortbar}>
      <div className={style.field}>
        <span>Sort by</span>
        <select
          onChange={(e) => {
            changeSearchParams(e.target.value);
          }}
          name="select"
          id="select"
          value={sortType}
        >
          {options}
        </select>

        <Controls>{buttons}</Controls>
      </div>
      <div className={style.total}>
        Search results{" "}
        {searchTerm ? (
          <>
            for:{" "}
            <div className={style.total__search}>
              <strong>
                ({searchTerm}) {total}{" "}
              </strong>
              {total === 1 ? "item" : "items"}
            </div>
          </>
        ) : (
          <>
            <strong>: {total} </strong>
            {total === 1 ? "item" : "items"}
          </>
        )}
      </div>
    </div>
  );
};

SortItem.propTypes = {
  total: PropTypes.number.isRequired,
};

export default SortItem;
