import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './navbar';
import Main from './main';
import './App.css';
import Sidebar from './sidebar';
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import History from "./pages/History";
import Savings from "./pages/Savings";
import Settings from "./pages/Settings";



export default function App() {
  return (
    <Router>
       <Navbar /> 
       <div className="flex">
        <Sidebar />
        

        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/notifications" element={<Notifications/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/savings" element={<Savings/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
        </div>
    </Router>
  );
}