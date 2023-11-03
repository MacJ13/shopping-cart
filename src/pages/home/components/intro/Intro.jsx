import style from "./Intro.module.scss";
import Logo from "../../../../assets/images/logo.svg?react";
import DoubleRightChevron from "../../../../assets/icons/double-right-chevron.svg?react";
import IntroBg from "../../../../assets/images/intro.jpg";
import Computers from "../../../../assets/images/computers.png";

const Intro = () => {
  return (
    <section className={style.section}>
      <div className={style.bg}>
        <img src={IntroBg} alt="Intro background image" />
      </div>
      <div className={style.curveBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className={style.shapeFill}
          ></path>
        </svg>
      </div>
      <div className={style.wrapper}>
        <div className={style.content}>
          <Logo />
          <p className={style.desc}>
            Unlock computer true potential <strong>with our hardware.</strong>{" "}
            Built with the{" "}
            <strong>latest technology, highest quality components</strong> and
            backed by lifetime support.
          </p>
          <a className={`link ${style.link}`} href="#">
            go to store
            <span className="double-chevron-right">
              <DoubleRightChevron />
            </span>
          </a>
        </div>
        <div className={style.img}>
          <img src={Computers} alt="Computers" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
