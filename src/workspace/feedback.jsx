import React, { useState } from "react";
import Dashboard from "./dashboard";
import styles from './feedback.module.css'
import axios from "axios";
import { useSelector } from "react-redux";

const Feedback = () => {
  const usernameFromRedux = useSelector(state => state.auth.name)
  const emailFromRedux = useSelector(state => state.auth.email)
  const [message, setMessage] = useState('')

  const submitFeedback = async () => {
    const dataToSend = {
        username: usernameFromRedux,
        email: emailFromRedux,
        comment: message
    }
    console.log('data to send', dataToSend)
    try {
        const endpointToSubmitFeedback = `${process.env.REACT_APP_API_URL}/comments`
        const sendUserFeedback = await axios.post(endpointToSubmitFeedback, dataToSend)
        console.log('sending response', sendUserFeedback)
    } catch(error) {
        console.error(error)
    }
  }

    return (
        <Dashboard>
        <div className={styles.container}>
            <h3>What do you think about Akowe?</h3>
            <div className={styles.inputContainer}>
                <textarea onChange={(e) => setMessage(e.target.value)} rows="5" cols="50" placeholder="tell us how you feel"></textarea>
            </div>
            <div onClick={submitFeedback} className={styles.sendfeedback}>
            Send feedback
          </div>
        </div>
        </Dashboard>
    )
}

export default Feedback