/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import style from "./Cart.module.scss";
import Bin from "../../assets/icons/bin.svg?react";
import { useStore } from "../../context/StoreContext";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { changeAmountItem, removeFromCart } = useCart();
  const { image, sku, name, regularPrice, amount, id } = item;

  return (
    <li className={style.li}>
      <div className={style.product}>
        <div className={style.product__img}>
          <img src={image} alt={name} />
        </div>
        <div className={style.content}>
          <div className={style.row}>
            <Link to={`/product/${sku}`}>
              <h4 className={style.h4}>{name}</h4>
            </Link>
            <button
              onClick={() => {
                removeFromCart(id);
              }}
              className={style.remove}
            >
              <Bin />
            </button>
          </div>
          <div className={style.row}>
            <div className={style.price}>${regularPrice}</div>
            <div className={style.controls}>
              <button
                onClick={() => {
                  changeAmountItem("-", id, amount);
                }}
                data-btntype="-"
                className={style.ascdesc}
              >
                &#8722;
              </button>
              <span className={style.count}>{amount}</span>
              <button
                onClick={() => {
                  changeAmountItem("+", id, amount);
                }}
                data-btntype="+"
                className={style.ascdesc}
              >
                &#43;
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Cart = () => {
  const { openCart, toggleCart } = useStore();
  const { length, cartItems, totalPayment } = useCart();

  if (!openCart) return null;

  const items = cartItems.map((item) => (
    <CartItem key={item.sku} item={item} />
  ));

  return (
    <>
      <Modal onClick={toggleCart} />
      <div className={style.cart}>
        <div className={style.heading}>
          <h3>Shopping Cart</h3>
          <button onClick={toggleCart} className={style.close}>
            {" "}
            &#10005;
          </button>
        </div>
        {length !== 0 ? (
          <>
            <ul className={style.ul}>{items}</ul>
            <div className={style.payment}>
              <div className={style.row}>
                total: <span className={style.total}>${totalPayment}</span>
              </div>
              <button id={style.checkout}>proceed to checkout </button>
            </div>
          </>
        ) : (
          <div className={style.empty}>
            <em>No products in cart.</em>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
