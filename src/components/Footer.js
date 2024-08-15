import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: 2,
        textAlign: "center",
        marginTop: 2
      }}
    >
      <Container>
        <Typography variant="body2">
          © {new Date().getFullYear()} My E-Learning Platform.
        </Typography>
        <Typography variant="body2">Chunqiao jiang</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
