import { somethingWentWrong } from "../constants/error.messages.constant";
import { api } from "../utils/config.axios";

export const getAllTeachers = async () => {
  try {
    const res = await api.post("/");
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};
