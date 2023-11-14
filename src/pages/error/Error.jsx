/* eslint-disable react/prop-types */
import style from "./Error.module.scss";
import Crash from "../../assets/icons/crash.svg?react";
import { useNavigate } from "react-router";
const Error = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={style.error}>
      <div className={style.icon}>
        <Crash />
      </div>
      <div className={style.msg}>
        {!children ? (
          <>
            <strong>Page 404. </strong>This page doesn&lsquo;t exist!
          </>
        ) : (
          children
        )}
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className={style.btn}
      >
        go back
      </button>
    </div>
  );
};

export default Error;
