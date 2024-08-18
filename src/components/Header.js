import React, { useState, useCallback, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Avatar
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { courseListState } from "../recoil/atoms";
import { debounce } from "../utils/common";
import { userState } from "./Profile/atom";
import { Link } from "react-router-dom";

const Header = () => {
  const setCourseList = useSetRecoilState(courseListState);
  const [allCourses, setAllCourses] = useState([]);
  const user = useRecoilState(userState);
  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/courses`);

        setAllCourses(response.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    getAllCourses();
  }, []);

  const debounceSearch = debounce(async query => {
    try {
      const filterCourses = allCourses.filter(
        course =>
          course.description.toLowerCase().includes(query) ||
          course.title.toLowerCase().includes(query)
      );
      setCourseList(filterCourses); // update status
    } catch (error) {
      console.error("Error filtering courses:", error);
    }
  }, 300);

  const handleSearch = event => {
    const value = event.target.value.toLowerCase();
    debounceSearch(value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
          E-Learning Platform
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Search for teachers, courses, offers..."
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon sx={{ color: "#3f51b5" }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{
              outline: "none",
              maxWidth: 600,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 4,
              boxShadow: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3f51b5"
                },
                "&:hover fieldset": {
                  borderColor: "#303f9f"
                }
              }
            }}
          />
        </Box>
        <IconButton component={Link} to="/profile">
          <Avatar alt={user.name} src={user.avatarUrl || user.name} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
