import Intro from "./components/intro/Intro";
import Panel from "./components/panel/Panel";
import Categories from "./components/categories/Categories";
const Home = () => {
  return (
    <>
      <Intro />

      <Panel />
      <Categories />

      {/* <div className={style.intro}>
        <div className={style.bg}>
          <img src={IntroBg} alt={"Intro image"} />
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
            <p className={style.p}>
              Unlock computer true potential <strong>with our hardware.</strong>{" "}
              Built with the{" "}
              <strong>latest technology, highest quality components</strong> and
              backed by lifetime support.
            </p>
            <a className={style.link} href="#">
              <span className={style.linkTxt}>go to store</span>
              <span className="double-chevron-right">
                <DoubleRightChevron />
              </span>
            </a>
          </div>
          <div className={style.photo}>
            <img src={Computers} alt="computers photo" />
          </div>
        </div>
      </div> */}

      {/* <section className="section">
        <div className="container">
          <div className={style.panel}>
            <div className={style.column}>
              <div className={style.wrap}>
                <div className={style.poster}>
                  <img src={Hardware} alt="hardware image" />
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.box}>
                <h2 className={style.h2}>
                  <em>Strong hardware</em>
                  <br /> <strong>steady power</strong>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eget ultricies nibh euismod tellus. Arcu mattis tortor egestas
                  dis at ipsum. Interdum augue mattis ullamcorper pellentesque
                  id pulvinar aliquet mattis cras tempor eleifend. Nunc, aliquet
                  mattis cras tempor eleifend bibendum accumsan, et at. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
                  ultricies nibh euismod tellus. Arcu mattis tortor egestas dis
                  at ipsum. Interdum augue mattis ullamcorper pellentesque id
                  pulvinar id id.
                </p>
                <ul className={style.ul}>
                  <li>Catalog of 350+ products</li>
                  <li>Easy order management, transparency in production</li>
                  <li>Competitive & flexible product pricing</li>
                </ul>
                <div className={style.btnbox}>
                  <a className={`link ${style.link}`} href="#">
                    Shop now
                    <span className="double-chevron-right">
                      <DoubleRightChevron />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className={style.seccat}>
        <div className={style.heading}>
          <h2 className={style.h2}>
            <em>Get the Latest</em>
            <strong> Tech with Us</strong>
          </h2>
          <div className={style.device}>
            <img src={Macbook} alt="gaming computer" />
          </div>
        </div>

        <div className={style.categories}>
          <div className={style.canvas}>
            <div className={style.curveTop}>
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
          </div>
          <ul className={style.list}>
            <h3 className={style.h3}>check store category</h3>
            <li className={style.category}>Desktops</li>
            <li className={style.category}>Laptops</li>
            <li className={style.category}>monitors</li>
            <li className={style.category}>components</li>
            <li className={style.category}>accesories</li>
            <li className={style.category}>connectors</li>
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default Home;
