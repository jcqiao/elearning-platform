import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function RecommandCourse({
  recommendedCourses,
  handleLoading,
  loading,
  title,
  showMoreBtn
}) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Grid container spacing={2}>
            {recommendedCourses.map(course =>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {course.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Difficulty: {course.difficulty || "Intermediate"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Rating: {course.rating || "4.5/5"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
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
          {/* load more */}
          {showMoreBtn &&
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {loading
                ? <CircularProgress />
                : <IconButton onClick={handleLoading}>
                    <ExpandMoreIcon fontSize="large" />
                  </IconButton>}
            </Box>}
        </Paper>
      </Grid>

      {/* Browse All Courses */}
      {/* <Grid item xs={12}>
          <Button
            variant="contained"
            component={Link}
            to="/courses"
            sx={{ mt: 2 }}
          >
            Browse All Courses
          </Button>
        </Grid> */}
    </Grid>
  );
}

export default RecommandCourse;
