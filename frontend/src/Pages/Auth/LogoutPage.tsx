import { useEffect } from "react";
import { useUserStore } from "../../store/UserStore";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Box, Typography } from "@mui/material";

const LogoutPage = () => {
  const updateName = useUserStore((state) => state.updateName);
  const updateAddress = useUserStore((state) => state.updateAddress);
  const updateRole = useUserStore((state) => state.updateRole);
  const updateDob = useUserStore((state) => state.updateDob);
  const updateSkills = useUserStore((state) => state.updateSkills);
  const updatePhonenumber = useUserStore((state) => state.updatePhonenumber);
  const updateId = useUserStore((state) => state.updateId);
  const updateAvailability = useUserStore((state) => state.updateAvailability);
  const updateGender = useUserStore((state) => state.updateGender);
  const updateHours = useUserStore((state) => state.updateHours);
  const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();

    updateName("");
    updateAddress("");
    updateRole("");
    updateDob("");
    updateSkills("");
    updatePhonenumber("");
    updateId("");
    updateAvailability("");
    updateGender("");
    updateHours("");
    updateIsLoggedIn(false);

    setTimeout(() => {
      navigate("/login");
      console.log("Logged out");
    }, 1000); // Optional delay for a smoother user experience
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
      padding={2}
    >
      <CircularProgress />
      <Typography variant="h6" marginTop={2}>
        Logging out...
      </Typography>
    </Box>
  );
};

export default LogoutPage;
