import React from "react";
import { Link } from "react-router-dom";

import { InputInfo } from "@/types/input";

type Props = {
  // part: string;
  // time: string;
  // intensity: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleCreateMenu: (e: any) => void;
};

const InputTemplate: React.FC<Props> = ({ handleInput, handleSelect, handleCreateMenu }) => {
  return (
    <div>
      <form>
        <label>
          部位
          {/* <select name="part" value={part} onChange={handleSelect}> */}
          {/* <select name="part" onChange={handleSelect}>
            <option value="胸筋">胸筋</option>
            <option value="肩">肩</option>
            <option value="上半身">上半身</option>
            <option value="足">下半身</option>
            <option value="全身">全身</option>
          </select> */}
          <input type="radio" name="part" value="pectoral" onChange={handleInput} />
          胸筋
          <input type="radio" name="part" value="shoulder" onChange={handleInput} />
          肩
          <input type="radio" name="part" value="upper" onChange={handleInput} />
          上半身
          <input type="radio" name="part" value="lower" onChange={handleInput} />
          下半身
          <input type="radio" name="part" value="whole" onChange={handleInput} />
          全身
        </label>
        <br />
        <label>
          時間
          <select name="time" onChange={handleSelect}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </label>
        <br />
        <label>
          強度
          <select name="intensity" onChange={handleSelect}>
            <option value="high">高い</option>
            <option value="normal">普通</option>
            <option value="low">低い</option>
          </select>
        </label>
      </form>
      <Link to="/output">
        <button onClick={handleCreateMenu}>トレーニング開始</button>
      </Link>
    </div>
  );
};

export default InputTemplate;
