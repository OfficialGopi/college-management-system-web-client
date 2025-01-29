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
import { loginSuperAdmin } from "../../services/super-admin.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  useLogoutDispatch,
  useSuperAdminLoginDispatch,
} from "../../hooks/dispatch";

const LoginSuperAdmin = () => {
  const superAdminLoginFunc = useSuperAdminLoginDispatch();
  const logout = useLogoutDispatch();
  const navigate = useNavigate();
  const [superAdmin, setSuperAdmin] = useState<{
    superAdminId: string;
    password: string;
  }>({
    superAdminId: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglesecretKeyVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    toast
      .promise(loginSuperAdmin(superAdmin), {
        success: "Login Successful",
        loading: "Logging in",
        error: "Login Failed. Wrong Credentials",
      })
      .then(() => {
        superAdminLoginFunc();
        navigate("/administrator/in/super-admin");
      })
      .catch(() => {
        logout();
      });
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <LinkButton
          flexDir="flex-row-reverse"
          position="left-top"
          to={"/login/admin"}
          absolute={true}
        >
          <>
            <span>Admin Login</span>
            <LoginRounded
              fontSize="large"
              sx={{
                transform: "rotateY(180deg)",
              }}
            />
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
                label="Super Admin Id"
                variant="outlined"
                value={superAdmin.superAdminId}
                onChange={(e) =>
                  setSuperAdmin({
                    ...superAdmin,
                    superAdminId: e.target.value,
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
                value={superAdmin.password}
                onChange={(e) =>
                  setSuperAdmin({
                    ...superAdmin,
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

export default LoginSuperAdmin;
