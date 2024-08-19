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
      description: "Manage state with Recoil",
      interactive: true
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
      description: "Learn the basics of React",
      isFavorate: true
    },
    {
      id: "2",
      title: "Advanced React",
      description: "Dive deeper into React",
      isFavorate: false
    },
    {
      id: "3",
      title: "Recoil for State Management",
      description: "Manage state with Recoil",
      isFavorate: false
    },
    {
      id: "4",
      title: "React Basics",
      description: "Learn the basics of React",
      isFavorate: true
    },
    {
      id: "5",
      title: "Advanced React",
      description: "Dive deeper into React",
      isFavorate: true
    },
    {
      id: "6",
      title: "Recoil for State Management",
      description: "Manage state with Recoil",
      isFavorate: false
    },
    {
      id: "7",
      title: "React Basics",
      description: "Learn the basics of React",
      isFavorate: true
    },
    {
      id: "8",
      title: "Advanced React",
      description: "Dive deeper into React",
      isFavorate: false
    },
    {
      id: "9",
      title: "Recoil for State Management",
      description: "Manage state with Recoil",
      isFavorate: false
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

export const userState = atom({
  key: "userState",
  default: {
    name: "John Doe",
    email: "johndoe@example.com",
    avatarUrl: "https://via.placeholder.com/100",
    coursesHistory: [
      { title: "Course 1", description: "Learn the basics of React" },
      { title: "Course 2", description: "Learn the basics of React" }
    ],
    favoriteCourses: [
      {
        id: 1,
        title: "Favorite Course 1",
        description: "Learn the basics of React",
        isFavorate: true
      },
      {
        id: 2,
        title: "Favorite Course 2",
        description: "Learn the basics of React",
        isFavorate: true
      }
    ]
  }
});
