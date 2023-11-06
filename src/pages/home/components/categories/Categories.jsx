import style from "./Categories.module.scss";
import Device from "../../../../assets/images/macbook.png";

const Categories = () => {
  return (
    <section className={style.section}>
      <div className={style.heading}>
        <h2 className={style.h2}>
          <em>Get the Latest</em>
          <strong> Tech with Us</strong>
        </h2>
        <div className={style.device}>
          <img src={Device} alt="gaming computer" />
        </div>
      </div>
      <div className={style.categories}>
        <div className={style.bg}>
          <div className={style.curveTop}>
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
        </div>
        <ul className={style.ul}>
          <h3 className={style.h3}>check store category</h3>
          <li className={`link ${style.category}`}>
            <a href="#">Desktops</a>
          </li>
          <li className={`link ${style.category}`}>
            <a href="#">Laptops</a>
          </li>
          <li className={`link ${style.category}`}>
            <a href="#">Monitors</a>
          </li>
          <li className={`link ${style.category}`}>
            <a href="#">Components</a>
          </li>
          <li className={`link ${style.category}`}>
            <a href="#">Accessories</a>
          </li>
          <li className={`link ${style.category}`}>
            <a href="#">Connectors</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
