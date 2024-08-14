import axios from "axios";

const API_URL = "https://mockapi.io/"; // 替换成实际Mock API地址

export const fetchCourses = () => {
  return axios.get(`${API_URL}/courses`);
};

export const fetchCourseById = id => {
  return axios.get(`${API_URL}/courses/${id}`);
};
