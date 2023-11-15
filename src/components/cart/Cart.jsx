import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import style from "./Cart.module.scss";
import Bin from "../../assets/icons/bin.svg?react";

const Cart = () => {
  return (
    <>
      <Modal />
      <div className={style.cart}>
        <div className={style.heading}>
          <h3>Shopping Cart</h3>
          <button className={style.close}> &#10005;</button>
        </div>
        <ul className={style.ul}>
          {/* <li className={style.li}>
            <div className={style.product}>
              <div className={style.product__img}>
                <img
                  src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6265/6265133_sd.jpg"
                  alt="Logitech - G502 HERO Wired Optical Gaming Mouse with RGB Lighting - Black"
                />
              </div>
              <div className={style.content}>
                <div className={style.row}>
                  <Link to="/product/6265133">
                    <h4 className={style.h4}>
                      Logitech - G502 HERO Wired Optical Gaming Mouse with RGB
                      Lighting - Black
                    </h4>
                  </Link>
                  <button className={style.remove}>
                    <Bin />
                  </button>
                </div>
                <div className={style.row}>
                  <div className={style.price}>$49.99</div>
                  <div className={style.controls}>
                    <button data-btntype="-" className={style.ascdesc}>
                      &#8722;
                    </button>
                    <span className={style.count}>1</span>
                    <button data-btntype="+" className={style.ascdesc}>
                      &#43;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li> */}
        </ul>
        <div className={style.payment}>
          <div className={style.row}>
            total: <span className={style.total}>$0</span>
          </div>
          <button id={style.checkout}>proceed to checkout </button>
        </div>
        {/* <div className={style.empty}>
          <em>No products in cart.</em>
        </div> */}
      </div>
    </>
  );
};

export default Cart;
