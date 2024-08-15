import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import React from "react";
import { userProgressState, courseListState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

function LearningProgress() {
  const progress = useRecoilValue(userProgressState);
  const courses = useRecoilValue(courseListState);

  return (
    <Grid container spacing={3} sx={{ marginTop: 1 }}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Learning Progress
          </Typography>
          <List>
            {courses.map(course =>
              <ListItem key={course.id}>
                <ListItemText
                  primary={course.title}
                  secondary={`Progress: ${progress[course.id] || 0}%`}
                />
              </ListItem>
            )}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Recently Accessed Courses
          </Typography>
          <List>
            {courses.slice(0, 3).map(course =>
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
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LearningProgress;
