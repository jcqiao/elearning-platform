import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">E-Learning Platform</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
