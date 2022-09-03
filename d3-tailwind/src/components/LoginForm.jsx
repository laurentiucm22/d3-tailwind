import React from "react";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  return (
    <div className="px-10 mt-20">
      <div>
        <Input
          placeholder="Username"
          modifiers="h-14 w-full mb-6 px-5 shadow-lg transition ease-in-out text-orange-primary focus:outline-0 focus:border-2 focus:border-orange-primary"
        />
        <Input
          placeholder="Password"
          modifiers="h-14 w-full mb-6 px-5 shadow-lg transition ease-in-out text-orange-primary focus:outline-0 focus:border-2 focus:border-orange-primary"
        />
      </div>
      <div className="flex justify-around">
        <Button modifiers="w-36 h-12 mr-6" type="primary">
          Login
        </Button>
        <Button modifiers="w-36 h-12" type="secondary">
          Register
        </Button>
      </div>
      <div className="flex justify-center items-center pt-20">
        <Button>Forgot your password?</Button>
      </div>
    </div>
  );
};

export default LoginForm;
