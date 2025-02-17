import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { kullaniciSil } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { email } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(kullaniciSil())
    navigate("/Login")
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>

            {email ? (
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            ) : (
              <Button color="inherit">Login</Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
