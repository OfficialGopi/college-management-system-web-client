import { Outlet, useNavigate } from "react-router-dom";
import { useAdminLoginDispatch } from "../hooks/dispatch";

const ProtectedRoute = ({
  user,
  cookieVerifyFunc,
  role,
}: {
  user: any;
  cookieVerifyFunc: any;
  role: any;
}) => {
  const loginAdmin = useAdminLoginDispatch();
  const loginUser = useAdminLoginDispatch();
  const navigate = useNavigate();
  if (user.isLogin) {
    return <Outlet />;
  } else {
    if (cookieVerifyFunc) {
      cookieVerifyFunc()
        .then((data: any) => {
          console.log(data, "1");
          if (data.data.role == "student" || data.data.role == "teacher") {
            loginUser(data.data);
            if (role === data.data.role) {
              return <Outlet />;
            } else {
              navigate(`/in/${data.data.role}`);
            }
          } else {
            loginAdmin(data.data);
            if (role == "admin") {
              return <Outlet />;
            } else {
              navigate("/administrator/in/admin/dashboard");
            }
          }
        })
        .catch(() => {
          console.log("2");
          navigate("/login");
        });
    } else {
      console.log("3");
      navigate("/login");
    }
  }
};

export default ProtectedRoute;
