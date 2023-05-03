import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Explain from "@/components/Explain";

const StartTemplate = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ bgcolor: "#333333", height: "770px" }}>
        <Box sx={{ pt: "80px", width: "300px", height: "300px", mx: "auto" }}>
          <img src="/img/logo.png" alt="WorkoutWizardのロゴ" />
        </Box>
        <Box sx={{ fontSize: "16px", color: "white", width: "250px", pt: "100px", mx: "auto" }}>
          <Typography color={"white"}>
            <Typography color={"#ffff00"} component="span" sx={{ fontWeight: "600" }}>
              Workout Wizard
            </Typography>
            は筋トレサポートサービスです。
          </Typography>
          <Typography>あなたを三日坊主とは誰にも言わせない。</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
          <Button sx={{ color: "#333333", bgcolor: "#ffff00" }}>ログイン</Button>
        </Box>

        <Box sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "white", borderBottom: "1px" }} component="span">
            新規登録
          </Typography>
        </Box>

        <Box sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
          <Link to="/input">
            <Button sx={{ color: "white" }}>テスト用</Button>
          </Link>
        </Box>
      </Box>
      <Explain />
      <Footer />
    </Box>
  );
};

export default StartTemplate;
