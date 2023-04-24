import React from "react";

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

const InputTemplate: React.FC<Props> = ({ handleInput, handleSelect, handleCreateMenu }) => {
  return (
    <div>
      <Container>
        <form>
          <label>
            部位
            <input type="radio" name="part" value="pectoral" />
            胸筋
            <input type="radio" name="part" value="shoulder" />
            肩
            <input type="radio" name="part" value="upper" />
            上半身
            <input type="radio" name="part" value="lower" />
            下半身
            <input type="radio" name="part" value="whole" />
            全身
          </label>
          <br />
          <div>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography id="time-slider" gutterBottom>
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
          </div>
          <br />
          <label>
            強度
            <select>
              <option value="high">高い</option>
              <option value="normal">普通</option>
              <option value="low">低い</option>
            </select>
          </label>
        </form>
        <NextButton path="/output" name="トレーニング開始" handleCreateMenu={handleCreateMenu} />
      </Container>
    </div>
  );
};

export default InputTemplate;
