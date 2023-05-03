import { Box, Typography } from "@mui/material";

import ProcedureBox from "@/parts/start/ProcedureBox";
import { dummyProcedureData } from "@/datas/dummyProcedureData";
import { Procedure } from "@/types/workout";

const Explain = () => {
  return (
    <Box sx={{ bgcolor: "#D9D9D9", pb: "100px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", pt: "80px", pb: "40px" }}>
        <Typography variant="h4" sx={{ color: "#333333" }}>
          How To Use
        </Typography>
      </Box>

      {dummyProcedureData.map((item: Procedure, index) => {
        return <ProcedureBox key={index} procedure={item} />;
      })}
    </Box>
  );
};

export default Explain;
