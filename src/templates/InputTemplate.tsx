import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  part: string;
  time: string;
  intensity: string;
};

const InputTemplate: React.FC<Props> = ({ part, time, intensity }) => {
  // TODO 変数の渡し方？
  const createNewTraining = () => {
    axios
      .post("", {
        part: part,
        time: time,
        intensity: intensity,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Link to="/output">
        {/* <BaseButton text="トレーニング開始" textColor="black" backgroundColor="yellow" /> */}
        <button onClick={createNewTraining}>トレーニング開始</button>
      </Link>
    </div>
  );
};

export default InputTemplate;
