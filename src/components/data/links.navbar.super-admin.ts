import { Create, ManageAccounts } from "@mui/icons-material";

export const superAdminNavbarLinks = {
  role: "super-admin",
  baseHref: "/administrator/in/super-admin",
  links: [
    {
      label: "Create Admins",
      href: "/create-admins",
      Icon: Create,
    },
    {
      label: "Manage Admins",
      href: "/manage-admins",
      Icon: ManageAccounts,
    },
  ],
};
