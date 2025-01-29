import { somethingWentWrong } from "../constants/error.messages.constant";
import { api } from "../utils/config.axios";

const loginSuperAdmin = async (body: {
  superAdminId: string;
  password: string;
}) => {
  try {
    const res = await api.post("/super-admin/login", body);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export { loginSuperAdmin };
