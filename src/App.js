import React from "react";
import "./App.css";
import Home from "./components/Home";
import ConductorsTable from "./components/ConductorsTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar";
import Dashboard from "./workspace/dashboard";
import Login from "./auth/login";
import ManageConductors from "./workspace/conductors";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/workspace" Component={ConductorsTable} />
        <Route path="/calendar" Component={Calendar}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/dashboard/conductors" Component={ManageConductors}/>
      </Routes>
    </Router>
  );
}

export default App;
