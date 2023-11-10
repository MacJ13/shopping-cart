/* eslint-disable react/prop-types */
import style from "./Rating.module.scss";
import PropTypes from "prop-types";

const stars = "★★★★★";

const Rating = ({ large, reviewAvarage, reviewCount }) => {
  const className = style.rating + `${large ? style.lg : ""}`;

  return (
    <div className={className}>
      <div className={style.stars}>
        <span
          style={{
            width: `calc(${reviewAvarage / stars.length} * 100%)`,
          }}
          className={style.overall}
        >
          {stars}
        </span>
        {stars}
      </div>

      <div className={style.count}>({reviewCount})</div>
    </div>
  );
};

Rating.propTypes = {
  reviewAvarage: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  large: false,
};

export default Rating;
