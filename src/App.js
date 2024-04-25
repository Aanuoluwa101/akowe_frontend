import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./workspace/dashboard";
import Login from "./auth/login";
import ManageOfficiators from "./workspace/officiators";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/dashboard" element={<ManageOfficiators/>} />
      </Routes>
    </Router>
  );
}

export default App;
