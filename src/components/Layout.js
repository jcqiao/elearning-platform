import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Header />
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
