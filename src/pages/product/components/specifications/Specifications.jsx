/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Specifications.module.scss";
import { SPECS } from "../../../../utils/constants";

const Specifications = ({ features, accessories, details }) => {
  const [active, setActive] = useState(SPECS[0]);

  return (
    <div className={style.spec}>
      <div className="container">
        <div className={style.controls}>
          {SPECS.map((spec) => {
            if (spec === "accessories" && accessories.length === 0) return null;
            return (
              <button
                key={spec}
                onClick={() => {
                  setActive(spec);
                }}
                className={
                  spec === active
                    ? style.btn + " " + style.btn__active
                    : style.btn
                }
              >
                {spec}
              </button>
            );
          })}
        </div>
        <div className={style.content}>
          <ul className={style.list}></ul>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
