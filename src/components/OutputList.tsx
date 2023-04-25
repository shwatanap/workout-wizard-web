import * as React from "react";

import Timeline from "@mui/lab/Timeline";

import { dummyOutputlistData } from "@/datas/dummyOutputlistData";
import { Output } from "@/types/workout";
import OutputBox from "@/parts/output/OutputBox";

const OutputList = () => {
  return (
    <Timeline
      sx={{
        bgcolor: "#333333",
        marginLeft: "-80%",
        width: "180%",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      {dummyOutputlistData.map((item: Output, index) => {
        return <OutputBox outputlist={item} />;
      })}
    </Timeline>
  );
};

export default OutputList;
