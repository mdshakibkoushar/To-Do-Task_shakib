import React from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

// Define your custom theme
const myTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Fantasy', 
        },
        text: {
          color: 'Black', 
          margin: '8px', 
          fontSize: '18px', // Increased font size
        },
      },
    },
  },
});

function LinkPage() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Link to="/showTodo"><Button variant="text">View List</Button></Link>
        <Link to="/"><Button variant="text">Add Note</Button></Link>
      </ThemeProvider>
    </>
  );
}

export default LinkPage;
