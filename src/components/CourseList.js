import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import { courseListState } from "../recoil/atoms";

const CourseList = () => {
  const courses = useRecoilValue(courseListState);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <List>
        {courses.map(course =>
          <ListItem
            button
            component={Link}
            to={`/courses/${course.id}`}
            key={course.id}
          >
            <ListItemText
              primary={course.title}
              secondary={course.description}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default CourseList;
