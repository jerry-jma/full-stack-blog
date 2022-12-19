import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1 className="">Register</h1>
      <form action="" className="">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Register</button>
        <p className="">This is an error</p>
        <span>
          Do you have an account <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
