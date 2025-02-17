import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { kullaniciOlustur } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let { email, password } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(kullaniciOlustur({ email, password }));
    navigate("/")
  };

  return (
    <Container componet="main" maxWidth="xs">
      <Box
        onSubmit={handleSubmit}
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form">
          <TextField
            id="email"
            label="Email Address"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            onChange={(e) => (email = e.target.value)}
          />

          <TextField
            id="password"
            label="Password"
            name="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            onChange={(e) => (password = e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            SIGN IN
          </Button>
        </Box>
      </Box>

      <Typography variant="body2" align="center">
        Copyright © msa-gnc.
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Login;
