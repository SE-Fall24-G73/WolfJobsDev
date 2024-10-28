import { useNavigate } from "react-router-dom";
import { signup } from "../../deprecateded/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  Typography,
  Box,
} from "@mui/material";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  skills: string;
};

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Applicant");
  const [affilation, setAffiliation] = useState("nc-state-dining");

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      skills: "",
    },
  });

  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted");
    console.log(data);
    signup(
      data.email,
      data.password,
      data.confirmPassword,
      data.name,
      role,
      role === "Manager" ? affilation : "",
      data.skills,
      navigate
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "background.paper",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" },
          maxWidth: 600,
          padding: 4,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Create New Account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Name"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                "& label": { paddingLeft: (theme) => theme.spacing(1) },
                "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                "& fieldset": {
                  paddingLeft: (theme) => theme.spacing(1.5),
                  borderRadius: "10px",
                },
              }}
            />

            <TextField
              label="Email Id"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                "& label": { paddingLeft: (theme) => theme.spacing(1) },
                "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                "& fieldset": {
                  paddingLeft: (theme) => theme.spacing(1.5),
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                "& label": { paddingLeft: (theme) => theme.spacing(1) },
                "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                "& fieldset": {
                  paddingLeft: (theme) => theme.spacing(1.5),
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              label="Confirm password"
              type="password"
              {...register("confirmPassword", {
                required: "Password is required",
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Passwords don't match";
                  }
                },
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              sx={{
                "& label": { paddingLeft: (theme) => theme.spacing(1) },
                "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                "& fieldset": {
                  paddingLeft: (theme) => theme.spacing(1.5),
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              label="Skills"
              type="text"
              {...register("skills", {
                required: "Skills are required",
              })}
              error={!!errors.skills}
              helperText={errors.skills?.message}
              sx={{
                "& label": { paddingLeft: (theme) => theme.spacing(1) },
                "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                "& fieldset": {
                  paddingLeft: (theme) => theme.spacing(1.5),
                  borderRadius: "10px",
                },
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="role-id">Role</InputLabel>
              <Select
                value={role}
                labelId="role-id"
                label="Role"
                id="role"
                onChange={(e: SelectChangeEvent) => {
                  setRole(e.target.value);
                }}
              >
                <MenuItem value={"Manager"}>Manager</MenuItem>
                <MenuItem value={"Applicant"}>Applicant</MenuItem>
              </Select>
            </FormControl>
            {role === "Manager" && (
              <FormControl fullWidth>
                <InputLabel id="affiliation-id">Affiliation</InputLabel>
                <Select
                  value={affilation}
                  labelId="affiliation-id"
                  label="Affiliation"
                  id="affiliation"
                  onChange={(e: SelectChangeEvent) => {
                    setAffiliation(e.target.value);
                  }}
                >
                  <MenuItem value={"nc-state-dining"}>NC State Dining</MenuItem>
                  <MenuItem value={"campus-enterprises"}>Campus Enterprises</MenuItem>
                  <MenuItem value={"wolfpack-outfitters"}>Wolfpack Outfitters</MenuItem>
                </Select>
              </FormControl>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                background: "#FF5353",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Sign up
            </Button>
          </Stack>
        </form>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            OR
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer", mt: 1 }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an Account? Login Here
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
