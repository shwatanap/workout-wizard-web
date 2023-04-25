import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ bgcolor: "#333333" }}>
        <Box sx={{ color: "#ffff00" }}>
          <Typography sx={{ pl: "10px", pt: "10px" }}>Workout</Typography>
          <Typography sx={{ pl: "10px", pb: "10px" }}>Wizard</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
