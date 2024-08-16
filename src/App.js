import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import LearningProgress from "./components/LearningProgress";
import CourseLearn from "./components/CourseLearn";
import Complete from "./components/Complete";
import CourseLearnVideo from "./components/CourseLearnVideo";
import CourseLearnInteractive from "./components/CourseLearnInteractive";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/progress" element={<LearningProgress />} />
        <Route path="/learn" element={<CourseLearn />} />
        <Route path="/completion" element={<Complete />} />
        <Route path="/learn/video/:courseId" element={<CourseLearnVideo />} />
        <Route
          path="/learn/ppt/interactive/:courseId"
          element={<CourseLearnInteractive />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
