import { Email, Language, LogoutOutlined, Phone } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LogoutDialog from "../dialog/logout.dialog";
import { useState } from "react";
import { useLogoutDispatch } from "../../hooks/dispatch";
import { useNavigate } from "react-router-dom";
import { useUserSelector } from "../../hooks/selector";
import { adminLogout } from "../../services/admin.service";

const Aside = () => {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState<boolean>(false);
  const user = useUserSelector();
  const logout = useLogoutDispatch();
  const navigate = useNavigate();

  return (
    <section className="w-full lg:p-[2px] h-full flex flex-col justify-between overflow-y-auto overflow-x-hidden">
      <div className="w-full scale-75 ">
        {/* Add calender here */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="w-full"
            readOnly
            sx={{
              marginX: 0,
              width: "auto",
            }}
          />
        </LocalizationProvider>
      </div>
      {/* Bottom Links Section */}
      <div className="md:scale-75 flex flex-col gap-2 lg:scale-90">
        <Divider />
        <div className="w-full flex flex-col p-2 lg:p-4">
          <span className="flex gap-2 items-center">
            <span className="text-lg text-black">
              <Email />:
            </span>
            <a
              href="mailto:principal@gcelt.gov.com"
              className="text-gray-500 hover:text-gray-800 transition-all"
            >
              principal@gcelt.gov.com
            </a>
          </span>
          <span className="flex gap-2 items-center">
            <span className="text-lg text-black">
              <Language />:
            </span>
            <a
              href="https://gcelt.gov.in/"
              target="_blank"
              className="text-gray-500 hover:text-gray-800 transition-all"
            >
              https://gcelt.gov.in/
            </a>
          </span>
          <span className="flex gap-2 items-center">
            <span className="text-lg text-black">
              <Phone />:
            </span>
            <a
              href="tel:+91 33 23356977"
              className="text-gray-500 hover:text-gray-800 transition-all"
            >
              +91 33 23356977
            </a>
          </span>
        </div>
        <Divider />
        <button
          onClick={() => {
            setLogoutDialogOpen(true);
          }}
          className="flex border rounded-xl transition-all hover:scale-90  duration-300 justify-center gap-1 font-semibold hover:bg-black hover:text-white w-full p-4 text-2xl items-center"
        >
          <span>Logout</span>
          <LogoutOutlined fontSize="large" />
        </button>
      </div>
      <LogoutDialog
        handleLogoutConfirm={() => {
          if (user.role == "admin") {
            adminLogout().then(() => {
              logout();
              navigate("/login");
            });
          } else if (user.role == "student" || "teacher") {
            adminLogout().then(() => {
              logout();
              navigate("/login");
            });
          } else if (user.role == "super-admin") {
            logout();
            navigate("/login");
          } else {
            navigate("/login");
          }
        }}
        logoutDialogOpen={logoutDialogOpen}
        handleLogoutDialogClose={() => setLogoutDialogOpen(false)}
      />
    </section>
  );
};

export default Aside;
