import Login from './pages/Login';
import Profile from './pages/Profile';

// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Login />} />   
        <Route path="/profile/:id" element={<Profile />} />
      </Routes >
    </Router>
  );
}

export default App;