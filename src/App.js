import {BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Creatingcv from "./pages/Creatingcv";
import React from 'react';
import CvList from "./pages/CvList";
import Congratulations from "./pages/Congratulations";
import Cv1 from "./pages/Cv1";


function App() {
  
  
  return (
  <Router> 
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/UserLogin" element={<UserLogin />}/>
    <Route path="/AdminLogin" element={<AdminLogin />}/>
    <Route path="*" element={<ErrorPage />}/>
    <Route path="/UserLogin/creatingcv" element={<Creatingcv />}/>
    <Route path="/AdminLogin/CvList" element={<CvList />}/>
    <Route path="/UserLogin/creatingcv/Congratulations" element={<Congratulations />}/>
    <Route path="/AdminLogin/CvList/Cv1" element={<Cv1 />}/>
    </Routes>
  </Router>
  
  );
  
}

export default App;
