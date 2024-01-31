import React from "react";
import "./sponsors.css";
import twinkle from "../../assets/twinkle-star.svg";
import solana from "../../assets/sponsors/Solana.png";
import filecoin from "../../assets/sponsors/filecoin.png";
import devfolio from "../../assets/sponsors/devfolio.png";
import fundesign from "../../assets/sponsors/fundesign.png";
import polygon from "../../assets/sponsors/polygon.png";
import replict from "../../assets/sponsors/Replit.png";
import whitecard from "../../assets/white-cut-rect.png";
import uparrow from "../../assets/pink-up-arrow.png";
const sponsors = () => {
  return (
    <section id="sponsors">
      <div className="contacts-wrapper">
        <div className="heading-team">
          <p>
            OUR <span className="text-color">SPONSORS</span>
          </p>
        </div>

        <div className="sponsors-logo-wrapper">
          <div className="div-sponsors-tire">
            <div className="company-sponsors-div">
              <a href="https://fundesign.netlify.app/">
                <img src={fundesign} alt="FUN DESIGN" />
              </a>
            </div>
            <div className="twinkle-sponsors">
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
            </div>
          </div>
          <div className="line-0-one"></div>
          <div className="div-sponsors-tire">
            <div className="company-sponsors-div">
              <a href="https://devfolio.co/">
                <img src={devfolio} alt="DEVFOLIO LOGO" />
              </a>
              <a href="https://polygon.technology/">
                <img src={polygon} alt="POLYGON LOGO" />
              </a>
            </div>
            <div className="twinkle-sponsors">
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
            </div>
          </div>
          <div className="line-l-one"></div>
          <div className="div-sponsors-tire">
            <div className="company-sponsors-div">
              <a href="https://replit.com">
                <img src={replict} alt="REPLIT LOGO" />
              </a>
              <a href="https://solana.com">
                <img src={solana} alt="SOLANA LOGO" />
              </a>
              <a href="https://filecoin.io">
                <img src={filecoin} alt="FILECOIN LOGO" />
              </a>
            </div>
            <div className="twinkle-sponsors">
              <img src={twinkle} alt="" />
            </div>
          </div>
          <div className="line-2-one"></div>
        </div>
        <div className="sponsors-text-div-wrapper">
          <div className="sponsors-text-div">
            <p className="sponsors-text-one">
              <span className="text-color">INTERESTED IN SUPPORT</span>ING THIS
              VENTURE ?
            </p>
          </div>
          <a href="https://bit.ly/cdwsponsorship" target="_blank" className="">
            <div className="sponsor-card image-container">
              <img src={whitecard} alt="" />
              <div className="foreground-image">
                <p>VIEW SPONSORSHIP GUIDE</p>
                <img src={uparrow} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default sponsors;
