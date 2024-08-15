import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Grid, Box } from "@mui/material";

import axios from "axios";
import {
  courseListState,
  exploreCourseListState,
  slideCourseListState
} from "../recoil/atoms";
import CommonSlider from "./Common/Slider";
import RecommandCourse from "./Common/CourseCard/RecommandCourse";
import SlideCourseCard from "./Common/CourseCard/SlideCourseCard";

const Dashboard = () => {
  const courses = useRecoilValue(courseListState);
  const exploreCourses = useRecoilValue(exploreCourseListState);
  const slideCourses = useRecoilValue(slideCourseListState);
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CommonSlider />
        </Grid>
        <Grid item xs={12} md={12}>
          <RecommandCourse
            title="Recommended Courses"
            loading={loading}
            recommendedCourses={recommendedCourses}
            handleLoading={loadMoreCourses}
            showMoreBtn={true}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <SlideCourseCard courses={slideCourses} />
        </Grid>
        <Grid item xs={12} md={12}>
          <RecommandCourse
            title="Explore with a Coursera Plus Subscription"
            loading={loading}
            recommendedCourses={exploreCourses}
            showMoreBtn={false}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
