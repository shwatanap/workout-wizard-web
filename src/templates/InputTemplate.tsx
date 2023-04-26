import React from "react";

import { Radio, RadioGroup } from "@mui/material";
import { Box, ButtonGroup, Button } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Slider } from "@mui/material";

import NextButton from "@/parts/input/NextButton";
// import { InputInfo } from "@/types/input";

type Props = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleCreateMenu: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const times = [
  { value: 10, label: "10分" },
  { value: 15, label: "15分" },
  { value: 20, label: "20分" },
  { value: 25, label: "25分" },
  { value: 30, label: "30分" },
];

const intensitys = [
  { value: 0, label: "低い" },
  { value: 1, label: "普通" },
  { value: 2, label: "高い" },
];

const parts = ["胸筋", "肩", "上半身", "下半身", "全身"];

const InputTemplate: React.FC<Props> = ({ handleInput, handleSelect, handleCreateMenu }) => {
  return (
    <Container>
      {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Grid container spacing={1}>
          {parts.map((option) => (
            <Grid xs={2}>
              <Button key={option}>{option}</Button>
            </Grid>
          ))}
        </Grid>
      </ButtonGroup>

      <FormControl>
        <Typography variant="h6" id="parts-slider" gutterBottom>
          トレーニング部位
        </Typography>
        <RadioGroup row defaultValue="pectoral">
          <FormControlLabel value="pectoral" control={<Radio />} label="胸筋" />
          <FormControlLabel value="shoulder" control={<Radio />} label="肩" />
          <FormControlLabel value="upper" control={<Radio />} label="上半身" />
          <FormControlLabel value="lower" control={<Radio />} label="下半身" />
          <FormControlLabel value="whole" control={<Radio />} label="全身" />
        </RadioGroup>
      </FormControl> */}

      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6" id="time-slider" gutterBottom>
            トレーニング時間
          </Typography>
        </Grid>
        <Grid item>
          <Slider
            sx={{ width: 250 }}
            min={10}
            max={30}
            size="medium"
            track={false}
            aria-label="time-slider"
            step={5}
            defaultValue={20}
            marks={times}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6" id="intensity-slider" gutterBottom>
            トレーニング強度
          </Typography>
        </Grid>
        <Grid>
          <Slider
            sx={{ width: 250 }}
            min={0}
            max={2}
            size="medium"
            track={false}
            aria-label="intensity-slider"
            step={1}
            defaultValue={1}
            marks={intensitys}
          />
        </Grid>
      </Grid>
      <NextButton path="/output" name="トレーニング開始" handleCreateMenu={handleCreateMenu} />
    </Container>
  );
};

export default InputTemplate;
