import { superAdminNavbarLinks } from "../../data/links.navbar.super-admin";
import Navbar from "../../shared/navbar";
import Layout from "../layout";

export const SuperAdminLayout = Layout(Navbar(superAdminNavbarLinks));
