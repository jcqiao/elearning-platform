import React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

const CourseFilterBar = ({ onFilterChange }) => {
  const handleSearch = event => {
    const searchQuery = event.target.value;
    onFilterChange({ searchQuery });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={2}
    >
      <TextField
        label="Search Courses"
        variant="outlined"
        onChange={handleSearch}
        fullWidth
        sx={{ marginRight: 2 }}
      />
      <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          onChange={e => onFilterChange({ category: e.target.value })}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="development">Development</MenuItem>
          <MenuItem value="design">Design</MenuItem>
          <MenuItem value="business">Business</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          label="Sort By"
          onChange={e => onFilterChange({ sortBy: e.target.value })}
        >
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="rating">Highest Rated</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CourseFilterBar;
