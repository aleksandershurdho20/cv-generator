import React from "react";
import Box from '@mui/material/Box';

export default function Footer({ backgroundColor }) {
  const getFullDate = new Date().getFullYear();
  return (
    <Box 
    sx={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor
    }}
    >
      <span>&copy;{getFullDate} CV.AL</span>
      <span>Beta version 1.0</span>
    </Box>
  );
}
