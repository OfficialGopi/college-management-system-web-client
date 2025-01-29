import { adminNavbarLinks } from "../../data/links.navbar.admin";
import Navbar from "../../shared/navbar";
import Layout from "../layout";

export const AdminLayout = Layout(Navbar(adminNavbarLinks));
