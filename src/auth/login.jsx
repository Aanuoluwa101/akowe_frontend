import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()

    const handleLogin = (e) => {
      e.preventDefault();
      const userDetails = {name: username, email: email}
      localStorage.setItem('userDetails', JSON.stringify(userDetails))
      navigate('/dashboard')
    }
  return (
    <section className="overallLoginContainer">
      <div className="loginContainer">
        <div className="pageTitle">
          <p className="logo">Akowe</p>
          <p>Gain access</p>
        </div>

        <form onSubmit={handleLogin}>
          <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your name"/>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email address"/>
          <button className="submit" onSubmit={handleLogin}>Sign in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
