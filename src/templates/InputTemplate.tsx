import React from "react";

import { Radio, RadioGroup, SelectChangeEvent } from "@mui/material";
import { Box, ButtonGroup, Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
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
  handleSelect: (e: SelectChangeEvent) => void;
  handleCreateMenu: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const parts = [
  { value: "pectoral", label: "胸筋" },
  { value: "shoulder", label: "肩" },
  { value: "upper", label: "上半身" },
  { value: "lower", label: "下半身" },
  { value: "whole", label: "全身" },
];

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

const InputTemplate: React.FC<Props> = ({ handleInput, handleSelect, handleCreateMenu }) => {
  return (
    <Box sx={{ backgroundColor: "#333333" }}>
      <Container maxWidth="xs">
        <Typography
          variant="h6"
          style={{ color: "white", padding: "10px", textAlign: "center" }}
          gutterBottom
        >
          トレーニングメニュー
        </Typography>
        <Typography
          variant="h6"
          id="parts-slider"
          style={{ marginTop: "20%", color: "white" }}
          gutterBottom
        >
          トレーニング部位
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="part-select-label">部位</InputLabel>
          <Select labelId="part-select-label" id="part-select" label="part" onChange={handleSelect}>
            {parts.map((part) => (
              <MenuItem value={part.value}>{part.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h6"
              id="time-slider"
              style={{ marginTop: "20%", color: "white" }}
              gutterBottom
            >
              トレーニング時間
            </Typography>
          </Grid>
          <Grid item>
            <Slider
              sx={{ width: 250, color: "#ffff00" }}
              min={10}
              max={30}
              size="medium"
              track={false}
              aria-label="time-slider"
              step={5}
              defaultValue={20}
              marks={times.map((time) => ({
                value: time.value,
                label: <Typography sx={{ color: "white" }}>{time.label}</Typography>,
              }))}
            />
          </Grid>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h6"
              id="intensity-slider"
              style={{ marginTop: "20%", color: "white" }}
              gutterBottom
            >
              トレーニング強度
            </Typography>
          </Grid>
          <Grid>
            <Slider
              sx={{ width: 250, color: "#ffff00" }}
              min={0}
              max={2}
              size="medium"
              track={false}
              aria-label="intensity-slider"
              step={1}
              defaultValue={1}
              marks={intensitys.map((intensity) => ({
                value: intensity.value,
                label: <Typography sx={{ color: "white" }}>{intensity.label}</Typography>,
              }))}
            />
          </Grid>
        </Grid>
        <NextButton path="/output" name="トレーニング開始" handleCreateMenu={handleCreateMenu} />
      </Container>
    </Box>
  );
};

export default InputTemplate;
