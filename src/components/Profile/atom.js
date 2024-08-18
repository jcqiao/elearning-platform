import { atom } from "recoil";

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
