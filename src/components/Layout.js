import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import Header from "./Header";
import TabBar from "./Tabbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        height: "98vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <AppBar position="static">
        <Header />
      </AppBar>
      <TabBar />
      <Container style={{ flex: 1 }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
