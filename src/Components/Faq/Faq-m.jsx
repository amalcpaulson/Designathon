import React, { useState } from "react";
import "./Faq.css";

import FAQ from "./Faq";
const Faq1 = () => {
  const faqArray = [
    {
      heading: "WHAT IS A DESIGNATHON?",
      dots: "....................................................................................................................................................",
      para: "Designathon, or design-hackathon, is an event where you're asked to design a solution for a given problem within the given 24hrs. No coding is involved. ",
    },
    {
      heading: "WHAT IS THE TEAM SIZE?",
      dots: ".......................................................................................................................................................",
      para: "The maximum team size is 2 people.",
    },
    {
      heading: "WHAT IS THE FINAL PRODUCT OF DESIGNATHON?",
      dots: ".............................................................................................................",
      para: "The output product of a designathon should be a working prototype of the team's ideas and solutions to the design challenge, and it should be presented in a way that effectively communicates the team's vision and approach.",
    },
    {
      heading: "HOW CAN I GET SELECTED?",
      dots: "....................................................................................................................................................",
      para: "You’ll be selected on the criteria of your knowledge and proficiency in design sector. We prefer you having updated Behance & Dribbble profiles.",
    },
    {
      heading: "IS THERE A REGISERATION FEE?",
      dots: ".............................................................................................................................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "CAN WE BRING PREVIOUSLY BUILD PROJECTS?",
      dots: "...................................................................................................................",
      para: "No. You’re supposed to build the working prototype in the given 24 hours.",
    },
  ];
  const [openpopup, setopenpopup] = useState(false);
  function openPopup() {
    setopenpopup(!openpopup);
  }
  return (
    <div className="faq-wrapper">
      <div className="faq-header">
        <h1>FAQs</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column" ,width:"100%"}}>
        {faqArray.map(({ heading, dots, para }, i) => (
          <FAQ heading={heading} dots={dots} para={para} />
        ))}
      </div>
    </div>
  );
};

export default Faq1;
