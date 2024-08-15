import React from "react";
import { Box, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

const SlideCourseCard = ({ courses, title }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          padding: 1
          // "&::-webkit-scrollbar": {
          //   display: "none"
          // }
        }}
      >
        {courses.map(course => <CourseCard key={course.id} course={course} />)}
      </Box>
    </Box>
  );
};

export default SlideCourseCard;
