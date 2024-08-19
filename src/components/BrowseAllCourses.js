import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { courseListState } from "../recoil/atoms";
import CourseCard from "./Common/CourseCard/CourseCard";

const BrowseAllCourses = () => {
  const courses = useRecoilValue(courseListState);
  console.log("courses", courses);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Browse All Courses
      </Typography>
      <Grid container spacing={2}>
        {courses.map(course =>
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BrowseAllCourses;
