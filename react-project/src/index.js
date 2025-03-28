import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 예제 실습
// import Library from "./chapter_3/Library";
// import Clock from "./chapter_4/Clock";
// import CommentList from "./chapter_5/CommentList";
// import NotificationList from "./chapter_6/NotificationList";
// import Counter from "./chapter_7/Counter";
// import Accommodate from "./chapter_7/Accommodate";
// import ConfirmButton from "./chapter_8/ConfirmButton";
// import LandingPage from "./chapter_9/LandingPage";
// import AttendanceBook from "./chapter_10/AttendanceBook";
// import SignUp from "./chapter_10/SignUp";
// import Calculator from "./chapter_12/Calculator";
// import Reservation from "./chapter_11/Reservation";
// import ProfileCard from "./chapter_13/ProfileCard";
// import DarkOrLight from "./chapter_14/DarkOrLight";
// import MainPage from "./chapter_15/MainPage";
import Block from "./chapter_15/Blocks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Block />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
