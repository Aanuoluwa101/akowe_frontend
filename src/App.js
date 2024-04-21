import React from "react";
import "./App.css";
import Home from "./customComponents/Home";
import ConductorsTable from "./customComponents/ConductorsTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./customComponents/Calendar";
import Dashboard from "./workspace/dashboard";
import Login from "./auth/login";
import ManageOfficiators from "./workspace/officiators";
import Feedback from "./workspace/feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/workspace" Component={ConductorsTable} />
        <Route path="/calendar" Component={Calendar} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/dashboard/officiators" Component={ManageOfficiators} />
        <Route path="/dashboard/feedback" Component={Feedback} />
      </Routes>
    </Router>
  );
}

export default App;
