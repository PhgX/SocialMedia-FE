import Login from "./pages/Login";

import Profile from "./pages/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setAuth } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if ("login" in localStorage) {
      const login = JSON.parse(localStorage.getItem("login"));
      axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      dispatch(setAuth({ isLoggedIn }));
    }
  }, [dispatch, isLoggedIn]);
  return (
    <Routes>
      <Route element = {<PrivateRoute/>}>
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/postDetails" element={<PostDetails/>} />
      </Route>
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
}

export default App;
