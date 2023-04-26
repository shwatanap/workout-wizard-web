import { Box, Typography } from "@mui/material";

import Header from "@/components/Header";
import OutputList from "@/components/OutputList";

const OutputTemplate = () => {
  return (
    <div>
      <Header />
      <Box sx={{ bgcolor: "#333333", p: "30px", display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          Menu List
        </Typography>
      </Box>

      <OutputList />
    </div>
  );
};

export default OutputTemplate;
