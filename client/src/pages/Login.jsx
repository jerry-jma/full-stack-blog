import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1 className="">Login</h1>
      <form action="" className="">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
        <p className="">This is an error</p>
        <span>
          Don't you have an account <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
