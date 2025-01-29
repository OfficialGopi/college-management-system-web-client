import { useDispatch } from "react-redux";
import {
  adminLogin,
  logout,
  superAdminLogin,
  userLogin,
} from "../toolkit/reducers/user/details";
import { setAdmins } from "../toolkit/reducers/superAdmin/adminsList";

const dispatchHook = (reducer: (payload?: any) => any) => () => {
  const dispatch = useDispatch();
  return (payload: any = null) => {
    if (payload) dispatch(reducer(payload));
    else dispatch(reducer());
  };
};

export const useUserLoginDispatch = dispatchHook(userLogin);
export const useAdminLoginDispatch = dispatchHook(adminLogin);
export const useSuperAdminLoginDispatch = dispatchHook(superAdminLogin);
export const useLogoutDispatch = dispatchHook(logout);

export const useSetAdminsDispatch = dispatchHook(setAdmins);
