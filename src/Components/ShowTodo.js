import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import Box from "@mui/material/Box";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import { toggleComplete, deleteTodo } from "../store/todo-slice";
import { green } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

function ShowTodo() {
    const todos = useSelector((state) => state.todokey);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleComplete(id));
    };

    return (
        <TableContainer sx={{ width: "600px", margin: "1rem auto" }} component={Paper}>
            {todos.length === 0 ? (
                navigate("/")
            ) : (
                <Table sx={{ width: "600px" }} aria-label="simple table">
                    <TableBody>
                        {todos.map((element) => (
                            <TableRow
                                key={element.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    style={{
                                        textDecoration: element.completed ? "line-through" : "none",
                                    }}
                                >
                                    {element.note}
                                </TableCell>

                                <TableCell align="right">
                                    <Box onClick={() => handleToggle(element.id)}>
                                        {!element.completed ? (
                                            <CheckBoxOutlineBlankIcon
                                                sx={{ color: green[500] }}
                                                fontSize="medium"
                                            />
                                        ) : (
                                            <CheckBoxIcon
                                                sx={{ color: green[500] }}
                                                fontSize="medium"
                                            />
                                        )}
                                    </Box>
                                </TableCell>
                                
                                <TableCell align="right">
                                    <DeleteIcon
                                        sx={{ color: green[500] }}
                                        onClick={() => handleDelete(element.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
}

export default ShowTodo;
