import React, { useState } from "react";
import "./ButtonSwitch.scss";

export interface ICLSwitch {
  firstTitle: string;
  secondTitle: string;
  onChange: (activeButton: string) => void;
}

export default function Switch({
  firstTitle,
  secondTitle,
  onChange,
}: ICLSwitch) {
  const [active, setActive] = useState(firstTitle);

  const handleClick = (title: string) => {
    setActive(title);
    onChange(title);
  };

  return (
    <div className="switch-btn-container">
      <div
        className="highlight"
        style={{
          transform: `translateX(${active === firstTitle ? 0 : 124}px)`,
        }}
      ></div>
      <button
        className={`switch-btn ${active === firstTitle ? "active" : ""}`}
        onClick={() => handleClick(firstTitle)}
      >
        {firstTitle}
      </button>
      <button
        className={`switch-btn ${active === secondTitle ? "active" : ""}`}
        onClick={() => handleClick(secondTitle)}
      >
        {secondTitle}
      </button>
    </div>
  );
}
