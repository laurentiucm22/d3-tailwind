import React from "react";
import logo from "../assets/d3-logo.svg";
import LoginForm from "../components/LoginForm";

const FormPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div>
        <img src={logo} className="aspect-square h-60" alt="logo" />
      </div>
      <LoginForm />
    </div>
  );
};

export default FormPage;
