import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button variant="contained" component={Link} to="/courses">
        View Courses
      </Button>
    </Box>
  );
};

export default Dashboard;
