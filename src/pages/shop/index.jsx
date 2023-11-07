import style from "./Shop.module.scss";

const Shop = () => {
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
            {/* Place of and Sort Items and Shop list and Pagination */}
          </div>
          <div className={`${style.column} ${style.right}`}>
            {/* Place of Shop Category */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
