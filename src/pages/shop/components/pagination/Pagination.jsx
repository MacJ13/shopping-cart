/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { isNumber, paginate } from "../../../../utils/helpers";
import style from "./Pagination.module.scss";

const Pagination = ({ totalPages, currentPage }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const onClickPageButton = (page) => {
    searchParams.set("page", page);
    searchParams.sort();
    setSearchParams(searchParams);
  };

  const pages = paginate(currentPage, totalPages);

  if (currentPage === 1 && currentPage === totalPages) return null;

  return (
    <div className={style.pagination}>
      <div className={style.bar}>
        {pages.map((page, i) => {
          return isNumber(page) ? (
            <div key={page} className={style.btn}>
              <button
                className={page === currentPage ? style.active : ""}
                onClick={() => {
                  onClickPageButton(page);
                }}
              >
                {page}
              </button>
            </div>
          ) : (
            <div
              // data-id={"dot" + page + "" + i}
              key={"dot" + page + "" + i}
              className={style.dot}
            >
              {page}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
