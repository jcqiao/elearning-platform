import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/avatar.png";

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
            src={img1}
            alt="Slide 1"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+2"
            alt="Slide 2"
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/1200x400?text=Slide+3"
            alt="Slide 3"
            style={{ width: "100%", height: "300px" }}
          />
        </div>
      </Slider>
    </Box>
  );
}

export default CommonSlider;
