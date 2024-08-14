import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null
});

export const coursesState = atom({
  key: "coursesState",
  default: []
});
