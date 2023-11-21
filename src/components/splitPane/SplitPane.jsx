/* eslint-disable react/prop-types */
import style from "./SplitPane.module.scss";

const SplitPane = ({ cls, left, right }) => {
  return (
    <div className={cls}>
      <div className={style.pane__left}>{left}</div>
      <div className={style.pane__right}>{right}</div>
    </div>
  );
};

export default SplitPane;
