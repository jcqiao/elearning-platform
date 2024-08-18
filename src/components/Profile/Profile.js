import React, { useState } from "react";
import { Box, Avatar, Typography, Grid, Paper, Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "./atom";
import EditProfile from "./EditProfile";
import CourseCard from "../Common/CourseCard/CourseCard";

const Profile = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return <EditProfile setIsEditing={setIsEditing} />;
  }
  console.log("user", user);

  const onToggleFavorite = id => {
    setUser(pre => {
      const favoriteCourses = JSON.parse(JSON.stringify(pre.favoriteCourses));
      const updateFavorite = favoriteCourses.map(item => {
        if (item.id === id) {
          item.isFavorate = !item.isFavorate;
        }
        return item;
      });
      return { ...pre, favoriteCourses: updateFavorite };
    });
  };
  return (
    <Box sx={{ padding: 3 }}>
      {/* Info */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
          <Avatar
            alt={user.name}
            src={user.avatarUrl}
            sx={{ width: 100, height: 100, marginRight: 3 }}
          />
          <Box>
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {user.email}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </Button>
      </Paper>

      {/* history course */}
      <Box sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Course History
        </Typography>
        <Grid container spacing={2}>
          {user.coursesHistory.map((course, index) =>
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper elevation={2} sx={{ padding: 2 }}>
                <Typography variant="h6">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Progress: {course.progress}%
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Box>
      {/* favorate course */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Favorite Courses
        </Typography>
        <Grid container spacing={2}>
          {user.favoriteCourses.map((course, index) =>
            <Grid item xs={12} md={6} lg={4} key={index}>
              {course.isFavorate &&
                <CourseCard
                  course={course}
                  onToggleFavorite={() => onToggleFavorite(course.id)}
                  isFavorite={course.isFavorate}
                />}
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
