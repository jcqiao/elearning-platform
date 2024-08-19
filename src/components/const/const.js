import img from "../../assets/1.png";
export const coursePPTs = {
  1: [
    {
      title: "Slide 1",
      content: "Introduction to React Basics",
      backgroundImage: `url(${img})`
    },
    {
      title: "Slide 2",
      content: "Component and Props",
      backgroundImage: `url(${img})`
    },
    {
      title: "Slide 3",
      content: "State and Lifecycle",
      backgroundImage: `url(${img})`,
      question: {
        prompt: "Which method is used to create a new state in React?",
        options: ["useState", "setState", "getState", "initState"],
        correctAnswer: "setState"
      }
    },
    {
      title: "Slide 4",
      content: "Introduction to React Basics",
      backgroundImage: `url(${img})`
    },
    {
      title: "Slide 5",
      content: "State and Lifecycle",
      backgroundImage: `url(${img})`,
      question: {
        prompt: "Which method is used to create a new state in React?",
        options: ["useState", "setState", "getState", "initState"],
        correctAnswer: "setState"
      }
    },
    { title: "Slide 6", content: "Component and Props" }
  ],
  2: [
    { title: "Slide 1", content: "Introduction to Advanced CSS" },
    { title: "Slide 2", content: "Flexbox and Grid" },
    {
      title: "Slide 3",
      content: "Responsive Design",
      question: {
        prompt: "Which property is used for responsive design in CSS?",
        options: ["@media", "@include", "@extend", "@import"],
        correctAnswer: "@media"
      }
    }
  ]
};
