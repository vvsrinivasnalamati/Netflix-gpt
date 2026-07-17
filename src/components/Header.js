import React from "react";
import { NETFLIX_LOGO } from "../utilites/constants";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <img src={NETFLIX_LOGO} alt="logo"></img>
    </div>
  );
};

export default Header;
