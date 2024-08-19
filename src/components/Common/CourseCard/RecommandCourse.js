import React from "react";
import {
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RecommandBaseCard from "./RecommandBaseCard";

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
          <RecommandBaseCard courses={recommendedCourses} />
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
