import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "./Map.css";
function Mapcompoenet() {
  return (
    <div
      style={{
        width: "100%",
        height: "40vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3vw",
        padding: "10px",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "3vw" }} className="faq-header">
        VENUE
      </h1>

      <span
        style={{
          color: "white",
          fontSize: "1.6vw",
          fontFamily: "NeueMachinaRegular",
        }}
      >
        <CiLocationOn />
        Christ College of Engineering, Irinjalakuda, Thrissur, Kerala 680125
      </span>
      <iframe
        className="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.800873339364!2d76.21013387490174!3d10.3578009897667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f65a7d7bc725%3A0x22dc855ba6cace68!2sChrist%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681916495985!5m2!1sen!2sin"
        style={{
          border: "0",
          width: "100%",
          maxWidth: "80vw",
          height: "20vw",
          borderRadius: "12px",
        }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Mapcompoenet;
