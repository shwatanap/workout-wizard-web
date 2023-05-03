import React from "react";
import { Box, Typography } from "@mui/material";

import { Procedure } from "@/types/workout";

type Props = {
  procedure: Procedure;
};

const ProcedureBox: React.FC<Props> = ({ procedure }) => {
  return (
    <Box sx={{ bgcolor: "white", mt: "20px", mx: "10px" }}>
      <Box sx={{ borderBottom: "1px solid #333333" }}>
        <Typography variant="h6" sx={{ color: "#333333", p: "5px" }}>
          {procedure.section}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", p: "10px", height: "150px" }}>
        <img src={procedure.img} alt="説明画像" />
        <Box sx={{ ml: "10px", border: "1px dashed #333333" }}>
          <Typography sx={{ color: "#333333", m: "10px" }}>{procedure.explain}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProcedureBox;
