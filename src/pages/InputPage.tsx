import React, { useState } from "react";

import InputTemplate from "@/templates/InputTemplate";

const InputPage = () => {
  const [part, setPart] = useState("");
  const [time, setTime] = useState("");
  const [intensity, setIntensity] = useState("normal");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "time":
        setTime(value);
        break;
      case "intensity":
        setIntensity(value);
        break;
      default:
        break;
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPart(e.target.value);
  };

  // 入力のバリデーションチェック
  const handleCheckInput = () => {};

  const handleCreateMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("####################");
    console.log("part : ", part);
    console.log("time : ", time);
    console.log("intensity : ", intensity);
  };

  return (
    <div>
      <InputTemplate
        handleInput={handleInput}
        handleSelect={handleSelect}
        handleCreateMenu={handleCreateMenu}
      />
    </div>
  );
};

export default InputPage;
