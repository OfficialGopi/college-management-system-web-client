import {
  Assessment,
  Book,
  Dashboard,
  Done,
  Grade,
  Notifications,
  Subject,
} from "@mui/icons-material";

export const studentNavbarLinks = {
  role: "student",
  baseHref: "/in/student",
  links: [
    {
      label: "Dashboard",
      href: "/dashboard",
      Icon: Dashboard,
    },
    {
      label: "Subjects",
      href: "/subjects",
      Icon: Subject,
    },
    {
      label: "Assignments",
      href: "/assignments",
      Icon: Assessment,
    },
    {
      label: "Materials",
      href: "/materials",
      Icon: Book,
    },
    {
      label: "Attendence",
      href: "/attendance",
      Icon: Done,
    },
    {
      label: "Grades",
      href: "/grades",
      Icon: Grade,
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
