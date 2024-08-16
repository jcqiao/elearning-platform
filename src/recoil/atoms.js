import { atom } from "recoil";

export const courseListState = atom({
  key: "courseListState",
  default: [
    {
      id: "1",
      title: "React Basics",
      description: "Learn the basics of React"
    },
    {
      id: "2",
      title: "Advanced React",
      description: "Dive deeper into React",
      video: true
    },
    {
      id: "3",
      title: "Recoil for State Management",
      description: "Manage state with Recoil"
    }
  ]
});
export const exploreCourseListState = atom({
  key: "exploreCourseListState",
  default: [
    {
      id: "1",
      title: "React Basics",
      description: "Learn the basics of React"
    },
    { id: "2", title: "Advanced React", description: "Dive deeper into React" },
    {
      id: "3",
      title: "Recoil for State Management",
      description: "Manage state with Recoil"
    }
  ]
});

export const slideCourseListState = atom({
  key: "slideCourseListState",
  default: [
    {
      id: "1",
      title: "React Basics",
      description: "Learn the basics of React"
    },
    { id: "2", title: "Advanced React", description: "Dive deeper into React" },
    {
      id: "3",
      title: "Recoil for State Management",
      description: "Manage state with Recoil"
    },
    {
      id: "1",
      title: "React Basics",
      description: "Learn the basics of React"
    },
    { id: "2", title: "Advanced React", description: "Dive deeper into React" },
    {
      id: "3",
      title: "Recoil for State Management",
      description: "Manage state with Recoil"
    },
    {
      id: "1",
      title: "React Basics",
      description: "Learn the basics of React"
    },
    { id: "2", title: "Advanced React", description: "Dive deeper into React" },
    {
      id: "3",
      title: "Recoil for State Management",
      description: "Manage state with Recoil"
    }
  ]
});

export const userProgressState = atom({
  key: "userProgressState",
  default: {
    "1": 50, // 50% completed for React Basics
    "2": 20, // 20% completed for Advanced React
    "3": 0 // 0% completed for Recoil for State Management
  }
});
