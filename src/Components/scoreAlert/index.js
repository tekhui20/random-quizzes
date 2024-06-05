import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetLeaderBoard, selectScore } from "../../store/reducers/data";

export default function ScoreAlert(props) {
  const [name, setName] = useState("");
  const score = useSelector(selectScore);
  const dispatch = useDispatch();
  const { open, close, refreshTrigger } = props;
  return (
    <Dialog open={open}>
      <DialogTitle>Your Score is {score}</DialogTitle>
      <DialogContent sx={{ display: "flex" }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            close();
            refreshTrigger();
            dispatch(
              actionSetLeaderBoard([
                {
                  name: name,
                  score: score,
                },
              ])
            );
          }}
        >
          Confirm
        </Button>
      </DialogContent>
    </Dialog>
  );
}
