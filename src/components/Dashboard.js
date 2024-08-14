import React from "react";
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
  ListItemText
} from "@mui/material";
import { courseListState, userProgressState } from "../recoil/atoms";

const Dashboard = () => {
  const courses = useRecoilValue(courseListState);
  const progress = useRecoilValue(userProgressState);

  // 最近学习的课程（假设按照ID排序）
  const recentCourses = courses.slice(0, 3);

  // 推荐课程（简单随机选择）
  const recommendedCourses = courses.slice(1, 4);

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
              {recentCourses.map(course =>
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
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recommended Courses
            </Typography>
            <List>
              {recommendedCourses.map(course =>
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
