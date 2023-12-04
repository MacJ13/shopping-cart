import style from "./Checkout.module.scss";
import Logo from "../../assets/images/logo.svg?react";
import ArrowBack from "../../assets/icons/arrow-back.svg?react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className={style.section}>
      <div className={style.bar}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          id={style.back__btn}
        >
          <ArrowBack />
        </button>
        <Logo />
      </div>
      <div className="container">
        <div className={style.content}>
          <div className={style.heading}>
            <h1 className={style.h1}>Checkout payment</h1>
            <p className={style.p}>
              This is an example template store website for learn frontend
              utitlites.
              <br />
              Thanks for watching and using the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
