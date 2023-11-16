import Modal from "../modal/Modal";
import style from "./Navbar.module.scss";
import Logo from "../../assets/images/logo.svg?react";
import { Link } from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import SearchForm from "../searchForm/SearchForm";

const Mobile = () => {
  const { hideMobileMenu } = useStore();

  return (
    <>
      <div className={style.mobile}>
        <Modal onClick={hideMobileMenu} />
        <div className={style.mobile__wrapper}>
          <div className={style.mobile__heading}>
            <Logo />
            <button onClick={hideMobileMenu} className={style.close}>
              &#10005;
            </button>
          </div>
          <SearchForm />
          <ul className={style.list}>
            <li className={style.item}>
              <Link onClick={hideMobileMenu} to="/">
                Home
              </Link>
            </li>
            <li className={style.item}>
              <Link onClick={hideMobileMenu} to="/shop">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobile;
