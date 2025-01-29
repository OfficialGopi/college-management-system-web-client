import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-Router";

//layouts
import { StudentLayout } from "../components/layouts/specific/student.layout";
import { TeacherLayout } from "../components/layouts/specific/teacher.layout";
import { AdminLayout } from "../components/layouts/specific/admin.layout";
import { SuperAdminLayout } from "../components/layouts/specific/super-admin";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteInLogin } from "../utils/ProtectedRouteInLogin";
import { useUserSelector } from "../hooks/selector";
import ProtectedRoute from "../utils/ProtectedRoute";
import { cookieVerifyAdmin } from "../services/admin.service";

//lazy loading-------------->

//default
const Home = lazy(() => import("../pages/home"));
//login
const LoginUser = lazy(() => import("../pages/login/user.login"));
const LoginAdmin = lazy(() => import("../pages/login/admin.login"));
const LoginSuperAdmin = lazy(() => import("../pages/login/super-admin.login"));

//student
const DashboardStudent = lazy(
  () => import("../pages/student/dashboard.student")
);
const SubjectsStudent = lazy(() => import("../pages/student/subjects.student"));
const AssignmentsStudent = lazy(
  () => import("../pages/student/assignments.student")
);
const InAssignmentsStudent = lazy(
  () => import("../pages/student/in.assignments.student")
);
const MaterialsStudent = lazy(
  () => import("../pages/student/materials.student")
);
const InMaterialsStudent = lazy(
  () => import("../pages/student/in.materials.student")
);
const AttendanceStudent = lazy(
  () => import("../pages/student/attendance.student")
);
const GradesStudent = lazy(() => import("../pages/student/grades.student"));
const InGradesStudent = lazy(
  () => import("../pages/student/in.grades.student")
);
const NoticesStudent = lazy(() => import("../pages/student/notices.student"));
const ProfileStudent = lazy(() => import("../pages/student/profile.student"));

//teacher
const DashboardTeacher = lazy(
  () => import("../pages/teacher/dashboard.teacher")
);
const SubjectsTeacher = lazy(() => import("../pages/teacher/subjects.teacher"));
const AssignmentsTeacher = lazy(
  () => import("../pages/teacher/assignments.teacher")
);
const InAssignmentsTeacher = lazy(
  () => import("../pages/teacher/in.assignments.teacher")
);
const DetailsInAssignmentsTeacher = lazy(
  () => import("../pages/teacher/details.in.assignments.teacher")
);
const PreviousAssignmentsTeacher = lazy(
  () => import("../pages/teacher/previousAssignments.teacher")
);
const MaterialsTeacher = lazy(
  () => import("../pages/teacher/materials.teacher")
);
const InMaterialsTeacher = lazy(
  () => import("../pages/teacher/in.materials.teacher")
);
const PreviousMaterialsTeacher = lazy(
  () => import("../pages/teacher/previousMaterials.teacher")
);
const AttendanceTeacher = lazy(
  () => import("../pages/teacher/attendance.teacher")
);
const InAttendanceTeacher = lazy(
  () => import("../pages/teacher/in.attendance.teacher")
);
const GradesTeacher = lazy(() => import("../pages/teacher/grades.teacher"));
const InGradesTeacher = lazy(
  () => import("../pages/teacher/in.grades.teacher")
);
const NoticesTeacher = lazy(() => import("../pages/teacher/notices.teacher"));
const ProfileTeacher = lazy(() => import("../pages/teacher/profile.teacher"));

//admin
const DashboardAdmin = lazy(() => import("../pages/admin/dashboard.admin"));
const BatchesAdmin = lazy(() => import("../pages/admin/batches.admin"));
const CreateBatchesAdmin = lazy(
  () => import("../pages/admin/create.batches.admin")
);
const PreviousBatchesAdmin = lazy(
  () => import("../pages/admin/previous.batches.admin")
);
const SubjectsAdmin = lazy(() => import("../pages/admin/subjects.admin"));
const AllSubjectsAdmin = lazy(
  () => import("../pages/admin/all.subjects.admin")
);
const CreateUsersAdmin = lazy(() => import("../pages/admin/createusers.admin"));
const AllStudentsAdmin = lazy(
  () => import("../pages/admin/all.students.admin")
);

const AllTeachersAdmin = lazy(
  () => import("../pages/admin/all.teachers.admin")
);
const AttedanceAdmin = lazy(() => import("../pages/admin/attendance.admin"));
const NoticesAdmin = lazy(() => import("../pages/admin/notices.admin"));
const PreviousNoticesAdmin = lazy(
  () => import("../pages/admin/previous.notices.admin")
);
const ProfileAdmin = lazy(() => import("../pages/admin/profile.admin"));

//super admin

const CreateAdminsSuperAdmin = lazy(
  () => import("../pages/super-admin/create.admins.super-admin")
);
const ManageAdminsSuperAdmin = lazy(
  () => import("../pages/super-admin/manage.admins.super-admin")
);
//Router
const Router = () => {
  const user = useUserSelector();
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />
        {/* Login */}
        <Route element={<ProtectedRouteInLogin user={user} />}>
          <Route path="/login" element={<LoginUser />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route
            path="/login/admin/super-admin"
            element={<LoginSuperAdmin />}
          />
        </Route>

        {/* Student */}

        <Route path="/in/student" element={<StudentLayout />}>
          <Route path="" element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<DashboardStudent />} />
          <Route path="subjects" element={<SubjectsStudent />} />
          <Route path="assignments" element={<AssignmentsStudent />} />
          <Route
            path="assignments/:subjectCode"
            element={<InAssignmentsStudent />}
          />
          <Route path="materials" element={<MaterialsStudent />} />
          <Route
            path="materials/:subjectCode"
            element={<InMaterialsStudent />}
          />
          <Route path="attendance" element={<AttendanceStudent />} />
          <Route path="grades" element={<GradesStudent />} />
          <Route path="grades/:semester" element={<InGradesStudent />} />
          <Route path="notices" element={<NoticesStudent />} />
          <Route path="profile" element={<ProfileStudent />} />
          <Route path="*" element={<Navigate to={"/in/student/dashboard"} />} />
        </Route>

        {/* Teacher */}
        <Route
          element={
            <ProtectedRoute
              role={"teacher"}
              cookieVerifyFunc={cookieVerifyAdmin}
              user={user}
            />
          }
        >
          <Route path="/in/teacher" element={<TeacherLayout />}>
            <Route path="" element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<DashboardTeacher />} />
            <Route path="subjects" element={<SubjectsTeacher />} />
            <Route path="assignments" element={<AssignmentsTeacher />} />
            <Route
              path="assignments/:subjectCode"
              element={<InAssignmentsTeacher />}
            />
            <Route
              path="assignments/:subjectCode/previousassignments"
              element={<PreviousAssignmentsTeacher />}
            />
            <Route
              path="assignments/:subjectCode/previousassignments/:assignment"
              element={<DetailsInAssignmentsTeacher />}
            />
            <Route path="materials" element={<MaterialsTeacher />} />
            <Route
              path="materials/:subjectCode"
              element={<InMaterialsTeacher />}
            />
            <Route
              path="materials/:subjectCode/previousmaterials"
              element={<PreviousMaterialsTeacher />}
            />
            <Route path="attendance" element={<AttendanceTeacher />} />
            <Route
              path="attendance/:subjectCode"
              element={<InAttendanceTeacher />}
            />
            <Route path="grades" element={<GradesTeacher />} />
            <Route path="grades/:subjectCode" element={<InGradesTeacher />} />
            <Route path="notices" element={<NoticesTeacher />} />
            <Route path="profile" element={<ProfileTeacher />} />
            <Route
              path="*"
              element={<Navigate to={"/in/teacher/dashboard"} />}
            />
          </Route>
        </Route>

        {/* Admin */}
        <Route
          element={
            <ProtectedRoute
              role={"admin"}
              cookieVerifyFunc={cookieVerifyAdmin}
              user={user}
            />
          }
        >
          <Route path="/administrator/in/admin" element={<AdminLayout />}>
            <Route path="" element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="batches" element={<BatchesAdmin />} />
            <Route path="batches/create" element={<CreateBatchesAdmin />} />
            <Route path="batches/previous" element={<PreviousBatchesAdmin />} />
            <Route path="subjects" element={<SubjectsAdmin />} />
            <Route path="subjects/allsubjects" element={<AllSubjectsAdmin />} />
            <Route path="createusers" element={<CreateUsersAdmin />} />
            <Route
              path="createusers/allstudents"
              element={<AllStudentsAdmin />}
            />
            <Route
              path="createusers/allteachers"
              element={<AllTeachersAdmin />}
            />
            <Route path="attendance" element={<AttedanceAdmin />} />
            <Route path="notices" element={<NoticesAdmin />} />
            <Route
              path="notices/previousnotices"
              element={<PreviousNoticesAdmin />}
            />
            <Route path="profile" element={<ProfileAdmin />} />
          </Route>

          {/* Super Admin */}
          <Route
            path="/administrator/in/super-admin"
            element={<SuperAdminLayout />}
          >
            <Route path="" element={<Navigate to={"create-admins"} />} />
            <Route path="create-admins" element={<CreateAdminsSuperAdmin />} />
            <Route path="manage-admins" element={<ManageAdminsSuperAdmin />} />
          </Route>
        </Route>
        {/* Default */}
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
