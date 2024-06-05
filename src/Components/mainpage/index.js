import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actionScoreChange, selectData } from "../../store/reducers/data";
import Questions from "../questions";
import ScoreAlert from "../scoreAlert";
import LeaderBoard from "../leaderBoard";

export default function Mainpage() {
  const [trigger, setTrigger] = useState(true);
  const [popup, setPopup] = useState(false);
  const [leaderBoardPop, setLeaderBoardPop] = useState(false);
  const [shuffledData, setShuffledData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const refreshTrigger = () => setRefresh(!refresh);
  const onTrigger = () => setTrigger(!trigger);
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  const score = [];

  useEffect(() => {
    dispatch(actionScoreChange(score.filter(Boolean).length));
  }, [score]);

  const Submitfn = () => {
    onTrigger();
    setPopup(true);
  };

  useEffect(() => {
    let temparr = [...data];
    temparr.sort(() => Math.random() - 0.5);
    setShuffledData(temparr);
  }, [refresh]);

  return (
    <Grid container width="80%" mt="2em" direction="column" gap="1em" sx={{}}>
      <Grid item display="flex" justifyContent="space-between">
        <Typography variant="h4" fontWeight={700} sx={{}}>
          20 random quizzes
        </Typography>
        <Button variant="contained" onClick={() => setLeaderBoardPop(true)}>
          Leader Board
        </Button>
      </Grid>
      <Grid item gap="1em" mt="1em">
        {shuffledData?.map((item, i) => {
          return (
            i < 20 && (
              <Questions
                index={i}
                data={item}
                key={`card#${item?.Q}`}
                evenBgColor={i % 2 !== 0}
                score={score}
                trigger={trigger}
              />
            )
          );
        })}
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={Submitfn}>
          Submit
        </Button>
      </Grid>
      <ScoreAlert
        open={popup}
        refreshTrigger={refreshTrigger}
        close={() => {
          setPopup(false);
        }}
      />
      <LeaderBoard
        open={leaderBoardPop}
        close={() => {
          setLeaderBoardPop(false);
        }}
      />
    </Grid>
  );
}
