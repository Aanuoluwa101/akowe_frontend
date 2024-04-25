import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./workspace/dashboard";
import Login from "./auth/login";
import ManageOfficiators from "./workspace/officiators";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/dashboard/officiators" Component={ManageOfficiators} />
      </Routes>
    </Router>
  );
}

export default App;
