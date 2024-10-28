import { useNavigate } from "react-router-dom";
import { login } from "../../deprecateded/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, TextField, Button } from "@mui/material";
// import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });
  // const { control } = form;
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted");
    console.log(data);
    login(data.email, data.password, navigate);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 border rounded-lg bg-white shadow-md">
        <h2 className="text-xl text-center text-black mb-6">Sign In to your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                background: "#FF5353",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Login
            </Button>
          </Stack>
        </form>
        <div className="relative mt-8">
          <div className="absolute inset-x-0 top-0 border-t border-gray-200"></div>
          <p className="relative text-center bg-white px-3 text-[#CCCCCC] -mt-3">OR</p>
        </div>
        <p
          className="text-[#656565] text-center mt-6 cursor-pointer"
          onClick={() => {
            navigate("/register");
          }}
        >
          Create a new account
        </p>
      </div>
    </div>
    // {/* <DevTool control={control}></DevTool> */}
  );
};

export default LoginPage;
