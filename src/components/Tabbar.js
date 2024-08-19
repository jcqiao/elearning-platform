import React from "react";
import { Tabs, Tab, AppBar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const TabBar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Tabs value={location.pathname} variant="scrollable" scrollButtons="auto">
        <Tab
          label="Home"
          component={Link}
          to="/elearning-platform"
          value="/elearning-platform"
        />
        <Tab
          label="Progress"
          component={Link}
          to="/progress"
          value="/progress"
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
