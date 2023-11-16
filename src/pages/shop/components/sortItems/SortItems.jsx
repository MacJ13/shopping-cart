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

// const Dropdown = ({ type, onChange }) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const params = searchParams.get("sort");
//   const options = SORTS.map((sort) =>
//     type === sort.type ? (
//       <option selected="selected" key={sort.type} value={sort.type}>
//         {sort.name}
//       </option>
//     ) : (
//       <option key={sort.type} value={sort.type}>
//         {sort.name}
//       </option>
//     )
//   );

//   return (
//     <select
//       onChange={(e) => {
//         const type = e.target.value;
//         if (params === type) return;
//         onChange(type);
//         setSearchParams({ sort: type });
//       }}
//       name="select"
//       id="select"
//     >
//       {options}
//     </select>
//   );
// };

// const Dropdown = ({ type, onChange }) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const params = searchParams.get("sort");
//   const options = SORTS.map((sort) =>
//     type === sort.type ? (
//       <option selected="selected" key={sort.type} value={sort.type}>
//         {sort.name}
//       </option>
//     ) : (
//       <option key={sort.type} value={sort.type}>
//         {sort.name}
//       </option>
//     )
//   );

//   return (
//     <select
//       onChange={(e) => {
//         const type = e.target.value;
//         if (params === type) return;
//         onChange(type);
//         setSearchParams({ sort: type });
//       }}
//       name="select"
//       id="select"
//     >
//       {options}
//     </select>
//   );
// };

// const Controls = ({ type, onChange }) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const params = searchParams.get("sort");

//   return (
//     <div className={style.frame}>
//       <div className={style.controls}>{buttons}</div>
//     </div>
//   );
// };

const Controls = ({ children }) => (
  <div className={style.frame}>
    <div className={style.controls}>{children}</div>
  </div>
);

const SortItem = ({ total, sortId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortType, setSortType] = useState(DEFAULT_SORT);

  const page = searchParams.get("page");

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

  const options = SORTS.map((sort) =>
    sortType === sort.type ? (
      <option selected="selected" key={sort.type} value={sort.type}>
        {sort.name}
      </option>
    ) : (
      <option key={sort.type} value={sort.type}>
        {sort.name}
      </option>
    )
  );

  const buttons = SORTS.map((sort) => (
    <button
      onClick={() => {
        changeSearchParams(sort.type);
        // if (sortParams === sort.type) return;
        // setSortType(sort.type);
        // setSearchParams({ sort: sort.type });
      }}
      key={sort.type}
      className={`${style.sort__btn} ${
        // !sortParams && DEFAULT_SORT === sort.type
        //   ? style.active
        //   :
        // sortParams &&
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
        {/* <Dropdown type={sortType} onChange={onChangeType} /> */}
        <select
          onChange={(e) => {
            changeSearchParams(e.target.value);
          }}
          name="select"
          id="select"
        >
          {options}
        </select>

        <Controls>{buttons}</Controls>
        {/* <Controls type={sortType} onChange={onChangeType} /> */}
      </div>
      <div className={style.total}>
        Search results:{" "}
        <span>
          {total} {total === 1 ? "item" : "items"}
        </span>
      </div>
    </div>
  );
};

SortItem.propTypes = {
  total: PropTypes.number.isRequired,
};

export default SortItem;
