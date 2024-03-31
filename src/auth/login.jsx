import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import Intro from "../customComponents/intro";
import { useDispatch } from "react-redux";
import { setAuthDetails } from "../redux/authSlice";

const Login = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const introContainer = document.getElementById("showIntro");
      introContainer.style.display = "none";
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthDetails({ name: username, email: email }));
    navigate("/dashboard");
  };
  return (
    <section className={styles.overallLoginContainer}>
      <div id="showIntro" className={styles.introContainer}>
        <Intro />
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.pageTitle}>
          <p className={styles.logo}>Akowe</p>
          <p>Gain access</p>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email address"
          />
          <button className={styles.submit} onSubmit={handleLogin}>
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
