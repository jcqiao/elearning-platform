import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Typography, Box, Button } from "@mui/material";
import { courseListState, userProgressState } from "../recoil/atoms";
import Progress from "./Progress";

const CourseDetail = () => {
  const { courseId } = useParams();
  const courses = useRecoilValue(courseListState);
  const progress = useRecoilValue(userProgressState);
  const course = courses.find(course => course.id === courseId);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("courseId", courseId);
    navigate(`/learn?courseId=${courseId}`, { state: { courseId } });
  };

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
      <Button variant="contained" onClick={handleClick} sx={{ marginTop: 5 }}>
        Start Learning
      </Button>
    </Box>
  );
};

export default CourseDetail;
