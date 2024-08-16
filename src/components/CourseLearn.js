import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { coursePPTs } from "./const/const";

const CourseLearn = () => {
  //   const { courseId } = useParams();
  const location = useLocation();
  const { courseId: id } = location.state;
  const [courseId, setCourseId] = useState(id);
  const slides = coursePPTs[courseId];
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const maxSteps = slides.length;
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setCourseId(localStorage.getItem(courseId));
    }
  }, []);
  const handleNext = () => {
    if (answeredCorrectly || !slides[activeStep].question) {
      if (activeStep === maxSteps - 1) {
        // Navigate to completion or other desired route
        navigate("/completion");
      } else {
        setActiveStep(prevStep => (prevStep + 1) % maxSteps);
        setSelectedAnswer(null);
        setFeedback("");
        setAnsweredCorrectly(false);
      }
    } else {
      setFeedback(
        "Please answer the question before moving to the next slide."
      );
    }
  };

  const handleBack = () => {
    setActiveStep(prevStep => (prevStep - 1 + maxSteps) % maxSteps);
    setSelectedAnswer(null);
    setFeedback("");
    setAnsweredCorrectly(false);
  };

  const handleAnswerChange = event => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmitAnswer = () => {
    const currentSlide = slides[activeStep];
    if (currentSlide.question) {
      if (selectedAnswer === currentSlide.question.correctAnswer) {
        setFeedback("Correct answer!");
        setAnsweredCorrectly(true);
      } else {
        setFeedback("Wrong answer. Try again.");
      }
    }
  };

  if (!slides) {
    return <Typography variant="h6">Course content not found</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Course Learning
      </Typography>

      <SwipeableViews
        index={activeStep}
        onChangeIndex={index => setActiveStep(index)}
        enableMouseEvents
      >
        {slides.map((slide, index) =>
          <Paper key={index} sx={{ padding: 3, minHeight: 300 }}>
            <Typography variant="h5" gutterBottom>
              {slide.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {slide.content}
            </Typography>

            {slide.question &&
              <Box sx={{ marginTop: 2 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    {slide.question.prompt}
                  </FormLabel>
                  <RadioGroup
                    value={selectedAnswer}
                    onChange={handleAnswerChange}
                  >
                    {slide.question.options.map(option =>
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
          </Paper>
        )}
      </SwipeableViews>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === maxSteps - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default CourseLearn;
