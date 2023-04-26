import { Typography, Grid } from "@mui/material";

// const Footer1= () => {
//   return (
//     <div className="bg-yellow h-[50px] relative my-auto">
//       <div className="text-black font-bold text-[15px] w-[390px] text-center absolute mt-[12px]">
//         Workout Wizard
//       </div>
//       <div className="text-[1px] my-auto mr-[1px] text-right absolute w-[390px] mt-[12px]">
//         2023 kyutechjapan <br />- @HomePage
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{ bgcolor: "#ffff00", color: "#333333", pt: "15px", pb: "15px" }}
    >
      <Grid xs={2}></Grid>
      <Grid xs={8}>
        <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "600" }}>
          Workout Wizard
        </Typography>
      </Grid>
      <Grid xs={2}>
        <Typography sx={{ fontSize: "1px" }}>2023 kyutech </Typography>
        <Typography sx={{ fontSize: "1px" }}>-@HomePage</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
