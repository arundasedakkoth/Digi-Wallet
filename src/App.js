import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './Navbar';
import Main from './Main';
import './App.css';
import Sidebar from './Sidebar';
import Messages from "./Messages";
import Notifications from "./Notifications";
import History from "./History";
import Savings from "./Savings";
import Settings from "./Settings";



export default function App() {
  return (
    <Router>
       <Navbar /> 
       <div className="flex col p-0 m-0">
        <Sidebar />
        

    <div className="bg-white w-screen max-w-screen min-h-screen">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/notifications" element={<Notifications/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/savings" element={<Savings/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
        </div>
    </div>
    </Router>
  );
}