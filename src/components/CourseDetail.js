import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Typography, Box } from "@mui/material";
import { courseListState, userProgressState } from "../recoil/atoms";
import Progress from "./Progress";

const CourseDetail = () => {
  const { courseId } = useParams();
  const courses = useRecoilValue(courseListState);
  const progress = useRecoilValue(userProgressState);
  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return <Typography variant="h6">Course not found!</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {course.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {course.description}
      </Typography>
      <Progress progress={progress[courseId]} />
    </Box>
  );
};

export default CourseDetail;
