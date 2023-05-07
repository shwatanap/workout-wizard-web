import axios from "axios";

import { InputInfo } from "@/types/input";

export const postCreateNewMenu = (input: InputInfo) => {
  const params = {
    part: input.part,
    time: input.time,
    intensity: input.intensity,
  };
  return axios.post("endpoint", params);
};
