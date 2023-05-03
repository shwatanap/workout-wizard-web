import { Box, Typography } from "@mui/material";

import Header from "@/components/Header";
import WorkoutList from "@/components/WorkoutList";

const OutputTemplate = () => {
  return (
    <div>
      <Header />
      <Box sx={{ bgcolor: "#333333", p: "30px", display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          Menu List
        </Typography>
      </Box>

      <WorkoutList />
    </div>
  );
};

export default OutputTemplate;
