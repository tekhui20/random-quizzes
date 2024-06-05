import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";

export default function Questions(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [shuffledAnswer, setShuffledAnswer] = useState([]);
  const { data, evenBgColor, index, score, trigger } = props;

  useEffect(() => {
    score.push(correct);
    setSelectedAnswer(null);
    setCorrect(false);
  }, [trigger]);

  useEffect(() => {
    let temparr = [...data?.A];
    temparr.sort(() => Math.random() - 0.5);
    setShuffledAnswer(temparr);
  }, []);

  return (
    <Card sx={{ backgroundColor: evenBgColor ? "#ccecff" : "#FFF" }}>
      <CardContent>
        <Typography ml="0.7em" fontWeight={600}>
          {index + 1}: {data?.Q}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Grid container ml="1em" direction="column">
          <FormGroup>
            {shuffledAnswer?.map((item, i) => {
              return (
                <FormControlLabel
                  key={`choice${i}`}
                  control={<Checkbox checked={i === selectedAnswer} />}
                  label={item?.choice}
                  onClick={() => {
                    setSelectedAnswer(i);
                    if (item?.status) {
                      setCorrect(true);
                    } else {
                      setCorrect(false);
                    }
                  }}
                />
              );
            })}
          </FormGroup>
        </Grid>
      </CardContent>
    </Card>
  );
}
