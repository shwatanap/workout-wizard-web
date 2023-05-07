import React, { useState } from "react";

import InputTemplate from "@/templates/InputTemplate";
import { SelectChangeEvent } from "@mui/material";
import { postCreateNewMenu } from "@/api/menu";
import { InputInfo } from "@/types/input";

const InputPage = () => {
  const [part, setPart] = useState("pectoral");
  const [time, setTime] = useState(20);
  const [intensity, setIntensity] = useState("nomale");
  const [menu, setMenu] = useState<any | any>([]);

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

  const CreateMenu = () => {
    const input: InputInfo = {
      part: part,
      time: time,
      intensity: intensity,
    };
    postCreateNewMenu(input).then(
      (res) => {
        console.log(res);
        setMenu(res);
      },
      (error) => {
        console.error(error);
      },
    );
  };

  const SendMenu = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log("part : ", part);
    console.log("time : ", time);
    console.log("intensity : ", intensity);
    console.log("menu : ", menu);
  };

  return (
    <div>
      <InputTemplate
        handlePart={handlePart}
        handleTime={handleTime}
        handleIntensity={handleIntensity}
        handleCreateMenu={CreateMenu}
        handleSendMenu={SendMenu}
      />
    </div>
  );
};

export default InputPage;
