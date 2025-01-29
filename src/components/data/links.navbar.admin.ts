import {
  Dashboard,
  Done,
  Group,
  Notifications,
  Person,
  Subject,
} from "@mui/icons-material";

export const adminNavbarLinks = {
  role: "admin",
  baseHref: "/administrator/in/admin",
  links: [
    {
      label: "Dashboard",
      href: "/dashboard",
      Icon: Dashboard,
    },
    {
      label: "Batches",
      href: "/batches",
      Icon: Group,
    },
    {
      label: "Subjects",
      href: "/subjects",
      Icon: Subject,
    },
    {
      label: "Create Users",
      href: "/createusers",
      Icon: Person,
    },
    {
      label: "Attendence",
      href: "/attendance",
      Icon: Done,
    },
    {
      label: "Notices",
      href: "/notices",
      Icon: Notifications,
    },
  ],
  profile: {
    label: "Profile",
    href: "/profile",
  },
};
