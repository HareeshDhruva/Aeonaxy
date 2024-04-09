import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const location = useLocation();
  let progress;

  switch (location.pathname) {
    case "/":
      progress = 20;
      break;
    case "/interest":
      progress = 40;
      break;
    case "/rightplace":
      progress = 60;
      break;
    case "/math":
      progress = 80;
      break;
    case "/yourway":
      progress = 100;
      break;
    case "/recommendation":
      progress = 20;
      break;
    default:
      progress = 20;
      break;
  }

  return (
    <div className="my-10">
      <div className="navbar">
        <div className="bar" style={{ width: `${progress}%` }}>
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
