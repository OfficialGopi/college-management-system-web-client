import { Outlet, useNavigate } from "react-router-dom";
import { cookieVerifyAdmin } from "../services/admin.service";
import { useAdminLoginDispatch } from "../hooks/dispatch";

const ProtectedRouteInLogin = ({ user }: { user: any }) => {
  const navigate = useNavigate();
  const loginAdmin = useAdminLoginDispatch();
  if (!user.isLogin) {
    cookieVerifyAdmin()
      .then((data) => {
        loginAdmin(data.data);
        navigate("/administrator/in/admin/dashboard");
      })
      .catch(() => {});
    return <Outlet />;
  } else {
    if (user.role === "student") navigate("/in/student/dashboard");
    if (user.role === "teacher") navigate("/in/teacher/dashboard");
    if (user.role === "admin") navigate("/administrator/in/admin/dashboard");
    if (user.role === "super-admin")
      navigate("/administrator/in/super-admin/create-admins");
  }
};

export { ProtectedRouteInLogin };
