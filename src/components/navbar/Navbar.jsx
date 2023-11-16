import Logo from "../../assets/images/logo.svg?react";
import Bag from "../../assets/icons/bag.svg?react";
import Hamburger from "../../assets/icons/hamburger.svg?react";

import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import Mobile from "./Mobile";
import { useCart } from "../../context/CartContext";
import SearchForm from "../searchForm/SearchForm";

const Navbar = () => {
  const { toggleCart, openMobile, showMobileMenu } = useStore();
  const { length } = useCart();
  return (
    <nav className={style.nav}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.controls}>
          <SearchForm />
          <ul className={style.list}>
            <li className={style.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.item}>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <div className={style.features}>
          <button onClick={toggleCart} className={style.navbtn} id={style.cart}>
            <Bag />
            {length !== 0 && <span className={style.count}>{length}</span>}
          </button>
          <button
            onClick={showMobileMenu}
            className={style.navbtn}
            id={style.mobile}
          >
            <Hamburger />
          </button>
        </div>
      </div>
      {openMobile && <Mobile />}
    </nav>
  );
};

export default Navbar;
