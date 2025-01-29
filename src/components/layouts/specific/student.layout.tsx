import { studentNavbarLinks } from "../../data/links.navbar.student";
import Navbar from "../../shared/navbar";
import Layout from "../layout";

export const StudentLayout = Layout(Navbar(studentNavbarLinks));
