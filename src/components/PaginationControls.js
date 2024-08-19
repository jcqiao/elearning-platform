import React from "react";
import { Pagination, Box } from "@mui/material";

const PaginationControls = ({
  totalCourses,
  coursesPerPage,
  currentPage,
  onPageChange
}) => {
  const pageCount = Math.ceil(totalCourses / coursesPerPage);

  return (
    <Box display="flex" justifyContent="center" marginTop={4}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
        shape="rounded"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default PaginationControls;
