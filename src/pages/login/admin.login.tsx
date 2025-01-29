import { LoginRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { GraduationIcon } from "../../assets/icons/GraduationIcon";
import { useState } from "react";
import { LinkButton } from "../../components/ui/link.button";
import toast from "react-hot-toast";
import { adminLogin } from "../../services/admin.service";
import { useAdminLoginDispatch } from "../../hooks/dispatch";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const login = useAdminLoginDispatch();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState<{
    adminId: string;
    password: string;
  }>({
    adminId: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglesecretKeyVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    toast
      .promise(adminLogin(admin), {
        success: "Admin logged in successfully",
        loading: "Logging in...",
        error: "Something went wrong...",
      })
      .then((data) => {
        console.log(data.data);
        login(data.data);
        navigate("/administrator/in/admin/dashboard");
      })
      .catch();
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <LinkButton
          flexDir="flex-row-reverse"
          position="left-top"
          to={"/login"}
          absolute={true}
        >
          <>
            <span>User Login</span>
            <LoginRounded
              fontSize="large"
              sx={{
                transform: "rotateY(180deg)",
              }}
            />
          </>
        </LinkButton>
        <LinkButton
          flexDir="flex-row"
          position="right-top"
          to={"/login/admin/super-admin"}
          absolute={true}
        >
          <>
            <span>Super Admin Login</span>
            <LoginRounded fontSize="large" />
          </>
        </LinkButton>
        <Container maxWidth="xs">
          <Paper
            variant="outlined"
            sx={{
              padding: 3,
              borderRadius: 2,
              backgroundColor: "white",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <GraduationIcon len={100} />
              <Typography variant="h5" gutterBottom>
                College Management System
              </Typography>

              {/* ID Field */}
              <TextField
                fullWidth
                margin="normal"
                label="Admin Id"
                variant="outlined"
                value={admin.adminId}
                onChange={(e) =>
                  setAdmin({
                    ...admin,
                    adminId: e.target.value,
                  })
                }
                sx={{
                  "& label.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
              />

              {/* secretKey Field with Toggle Visibility */}
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={admin.password}
                onChange={(e) =>
                  setAdmin({
                    ...admin,
                    password: e.target.value,
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglesecretKeyVisibility}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
              />

              {/* Login Button */}
              <Button
                fullWidth
                variant="contained"
                onClick={handleLogin}
                sx={{
                  mt: 2,
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default LoginAdmin;
