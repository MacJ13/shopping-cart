import Logo from "../../assets/images/logo.svg?react";
import Bag from "../../assets/icons/bag.svg?react";
import Hamburger from "../../assets/icons/hamburger.svg?react";

import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import Mobile from "./Mobile";

const Navbar = () => {
  const { toggleCart, openMobile, showMobileMenu } = useStore();

  return (
    <nav className={style.nav}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.controls}>
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
            <span className={style.count}>0</span>
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
