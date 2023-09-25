import React from "react";
import "./Onboarding.scss";
import { Link } from "react-router-dom";
import bgOnboarding from "../../../assets/images/Group 5328.png";

function Onboarding() {
  return (
    <div className="onboarding-page">
      <img src={bgOnboarding} alt="" />
      <div>
        <h1>All recipe you needed</h1>
        <p>5000+ healthy recipes made by people for your healthy life</p>
        <Link to={"/home"} className="onboarding-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
