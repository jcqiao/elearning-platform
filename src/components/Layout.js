import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import Header from "./Header";
import TabBar from "./Tabbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Header />
      </AppBar>
      <TabBar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
