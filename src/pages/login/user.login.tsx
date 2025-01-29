import { useState } from "react";
import { GraduationIcon } from "../../assets/icons/GraduationIcon";
import {
  Container,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { LoginRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { LinkButton } from "../../components/ui/link.button";
import toast from "react-hot-toast";
import { adminLogin } from "../../services/admin.service";

function LoginUser() {
  const [user, setUser] = useState<{
    userId: string;
    password: string;
    role: "teacher" | "student";
  }>({
    userId: "",
    password: "",
    role: "student",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    // toast.promise();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" w-full  flex justify-center relative items-center">
      <LinkButton
        to="/login/admin"
        flexDir="flex-row"
        absolute={true}
        position="right-top"
      >
        <>
          <span>Admin Panel</span>
          <LoginRounded fontSize="large" />
        </>
      </LinkButton>
      <Container maxWidth="xs">
        <Paper
          variant="outlined"
          sx={{
            border: "1px so lid black",
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

            {/* Role Selection */}
            <FormControl component="fieldset" margin="normal">
              <RadioGroup
                row
                value={user.role}
                onChange={(e) =>
                  setUser({
                    ...user,
                    role: e.target.value as "student" | "teacher",
                  })
                }
              >
                <FormControlLabel
                  value="student"
                  control={
                    <Radio
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label="Student"
                />
                <FormControlLabel
                  value="teacher"
                  control={
                    <Radio
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label="Teacher"
                />
              </RadioGroup>
            </FormControl>

            {/* ID Field */}
            <TextField
              fullWidth
              margin="normal"
              label="ID"
              variant="outlined"
              value={user.userId}
              onChange={(e) =>
                setUser({
                  ...user,
                  userId: e.target.value,
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

            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
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
  );
}

export default LoginUser;
