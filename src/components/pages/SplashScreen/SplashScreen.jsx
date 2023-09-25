import React, { useEffect } from "react";
import "./SplashScreen.scss";
import icon from "../../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/onboarding");
    }, 2000);
  }, []);

  return (
    <div className="splash-page">
      <div>
        <img src={icon} alt="" />
        <h1>Tasty</h1>
      </div>
    </div>
  );
}

export default SplashScreen;
