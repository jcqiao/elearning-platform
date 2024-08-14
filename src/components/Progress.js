import React from "react";
import { LinearProgress, Typography, Box } from "@mui/material";

const Progress = ({ progress }) => {
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Typography variant="body2" color="textSecondary">
        Progress: {progress}%
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default Progress;
