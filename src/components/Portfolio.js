import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Media</span>
            {/* <h3>My Amazing Works</h3> */}
            <p>
              My all Media Show ....
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                Website
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  Tv-Show
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                Live Tv
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Detail
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://youtu.be/qkUldwHYTBs?t=7"
                    >
                      <img src="http://cs.ndsu.nodak.edu/~zanwar/images/teaching/intro-to-cs.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="http://cs.ndsu.nodak.edu/~zanwar/images/teaching/intro-to-cs.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KVL: Cybersecurity Best practices</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src="http://cs.ndsu.nodak.edu/~zanwar/images/media/isaca-thumb.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="http://cs.ndsu.nodak.edu/~zanwar/images/media/isaca-thumb.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>FOX2: Hackers are going after schools and colleges with ransomeware</h3>
                    <span>Website </span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Magic Art"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://www.youtube.com/watch?v=5y7LIx1Iwjw"
                    >
                      <img src="http://cs.ndsu.nodak.edu/~zanwar/images/media/fox2ransomeware.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="http://cs.ndsu.nodak.edu/~zanwar/images/media/fox2ransomeware.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>FOX2 Live : World backup Day.
                      How safe data ?
                    </h3>
                    <span>Live Video</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src="http://cs.ndsu.nodak.edu/~zanwar/images/media/fox2data1.jpg" />
                      <div
                        className="main"
                        data-img-url="http://cs.ndsu.nodak.edu/~zanwar/images/media/fox2data1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KMOV: Cybersecurity jobs</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="http://cs.ndsu.nodak.edu/~zanwar/images/media/kmox.jpg" />
                      <div
                        className="main"
                        data-img-url="http://cs.ndsu.nodak.edu/~zanwar/images/media/kmox.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KMOX: SIM Swapping : Experts Warn of new way Hackers Are Coming After Smartphones</h3>
                    <span>TV Show</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="http://cs.ndsu.nodak.edu/~zanwar/images/media/securitymag.jpg" />
                      <div
                        className="main"
                        data-img-url="http://cs.ndsu.nodak.edu/~zanwar/images/media/securitymag.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Security Magazine.Com: A New Framwork for preventing cyber Attacks</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
