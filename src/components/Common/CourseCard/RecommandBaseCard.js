import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";

function RecommandBaseCard({ courses = [] }) {
  return (
    <Grid container spacing={2}>
      {courses.map(course =>
        <Grid item xs={12} md={4} key={course.description}>
          <Paper sx={{ p: 2 }}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                mb: 2,
                width: 56,
                height: 56
              }}
            >
              {course.title.charAt(0)}
            </Avatar>
            <Typography variant="h6">
              {course.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {course.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Difficulty: {course.difficulty || "Intermediate"}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Rating: {course.rating || "4.5/5"}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Students Enrolled: {course.enrolled || "120"}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/courses/${course.id}`}
              sx={{ mt: 2 }}
            >
              Start Learning
            </Button>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}

export default RecommandBaseCard;
