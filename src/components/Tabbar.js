import React from "react";
import { Tabs, Tab, AppBar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const TabBar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Tabs value={location.pathname} variant="scrollable" scrollButtons="auto">
        <Tab label="Home" component={Link} to="/" value="/" />
        <Tab
          label="Dashboard"
          component={Link}
          to="/dashboard"
          value="/dashboard"
        />
        <Tab
          label="Browse All Courses"
          component={Link}
          to="/browse"
          value="/browse"
        />
      </Tabs>
    </AppBar>
  );
};

export default TabBar;
