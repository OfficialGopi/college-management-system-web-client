import { Logout, Menu } from "@mui/icons-material";
import { GraduationIcon } from "../../assets/icons/GraduationIcon";
import { Avatar, Drawer, IconButton, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogoutDialog from "../dialog/logout.dialog";

const Navbar = (navlinks: any) => () => {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {navlinks.links.map((data: any, index: number) => (
          <Tooltip title={data.label} key={index}>
            <NavLink
              to={`${navlinks.baseHref}${data.href}`}
              className="text-gray-800  transition-all duration-300"
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <li className="hover:cursor-pointer list-none hover:opacity-100 hover:bg-black hover:text-white p-2 rounded-[10px] transition-colors duration-300">
                <data.Icon />
              </li>
            </NavLink>
          </Tooltip>
        ))}
      </Drawer>
      <nav
        className="
   w-full md:w-[768px] lg:w-[1024px] p-2 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <IconButton onClick={() => setDrawerOpen(true)}>
              <Menu />
            </IconButton>
          </div>
          <NavLink to={"/"}>
            <GraduationIcon len={40} />
          </NavLink>
        </div>
        <ul
          className="hidden md:flex items-center justify-center gap-4"
          id="navlinks"
        >
          {navlinks.links.map((data: any, index: number) => (
            <Tooltip title={data.label} key={index}>
              <NavLink
                to={`${navlinks.baseHref}${data.href}`}
                className="text-gray-800 transition-all duration-300"
              >
                <li className="hover:cursor-pointer hover:opacity-100 hover:bg-black hover:text-white p-2 rounded-[10px] transition-colors duration-300">
                  <data.Icon />
                </li>
              </NavLink>
            </Tooltip>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          {navlinks.profile && (
            <Tooltip title="Profile">
              <Avatar
                component={NavLink}
                to={`${navlinks.baseHref}${navlinks.profile.href}`}
              />
            </Tooltip>
          )}
          <div className="md:hidden">
            <IconButton
              onClick={() => {
                setLogoutDialogOpen(true);
              }}
              sx={{
                color: "black",
              }}
            >
              <Logout fontSize="large" />
            </IconButton>
          </div>
        </div>
      </nav>
      <LogoutDialog
        handleLogoutConfirm={() => {}}
        logoutDialogOpen={logoutDialogOpen}
        handleLogoutDialogClose={() => setLogoutDialogOpen(false)}
      />
    </>
  );
};

export default Navbar;
