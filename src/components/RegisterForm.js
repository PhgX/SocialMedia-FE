import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";


export default function RegisterForm() {

    const [registerData, setRegisterData] = useState(
        {
            username: "",
            email: "",
            password: "",
            name: ""
        }
    )
    
    const handleSubmit = (e) => {
        console.log(e);
    }
    const handleOnChange = (e) => {
        console.log(e);
        setRegisterData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                    Register
                </Button>
            </form>
        </>
    )
}