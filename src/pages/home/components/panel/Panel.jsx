import style from "./Panel.module.scss";
import Hardware from "../../../../assets/images/hardware.png";
import DoubleRightChevron from "../../../../assets/icons/double-right-chevron.svg?react";
import { Link } from "react-router-dom";
import SplitPane from "../../../../components/splitPane/SplitPane";

const Panel = () => {
  return (
    <section className="section">
      <div className="container">
        <SplitPane
          cls={style.pane}
          left={
            <div className={style.wrap}>
              <div className={style.poster}>
                <img src={Hardware} alt="hardware image" />
              </div>
            </div>
          }
          right={
            <div className={style.box}>
              <h2 className={style.h2}>
                <em>Strong hardware</em>
                <br /> <strong>steady power</strong>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget ultricies nibh euismod tellus. Arcu mattis tortor egestas
                dis at ipsum. Interdum augue mattis ullamcorper pellentesque id
                pulvinar aliquet mattis cras tempor eleifend. Nunc, aliquet
                mattis cras tempor eleifend bibendum accumsan, et at. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
                ultricies nibh euismod tellus. Arcu mattis tortor egestas dis at
                ipsum. Interdum augue mattis ullamcorper pellentesque id
                pulvinar id id.
              </p>
              <ul className={style.ul}>
                <li>Catalog of 350+ products</li>
                <li>Easy order management, transparency in production</li>
                <li>Competitive & flexible product pricing</li>
              </ul>
              <div className={style.btnbox}>
                <Link to="/shop" className={`link ${style.link}`}>
                  Shop now
                  <span className="double-chevron-right">
                    <DoubleRightChevron />
                  </span>
                </Link>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Panel;
