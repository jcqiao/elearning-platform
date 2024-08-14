import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  CircularProgress
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { courseListState, userProgressState } from "../recoil/atoms";

const Dashboard = () => {
  const courses = useRecoilValue(courseListState);
  const progress = useRecoilValue(userProgressState);
  const [recommendedCourses, setRecommendedCourses] = useState(
    courses.slice(0, 3)
  );
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // 加载更多课程
  const loadMoreCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5001/courses?_page=${currentPage + 1}&_limit=3`
      );
      const moreCourses = response.data;
      setRecommendedCourses(prevCourses => [...prevCourses, ...moreCourses]);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error("Failed to load more courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* 用户学习进度概览 */}
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

        {/* 最近学习的课程 */}
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

        {/* 推荐课程 */}
        <Grid item xs={12} md={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recommended Courses
            </Typography>
            <Grid container spacing={2}>
              {recommendedCourses.map(course =>
                <Grid item xs={12} md={4} key={course.id}>
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
            {/* 加载更多箭头 */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {loading
                ? <CircularProgress />
                : <IconButton onClick={loadMoreCourses}>
                    <ExpandMoreIcon fontSize="large" />
                  </IconButton>}
            </Box>
          </Paper>
        </Grid>

        {/* 浏览所有课程按钮 */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            component={Link}
            to="/courses"
            sx={{ mt: 2 }}
          >
            Browse All Courses
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
