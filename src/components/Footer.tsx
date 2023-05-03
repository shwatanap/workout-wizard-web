import { Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{ bgcolor: "#ffff00", color: "#333333", pt: "15px", pb: "15px" }}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "600" }}>
          Workout Wizard
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ fontSize: "1px" }}>2023 kyutech </Typography>
        <Typography sx={{ fontSize: "1px" }}>-@HomePage</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
