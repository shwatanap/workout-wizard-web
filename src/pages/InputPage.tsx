import React, { useState } from "react";

import InputTemplate from "@/templates/InputTemplate";

import { InputInfo } from "@/types/input";

const InputPage = () => {
  // ここで定義すべき？
  const [part, setPart] = useState("");
  const [time, setTime] = useState("");
  const [intensity, setIntensity] = useState("normal");
  // const [menu, setMenu] = useState<InputInfo>();

  // const [inputValue, setInputValue] = useState("");
  // const [menu, setMenu] = useState<InputInfo[]>([]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      // case "part":
      //   setPart(value);
      //   break;
      case "time":
        setTime(value);
        break;
      case "intensity":
        setIntensity(value);
        break;
      default:
        break;
    }
    console.log("part : ", part);
    console.log("time : ", time);
    console.log("intensity : ", intensity);
    console.log("value : ", value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPart(e.target.value);
    console.log("part : ", part);
    console.log("time : ", time);
    console.log("intensity : ", intensity);
    console.log("value : ", e.target.value);
  };

  const handleCreateMenu = () => {
    console.log("part : ", part);
    console.log("time : ", time);
    console.log("intensity : ", intensity);
  };

  return (
    <div>
      {/* <InputTemplate part={part} time={time} intensity={intensity} handleSelect={handleSelect} /> */}
      <InputTemplate
        handleInput={handleInput}
        handleSelect={handleSelect}
        handleCreateMenu={handleCreateMenu}
      />
    </div>
  );
};

export default InputPage;
