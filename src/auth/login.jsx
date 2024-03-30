import React, { useState } from "react";
import styles from './login.module.css'
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
    <section className={styles.overallLoginContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.pageTitle}>
          <p className={styles.logo}>Akowe</p>
          <p>Gain access</p>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your name"/>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email address"/>
          <button className={styles.submit} onSubmit={handleLogin}>Sign in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
