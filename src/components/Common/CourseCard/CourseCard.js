import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Box
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CourseCard = ({ course, onToggleFavorite, isFavorite }) => {
  return (
    <Card sx={{ minWidth: 240, marginRight: 2 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="140"
          image={course.image}
          alt={course.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
        </CardContent>
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={() => onToggleFavorite(course.id)}
        >
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
    </Card>
  );
};

export default CourseCard;
