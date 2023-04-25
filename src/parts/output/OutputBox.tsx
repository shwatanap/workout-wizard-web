import React from "react";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import { Output } from "@/types/workout";

type Props = {
  outputlist: Output;
};

const OutputBox: React.FC<Props> = ({ outputlist }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6" component="span">
          {outputlist.label}
        </Typography>
        <Typography sx={{ marginTop: "10px", marginBottom: "50px" }}>
          {outputlist.description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default OutputBox;
