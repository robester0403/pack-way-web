import React from "react";
import pwLogo from "../assets/pack-way_logo_final.png";
import "../styles/Checklist.css";

function Checklist() {
  return (
    <div className="container">
      <header>
        <img src={pwLogo} alt="greend hiking backpack next to Pack"></img>
      </header>
    </div>
  );
}

export default Checklist;
