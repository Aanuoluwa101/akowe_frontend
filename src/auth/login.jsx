import React from "react";
import './login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/dashboard')
    }
  return (
    <section className="overallContainer">
      <div className="loginContainer">
        <div className="pageTitle">
          <p className="logo">Akowe</p>
          <p>Login</p>
        </div>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <submit className="submit" onSubmit={handleLogin}>Sign in</submit>
        </form>
      </div>
    </section>
  );
};

export default Login;
