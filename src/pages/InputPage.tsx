import React, { useState } from "react";

import InputTemplate from "@/templates/InputTemplate";

const InputPage = () => {
  // ここで定義すべき？
  const [part, setPart] = useState("");
  const [time, setTime] = useState("");
  const [intensity, setIntensity] = useState("normal");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "part":
        setPart(value);
        break;
      case "time":
        setTime(value);
        break;
      default:
        break;
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIntensity(e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          部位
          <input name="part" type="text" value={part} onChange={handleInput} />
        </label>
        <br />
        <label>
          時間
          <input name="time" type="number" value={time} onChange={handleInput} />
        </label>
        <br />
        <label>
          強度
          <select value={intensity} onChange={handleSelect}>
            <option value="high">高い</option>
            <option value="normal">普通</option>
            <option value="low">低い</option>
          </select>
        </label>
      </form>
      <InputTemplate part={part} time={time} intensity={intensity} />
    </div>
  );
};

export default InputPage;
