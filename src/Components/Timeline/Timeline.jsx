import React, { useEffect, useState } from "react";
import "./timeline.css";

const timeline = () => {
  return (
    <div className="timeline-wrapper">
      <h1>TIMELINE</h1>
      <div className="timelinetimelineWrapper">
        <TimelineSingle
          isLeft={true}
          date={"2023-04-18"}
          title={"REGISTRATION STARTS"}
          days={"18 APR 2023"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-18"}
          title={"REGISTRATION ENDS"}
          days={"18 MAY 2023"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-20"}
          title={"SUBMISSION OF IDEAS"}
          days={"20 MAY 2023"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-22"}
          title={"CODe DESIGN WEEK BEGINS"}
          days={"22 MAY 2023"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-25"}
          title={"SHORTLISTED TEAMS ARE ANNOUNCED"}
          days={"25 MAY 2023"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-27"}
          title={"INAUGURATION OF DESIGNATHON"}
          days={"27 MAY 2023"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-27"}
          title={"DESIGNATHON BEGINS"}
          days={"27 MAY 2023"}
        />
        <TimelineSingle
          isLeft={false}
          date={"2023-05-28"}
          title={"DESIGNATHON ENDS"}
          days={"28 MAY 2023"}
        />
        <TimelineSingle
          isLeft={true}
          date={"2023-05-28"}
          title={"VALEDECTORY CEREMONY OF CDW ‘23"}
          days={"28 MAY 2023"}
        />
      </div>
    </div>
  );
};

const TimelineSingle = ({ isLeft, date, title, days }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    console.log(date);
    if (new Date(date) < new Date()) {
      setIsCompleted(true);
    }
  }, []);
  return (
    <div
      className={
        isLeft ? "timelineSingleWrapperLeft" : "timelineSingleWrapperRight"
      }
    >
      <div
        className="timelinesingleContentWrapper"
        style={{
          textAlign: isLeft ? "right" : "left",
          borderLeft: isLeft ? null : "4px solid white",
          borderColor: isCompleted ? "#E30069" : "white",
          borderWidth: "4px",
          borderRight: isLeft ? "4px solid white" : null,
          translate: isLeft ? "2.2px" : "-2px",
        }}
      >
        {isCompleted && (
          <div
            className="round"
            style={{
              left: !isLeft ? "calc(-10px - 1.5px)" : "",
              right: isLeft ? "calc(-10px - 1.5px)" : "",
            }}
          >
            <div></div>
          </div>
        )}
        <span style={{ display: "none" }}>{date}</span>
        <span>{days}</span>
        <h2
          style={{
            color: isCompleted ? "#E30069" : "white",
            fontStyle: isCompleted
              ? "NeueMachinaUltraBold"
              : "NeueMachinaUltraBold",
          }}
        >
          {title}
        </h2>
      </div>
      <div></div>
    </div>
  );
};
export default timeline;
