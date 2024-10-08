import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import LearningProgress from "./components/LearningProgress";
import CourseLearn from "./components/CourseLearn";
import Complete from "./components/Complete";
import CourseLearnVideo from "./components/CourseLearnVideo";
import CourseLearnInteractive from "./components/CourseLearnInteractive";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";
import BrowseAllCourses from "./components/BrowseAllCourses";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/elearning-platform" replace />}
        />
        <Route path="/elearning-platform" element={<Dashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/courses/all" element={<BrowseAllCourses />} />
        <Route path="/progress" element={<LearningProgress />} />
        <Route path="/learn" element={<CourseLearn />} />
        <Route path="/completion" element={<Complete />} />
        <Route path="/learn/video/:courseId" element={<CourseLearnVideo />} />
        <Route
          path="/learn/ppt/interactive/:courseId"
          element={<CourseLearnInteractive />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </Layout>
  );
}

export default App;
