import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/");
  };

  const handleGoToCourseList = () => {
    navigate("/courses");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 3,
        textAlign: "center"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Congratulations!
      </Typography>
      <Typography variant="h6" gutterBottom>
        You have completed the course.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Great job on finishing the course. You can now review the course content
        or move on to other courses.
      </Typography>
      <Box sx={{ marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToDashboard}
          sx={{ marginRight: 2 }}
        >
          Back to Dashboard
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoToCourseList}
        >
          Browse All Courses
        </Button>
      </Box>
    </Box>
  );
};

export default Complete;
