import { useNavigate } from "react-router-dom";
import { Button, Typography, Stack, Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: "url('/path/to/your/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        padding: isMobile ? 3 : 10,
        color: "#fff",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.6)",
          padding: isMobile ? 3 : 6,
          borderRadius: "12px",
          maxWidth: 600,
          textAlign: "center",
        }}
      >
        <Typography variant={isMobile ? "h4" : "h2"} fontWeight="700" mb={2}>
          We understand that being a student can be challenging.
        </Typography>

        <Typography variant="h6" fontWeight="400" mb={4}>
          Join our dynamic team right here on campus. Earn, learn, and be part
          of the community that powers your daily essentials. Apply now and
          shape your campus experience!
        </Typography>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/signup")}
            sx={{
              fontWeight: "600",
              padding: isMobile ? "10px 20px" : "14px 32px",
              fontSize: isMobile ? "16px" : "18px",
              textTransform: "none",
              borderRadius: "8px",
            }}
          >
            Sign Up
          </Button>

          <Typography variant="body1" sx={{ color: "#CCCCCC" }}>
            OR
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/login")}
            sx={{
              fontWeight: "600",
              padding: isMobile ? "10px 20px" : "14px 32px",
              fontSize: isMobile ? "16px" : "18px",
              textTransform: "none",
              borderRadius: "8px",
            }}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default LandingPage;
