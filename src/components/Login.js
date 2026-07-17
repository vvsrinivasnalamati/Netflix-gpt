import React from "react";
import Header from "./Header";
import { BACKGRUND_MOVIE_LIST } from "../utilites/constants";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Header />
      <img src={BACKGRUND_MOVIE_LIST} alt="logo"></img>
    </div>
  );
};

export default Login;
