import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import img1 from "../video/1.png";
import img2 from "../video/2.png";
import { useNavigate } from "react-router-dom";

const CourseLearnInteractive = () => {
  const slides = [
    {
      content: "Slide 1",
      imageUrl: img1,
      buttons: [
        { id: 1, label: "Button 1", clicked: false },
        { id: 2, label: "Button 2", clicked: false },
        { id: 3, label: "Button 3", clicked: false }
      ]
    },
    {
      content: "Slide 2",
      imageUrl: img2,
      buttons: [
        { id: 1, label: "Button 1", clicked: false },
        { id: 2, label: "Button 2", clicked: false }
      ]
    }
    // 其他幻灯片...
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(
    slides.map(slide => slide.buttons.map(button => false))
  );
  const navigate = useNavigate();

  const handleButtonClick = (slideIndex, buttonIndex) => {
    const updatedClicks = [...buttonClicks];
    updatedClicks[slideIndex][buttonIndex] = true;
    setButtonClicks(updatedClicks);
  };

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/completion");
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const allButtonsClicked = buttonClicks[currentSlide].every(
    clicked => clicked
  );

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <Typography variant="h4" gutterBottom>
        {slides[currentSlide].content}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "80%",
          height: "50vh",
          backgroundImage: `url(${slides[currentSlide].imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 2,
          marginBottom: 2
        }}
      >
        {slides[currentSlide].buttons.map((button, index) =>
          <Button
            key={button.id}
            variant="contained"
            color={buttonClicks[currentSlide][index] ? "secondary" : "primary"}
            onClick={() => handleButtonClick(currentSlide, index)}
            sx={{
              position: "absolute",
              top: `${20 + index * 20}%`,
              left: `${20 + index * 20}%`
            }}
          >
            {button.label}
          </Button>
        )}
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handlePreviousSlide}
          disabled={currentSlide === 0}
        >
          Previous Slide
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextSlide}
          disabled={!allButtonsClicked}
        >
          {currentSlide === slides.length - 1 ? "Finish" : "Next Slide"}
        </Button>
      </Box>
    </Box>
  );
};

export default CourseLearnInteractive;
