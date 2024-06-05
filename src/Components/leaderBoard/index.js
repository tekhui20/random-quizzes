import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLeaderBoard } from "../../store/reducers/data";

export default function LeaderBoard(props) {
  const leaderBoard = useSelector(selectLeaderBoard);
  const [sorted, setSorted] = useState([]);
  const { open, close } = props;

  useEffect(() => {
    let temparr = [...leaderBoard];
    temparr.sort((a, b) =>
      a.score < b.score ? 1 : b.score < a.score ? -1 : 0
    );
    setSorted(temparr);
  }, [leaderBoard]);

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Leader Board</DialogTitle>
      <DialogContent sx={{ display: "flex" }}>
        <Grid container direction="column">
          {sorted?.map((item, i) => {
            return (
              <Grid item key={`rank#${i}`}>
                <Typography>
                  {item.name} {item.score}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
