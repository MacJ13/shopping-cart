import Logo from "../../assets/images/logo.svg?react";
import Bag from "../../assets/icons/bag.svg?react";
import Hamburger from "../../assets/icons/hamburger.svg?react";

import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.controls}>
          <ul className={style.list}>
            <li className={style.item}>
              <a href="#">Home</a>
            </li>
            <li className={style.item}>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className={style.features}>
          <button className={style.navbtn} id={style.cart}>
            <Bag />
            <span className={style.count}>0</span>
          </button>
          <button className={style.navbtn} id={style.mobile}>
            <Hamburger />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
