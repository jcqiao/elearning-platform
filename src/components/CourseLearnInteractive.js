import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    content: "Slide 1",
    imageUrl: img1,
    buttons: [
      {
        id: 1,
        label: "Button 1",
        clicked: false,
        text: "You click button 1 susccessfully"
      },
      {
        id: 2,
        label: "Button 2",
        clicked: false,
        text: "You click button 2 susccessfully"
      },
      {
        id: 3,
        label: "Button 3",
        clicked: false,
        text: "You click button 3 susccessfully"
      }
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
const CourseLearnInteractive = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(
    slides.map(slide => slide.buttons.map(button => false))
  );
  const [showTexts, setShowTexts] = useState(slides.map(() => ""));
  const navigate = useNavigate();

  const handleButtonClick = (slideIndex, buttonIndex) => {
    const updatedClicks = [...buttonClicks];
    updatedClicks[slideIndex][buttonIndex] = true;
    setButtonClicks(updatedClicks);
    // Update showText for the current slide
    const updatedShowTexts = [...showTexts];
    updatedShowTexts[slideIndex] = slides[slideIndex].buttons[buttonIndex].text;
    setShowTexts(updatedShowTexts);
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
          marginBottom: 2,
          padding: 5
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Grid
              container
              direction={"column"}
              spacing={2}
              alignItems={"start"}
            >
              {slides[currentSlide].buttons.map((button, index) =>
                <Grid item xs={6}>
                  <Button
                    key={button.id}
                    variant="contained"
                    color={
                      buttonClicks[currentSlide][index]
                        ? "secondary"
                        : "primary"
                    }
                    onClick={() => handleButtonClick(currentSlide, index)}
                  >
                    {button.label}
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={6} md={6}>
            {showTexts[currentSlide] &&
              <Typography variant="body1" gutterBottom>
                {showTexts[currentSlide]}
              </Typography>}
          </Grid>
        </Grid>
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
