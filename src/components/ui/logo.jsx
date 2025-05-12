import React from "react";
import logo from "@/assets/dryrun-logo.png"; 

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" /> 
    </div>
  );
}
export default Logo;