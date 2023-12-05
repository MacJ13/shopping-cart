/* eslint-disable react-hooks/exhaustive-deps */
import style from "./Checkout.module.scss";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import Logo from "../../assets/images/logo.svg?react";
import ArrowBack from "../../assets/icons/arrow-back.svg?react";

const Checkout = () => {
  const { cartItems, clearCartItems } = useCart();
  const navigate = useNavigate();

  const items = cartItems.map((item) => {
    return (
      <li className={style.li} key={item.id}>
        <img src={item.image} alt={item.name} />
        <div className={style.info}>
          <h4 className={style.h4}>{item.name}</h4>
          <div className={style.spec}>
            <span className={style.price}>
              <strong>${(item.regularPrice * item.amount).toFixed(2)}</strong>
            </span>
            <span className={style.amount}>
              quantity: <strong>{item.amount}</strong>
            </span>
          </div>
        </div>
      </li>
    );
  });

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
              utilities.
              <br />
              Thanks for watching and using the website.
            </p>
          </div>

          {cartItems.length !== 0 && (
            <>
              <ul className={style.ul}>
                <h2>Cart items</h2>

                {items}
                <button
                  onClick={() => {
                    clearCartItems();
                    navigate("/");
                  }}
                  id={style.btn__clear}
                >
                  clear cart
                </button>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
