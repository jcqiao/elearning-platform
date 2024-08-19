import React from "react";
import { Box, Typography } from "@mui/material";
import CourseCard from "./CourseCard";
import { useSetRecoilState } from "recoil";
import { slideCourseListState } from "../../../recoil/atoms";

const SlideCourseCard = ({ courses, title }) => {
  const setCourses = useSetRecoilState(slideCourseListState);
  const onToggleFavorite = id => {
    const tmpCourses = JSON.parse(JSON.stringify(courses));
    const updateFavoriteCourse = tmpCourses.map(course => {
      if (course.id === id) {
        course.isFavorate = !course.isFavorate;
      }
      return course;
    });
    setCourses([...updateFavoriteCourse]);
  };
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
        {courses.map(course =>
          <CourseCard
            key={course.id}
            course={course}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </Box>
    </Box>
  );
};

export default SlideCourseCard;
