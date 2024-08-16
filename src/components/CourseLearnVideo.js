import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import donuts from "../video/donuts.mp4";

const CourseLearnVideoWithQuestion = () => {
  const [playing, setPlaying] = useState(true); // 控制视频播放
  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const playerRef = useRef(null);

  // 问题将在视频播放到10秒时显示
  const questionTime = 5;

  const question = {
    prompt: "Which method is used to create a new state in React?",
    options: ["useState", "setState", "getState", "initState"],
    correctAnswer: "setState"
  };

  const handleAnswerChange = event => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === question.correctAnswer) {
      setFeedback("Correct answer!");
      setAnsweredCorrectly(true);
      setShowQuestion(false);
      setPlaying(true); // 继续播放视频
    } else {
      setFeedback("Wrong answer. Try again.");
    }
  };

  const handleProgress = state => {
    if (state.playedSeconds >= questionTime && !answeredCorrectly) {
      setPlaying(false); // 暂停视频
      setShowQuestion(true);
    }
  };

  return (
    <Box sx={{ padding: 2, position: "relative" }}>
      <Typography variant="h4" gutterBottom>
        Course Video Learning
      </Typography>

      <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
        {" "}{/* 16:9 aspect ratio (56.25% padding) */}
        <ReactPlayer
          ref={playerRef}
          url={donuts}
          controls={!showQuestion} // 问题显示时禁用控制
          width="100%"
          height="100%"
          playing={playing} // 控制视频播放/暂停
          onProgress={handleProgress} // 监听视频播放进度
          style={{ position: "absolute", top: 0, left: 0 }} // 视频覆盖整个容器
        />
        {showQuestion &&
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff"
            }}
          >
            <Typography variant="h6">
              Answer the question to continue
            </Typography>
          </Box>}
      </Box>

      {showQuestion &&
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Question:</Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {question.prompt}
            </FormLabel>
            <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
              {question.options.map(option =>
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              )}
            </RadioGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitAnswer}
              sx={{ marginTop: 2 }}
            >
              Submit Answer
            </Button>
            {feedback &&
              <Typography
                variant="body2"
                color={feedback.startsWith("Correct") ? "green" : "red"}
                sx={{ marginTop: 1 }}
              >
                {feedback}
              </Typography>}
          </FormControl>
        </Box>}
    </Box>
  );
};

export default CourseLearnVideoWithQuestion;
