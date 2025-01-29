import { teacherNavbarLinks } from "../../data/links.navbar.teacher";
import Navbar from "../../shared/navbar";
import Layout from "../layout";

export const TeacherLayout = Layout(Navbar(teacherNavbarLinks));
