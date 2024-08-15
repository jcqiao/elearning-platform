import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

function CommonSlider({ title = "" }) {
  return (
    <Box sx={{ width: "100%", marginBottom: 2 }}>
      <Typography variant="h4" component="div" gutterBottom>
        {title}
      </Typography>
      <Slider {...sliderSettings}>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+1"
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+2"
            alt="Slide 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+3"
            alt="Slide 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Slider>
    </Box>
  );
}

export default CommonSlider;
