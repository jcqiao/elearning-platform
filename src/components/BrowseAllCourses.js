import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Container } from "@mui/material";
import CourseFilterBar from "./CourseFilterBar";
import PaginationControls from "./PaginationControls";
import { useRecoilValue } from "recoil";
import { courseListState } from "../recoil/atoms";
import RecommandBaseCard from "./Common/CourseCard/RecommandBaseCard";

const BrowseAllCourses = () => {
  const courses = useRecoilValue(courseListState);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  useEffect(() => {
    // Simulate loading and filtering logic
    setLoading(true);
    setTimeout(() => {
      setFilteredCourses(courses);
      setLoading(false);
    }, 500);
  }, [courses]);

  const handleFilterChange = (filters) => {
    // Apply filtering logic based on filters
    const filtered = courses.filter((course) => {
      // Add filtering logic here
      return true; // Return true if the course matches the filters
    });
    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
console.log("currentCourses",currentCourses);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {/* Browse All Courses */}
      </Typography>
      <CourseFilterBar onFilterChange={handleFilterChange} />
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <RecommandBaseCard courses={currentCourses} />
          <PaginationControls
            totalCourses={filteredCourses.length}
            coursesPerPage={coursesPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
};

export default BrowseAllCourses;
