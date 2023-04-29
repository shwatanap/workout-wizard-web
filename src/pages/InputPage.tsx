import React, { useState } from "react";

import InputTemplate from "@/templates/InputTemplate";
import { SelectChangeEvent } from "@mui/material";

const InputPage = () => {
  const [part, setPart] = useState("");
  const [time, setTime] = useState(0);
  const [intensity, setIntensity] = useState("");

  const handlePart = (e: SelectChangeEvent) => {
    setPart(e.target.value);
    console.log(e.target.value);
  };

  const handleTime = (e: Event, newEvent: number | number[]) => {
    setTime(newEvent as number);
    console.log(newEvent);
  };

  const handleIntensity = (e: Event, newEvent: number | number[]) => {
    if (newEvent === 0) {
      setIntensity("low");
    } else if (newEvent === 1) {
      setIntensity("nomale");
    } else {
      setIntensity("high");
    }
    console.log(newEvent);
  };

  // 入力のバリデーションチェック
  // const handleCheckInput = () => {};

  const handleCreateMenu = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log("############");
    console.log("part : ", part);
    console.log("time : ", time);
    console.log("intensity : ", intensity);
  };

  return (
    <div>
      <InputTemplate
        handlePart={handlePart}
        handleTime={handleTime}
        handleIntensity={handleIntensity}
        handleCreateMenu={handleCreateMenu}
      />
    </div>
  );
};

export default InputPage;
