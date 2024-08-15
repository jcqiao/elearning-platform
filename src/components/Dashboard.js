import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Avatar,
  IconButton,
  CircularProgress
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { courseListState } from "../recoil/atoms";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

const Dashboard = () => {
  const courses = useRecoilValue(courseListState);
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(
    () => {
      const newRecommendedCourses = courses.slice(0, 3);
      setRecommendedCourses(newRecommendedCourses);
    },
    [courses]
  );

  // scroll to load more
  //   useEffect(
  //     () => {
  //       const handleScroll = () => {
  //         if (
  //           window.innerHeight + document.documentElement.scrollTop >=
  //           document.documentElement.scrollHeight - 50
  //         ) {
  //           loadMoreCourses();
  //         }
  //       };

  //       window.addEventListener("scroll", handleScroll);
  //       return () => window.removeEventListener("scroll", handleScroll);
  //     },
  //     [loading, currentPage, hasMore]
  //   );

  // loading more
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
        <Grid item xs={12} md={12}>
          <Box sx={{ width: "100%", marginBottom: 2 }}>
            <Typography variant="h4" component="div" gutterBottom>
              {/* Image Slider */}
            </Typography>
            <Slider {...sliderSettings}>
              <div>
                <img
                  src="https://via.placeholder.com/1200x400?text=Slide+1"
                  alt="Slide 1"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/1200x400?text=Slide+2"
                  alt="Slide 2"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/1200x400?text=Slide+3"
                  alt="Slide 3"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Slider>
          </Box>
        </Grid>
        {/* 推荐课程 */}
        <Grid item xs={12} md={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recommended Courses
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
