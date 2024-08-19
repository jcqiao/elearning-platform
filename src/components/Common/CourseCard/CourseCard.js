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
import { styled } from "@mui/system";

const ZoomCard = styled(Card)({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)" // Adjust the scale value to your liking
  }
});

const AnimatedIconButton = styled(IconButton)({
  "&:active": {
    animation: "heart-beat 0.3s ease-in-out"
  },
  "@keyframes heart-beat": {
    "0%, 100%": {
      transform: "scale(1)"
    },
    "50%": {
      transform: "scale(1.3)"
    }
  }
});

const CourseCard = ({
  course,
  onToggleFavorite,
  isFavorite = course.isFavorate
}) => {
  return (
    <ZoomCard
      sx={{
        minWidth: 240,
        marginRight: 2,
        minHeight: 280
      }}
    >
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
        <AnimatedIconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={() => onToggleFavorite(course.id)}
        >
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </AnimatedIconButton>
      </Box>
    </ZoomCard>
  );
};

export default CourseCard;
