import React from "react";

import { Output } from "@/types/workout";

type Props = {
  outputlist: Output;
  index: number;
};

const OutputBox: React.FC<Props> = ({ outputlist, index }) => {
  return (
    <div className="pl-[20px] pt-[10px] pr-[40px] pb-[10px]">
      <div className="flex">
        <div className="h-[30px] w-[30px] rounded-full bg-yellow text-black flex justify-center items-center">
          {index + 1}
        </div>

        <div className="flex items-center ml-[10px] text-white text-[18px] font-semibold">
          {outputlist.label}
        </div>
      </div>
      <div className="ml-[14px] mt-[10px] pl-[25px] pb-[50px] border-l-[1px] border-gray text-white text-[16px] tracking-wider">
        {outputlist.description}
      </div>
    </div>
  );
};

export default OutputBox;
