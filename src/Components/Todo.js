import React, { useState } from "react";
import { addTodo } from "../store/todo-slice";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlertBox from "./AlertBox";

function Todo() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (text.trim() === "") {
      setOpen(true);
    } else {
      dispatch(addTodo(text));
      setText("");
      navigate("/showTodo");
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{ alignSelf: "flex-start", color: "primary.main" }}
          >
            Add Your To-Do
          </Typography>

          <TextField
            id="filled-basic"
            label="Add Note Here"
            variant="filled"
            color="secondary"
            size="medium"
            fullWidth
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ alignSelf: "flex-start" }}
          >
            Submit
          </Button>
        </Box>
        <AlertBox setOpen={setOpen} open={open} />
      </Container>
    </>
  );
}

export default Todo;
