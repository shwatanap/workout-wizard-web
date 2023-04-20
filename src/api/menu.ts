import axios from "axios";

import { InputInfo } from "@/types/input";

export const postInput = (input: InputInfo) => {
  const output = axios
    .post("endpoint", {
      part: input.part,
      time: input.time,
      intensity: input.intensity,
    })
    //　TODO responseの処理
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });

  return output;
};
