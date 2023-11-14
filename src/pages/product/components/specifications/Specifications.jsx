/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Specifications.module.scss";
import { SPECS } from "../../../../utils/constants";

const Specifications = ({ features, accessories, details }) => {
  console.log({ features, accessories, details });
  const [active, setActive] = useState(SPECS[0]);

  const featureItems = features.slice(0, -1).map(({ feature }) => {
    const [title, desc] = feature.split("\n");

    return (
      <li key={title} className={style.item}>
        <div className={style.feature}>
          <h4 className={style.feature__title}>{title}</h4>
          <span className={style.feature__desc}>{desc}</span>
        </div>
      </li>
    );
  });

  const accessoryItems = accessories.map(({ includedItem }) => {
    return (
      <li key={includedItem} className={style.item}>
        <h4 className={style.accessory}>{includedItem}</h4>
      </li>
    );
  });

  const detailItems = details.map((detail) => (
    <li key={detail.name} className={style.item}>
      <div className={style.detail}>
        <h4 className={style.detail__name}>{detail.name}</h4>
        <span className={style.detail__value}>{detail.value}</span>
      </div>
    </li>
  ));

  const items =
    active === SPECS[0]
      ? featureItems
      : active === SPECS[2]
      ? detailItems
      : accessoryItems;

  return (
    <div className={style.spec}>
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
          <ul className={style.list}>{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
