import React from "react";
import { useLocation } from "react-router-dom";

function CourseLearn() {
  const location = useLocation();
  const { state } = location;

  return <div>CourseLearn</div>;
}

export default CourseLearn;
