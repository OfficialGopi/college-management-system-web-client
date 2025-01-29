import { somethingWentWrong } from "../constants/error.messages.constant";
import { api } from "../utils/config.axios";

export const createAdmin = async (body: {
  adminId: string;
  gmail: string;
  name: string;
  password: string;
}) => {
  try {
    const res = await api.post("/admin/", body);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const adminLogin = async (body: {
  adminId: string;
  password: string;
}) => {
  try {
    const res = await api.post("/admin/login", body);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const updateAdmin = async (
  _id: string,
  body: {
    adminId: string;
    name: string;
    password: string;
    gmail: string;
    attendancesDepartment?: boolean;
    batchesDepartment?: boolean;
    subjectsDepartment?: boolean;
    usersDepartment?: boolean;
    resultsDepartment?: boolean;
    noticesDepartment?: boolean;
    routinesDepartment?: boolean;
  }
) => {
  try {
    const res = await api.put(`/admin/${_id}`, body);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const deleteAdmin = async (_id: string) => {
  try {
    const res = await api.delete(`/admin/${_id}`);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const adminLogout = async () => {
  try {
    const res = await api.patch("/admin");
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const getAllAdmins = async () => {
  try {
    const res = await api.post("/admin/getalladmins");
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const cookieVerifyAdmin = async () => {
  try {
    const res = await api.get("/admin/verifyaccesstoken");
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};
