
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setAuth } from "./redux/slices/authSlice";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<PrivateRoute/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/postDetails" element={<PostDetails/>} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;