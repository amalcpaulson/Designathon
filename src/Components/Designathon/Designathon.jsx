import React from "react";
import "./designathon.css";

import Navbar from "../Navbar/Navbar";
import CopyRight from "../Contacts/CopyRight";
import Sponsors from "../Sponsors/Sponsors";
import theme_bg from "../../assets/designathon-theme-bg.png";
import Timeline from "../Timeline/Timeline";
import FAQ from "../Faq/Faq-m";
import Map from "../Map/Map";
import Contacts from "../Contacts/Contacts";

const Designathon = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // spiral thing initialization
    const spiralAnimationScript = document.createElement("script");
    spiralAnimationScript.src = "/static/js/spiral.js";
    document.body.appendChild(spiralAnimationScript);

    document.querySelectorAll(".effect-letter").forEach((button) => {
      let div = document.createElement("div"),
        letters = button.textContent.trim().split("");

      function elements(letter, index, array) {
        let element = document.createElement("span"),
          part = index >= array.length / 2 ? -1 : 1,
          position =
            index >= array.length / 2
              ? array.length / 2 - index + (array.length / 2 - 1)
              : index,
          move = position / (array.length / 2),
          rotate = 1 - move;

        element.innerHTML = !letter.trim() ? "&nbsp;" : letter;
        element.style.setProperty("--move", move);
        element.style.setProperty("--rotate", rotate);
        element.style.setProperty("--part", part);

        div.appendChild(element);
      }

      letters.forEach(elements);

      button.innerHTML = div.outerHTML;

      button.addEventListener("mouseenter", (e) => {
        if (!button.classList.contains("out")) {
          button.classList.add("in");
        }
      });

      button.addEventListener("mouseleave", (e) => {
        if (button.classList.contains("in")) {
          button.classList.add("out");
          setTimeout(() => button.classList.remove("in", "out"), 950);
        }
      });
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section
      className="body-wrapper"
      style={{
        background: "black",
        height: "100vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <div style={{ position: "relative", background: "black" }}>
        <div className="spiral-container">
          <div className="styles-test">
            <section className="" id="">
              <canvas id="canvas"></canvas>
              <div className="dust-animation">
                <div className="bg-animation">
                  <div id="stars2" className="dust"></div>
                  <div id="stars3" className="dust"></div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          className="body-wrapper spiral-innercontainer"
          style={{
            background: "transparent",
            height: "100vh",
            overflow: "scroll",
            overflowX: "hidden",
            position: "absolute",
            left: "0",
            top: "0",
            width:"100%"
          }}
        >
          <div className="designathon-wrapper-main">
            <div className="home-designaton">
              <div className="home-designaton-left">
                <div className="designathon-header-content">
                  <p>FOCUS. INTERACT. CREATE.</p>
                  <p>DESIGNATHON</p>
                  <p className="by-code">by CODe</p>
                </div>
                <div className="designathon-header-dates">
                  <div>
                    <h2>27-28</h2>
                    <p>MAY 2023</p>
                  </div>
                  <div>
                    <h2>12</h2>
                    <p>HOURS</p>
                  </div>
                  <div>
                    <h2>25K+</h2>
                    <p>PRIZEPOOL</p>
                  </div>
                </div>
                <div style={{ height: "1vw", width: "12vw" }}>
                  <div
                    className="apply-button"
                    data-hackathon-slug="designathon"
                    data-button-theme="dark-inverted"
                    style={{ height: "2vw", width: "17vw" }}
                  ></div>
                </div>
              </div>
              <div className="designathon-person-video">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/cdw2k23.appspot.com/o/Designathon%20bg%20video%201.gif?alt=media&token=ef00d745-f5c0-4efb-ba32-90da3248102e`}
                  alt=""
                />
              </div>
            </div>
       
            <div className="designathon-prize-wrapper">
              <div>
                <h3>TITLE WINNER</h3>
                <h2>10,000 INR</h2>
              </div>
              <div>
                <h3>RUNNERS UP</h3>
                <h2>5,000 INR</h2>
              </div>
            </div>
            <div className="timeline-designathon-wrapper-main">
              <Timeline />
            </div>
          </div>
          <Sponsors />
          <FAQ />
          <Map />
          <Contacts />
          <CopyRight />
        </div>
      </div>
    </section>
  );
};

export default Designathon;
