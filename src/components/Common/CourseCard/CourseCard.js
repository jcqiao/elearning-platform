import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CourseCard = ({ course }) => {
  return (
    <Card sx={{ minWidth: 240, marginRight: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={course.image}
        alt={course.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
