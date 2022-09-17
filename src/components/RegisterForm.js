import { Button,  TextField } from "@mui/material";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

const URL_API = 'http://localhost:3000'

export default function RegisterForm() {

    const [registerData, setRegisterData] = useState(
        {
            username: "",
            email: "",
            password: "",
            name: ""
        }
    )

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { status, isLoggedIn } = useSelector((state) => state.auth);

    // const triggerAPI = useCallback(async () => {
    //     const res = await axios.post(URL_API, { registerData: registerData }).then(() => console.log(res));
    // }, [registerData]);
    
    // const handleSubmit = useCallback((e) => {
    //     e.preventDefault();
    //     triggerAPI();
    // }, [triggerAPI]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(registerData));
      };

    const handleOnChange = (e) => {
        console.log(e);
        setRegisterData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
      
      useEffect(() => {
        if (isLoggedIn) {
          navigate('/home')
        }
      }, [isLoggedIn, navigate]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => handleOnChange(e)}
                    name="username"
                    sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
                    variant="outlined"
                    label="Enter Username"
                    type="text"
                    required
                />
                <TextField
                    onChange={(e) => handleOnChange(e)}
                    name="password"
                    sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
                    variant="outlined"
                    label="Enter Password"
                    type="password"
                    required
                />
                <TextField
                    onChange={(e) => handleOnChange(e)}
                    name="name"
                    sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
                    variant="outlined"
                    label="Enter Name"
                    type="text"
                    required
                />
                <TextField
                    onChange={(e) => handleOnChange(e)}
                    name="email"
                    sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
                    variant="outlined"
                    label="Enter Email"
                    type="email"
                    required
                />
                <Button
                    disabled={
                        registerData.email.trimStart().length === 0 ||
                        registerData.name.trimStart().length === 0 ||
                        registerData.password.trimStart().length === 0 ||
                        registerData.username.trimStart().length === 0
                    }
                    type="submit"
                    sx={{
                        width: "100%",
                        margin: "1.5rem 0",
                        padding: "12px 0",
                        borderRadius: "28px",
                    }}
                    variant="contained"
                    color="primary"
                >
                     {status === "loading" ? (
                    <CircularProgress size={24} sx={{ color: "#FFF" }} />
                    ) : (
                    "Register"
                    )}
                </Button>
            </form>
        </>
    )
}