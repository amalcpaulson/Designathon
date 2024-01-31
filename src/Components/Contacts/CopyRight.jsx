import React from "react";
import "./Contacts.css";
import cdw from "../../assets/cdw-logo.svg";
import insta from "../../assets/insta-logo.png";
import email from "../../assets/email.logo.png";
import phone from "../../assets/phone-logo.png";

const CopyRight = () => {
  return (
    <div className="copyright-wrapper">
      <div className="contact-content-wrapper">
        <div className="contact-email-phone">
          <div className="contact-email">
            <img src={email} alt="" />
            <div>
              <p>codedesignweek@gmail.com</p>
              <p>code@cce.edu.in</p>
            </div>
          </div>
          <div className="contact-phone">
            <img src={phone} alt="" />
            <div>
              <p>+91 94007 43624</p>
              <p>+91 79940 43754</p>
            </div>
          </div>
        </div>
        <div className="contact-social">
          <a href="/">
            <img src={cdw} alt="" />
          </a>
          <a href="https://www.instagram.com/codedesignweek/">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
      <div className="copy-right-wrapper">
        <div className="line-contact"></div>
        <div className="copy-right-contact">
          <div>
            <p>
              Copyright © 2023 Community Of Developers. All Rights Reserved.
            </p>
          </div>
          <div className="copy-right-contact-right">
            <a
              href="https://devfolio.co/code-of-conduct"
              target="_blank"
              style={{ color: "#8b8b8b" }}
            >
              Code of Conduct
            </a>
            <a href="/privacy" style={{ color: "#8b8b8b" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
