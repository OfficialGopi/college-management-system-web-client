import { somethingWentWrong } from "../constants/error.messages.constant";
import { api } from "../utils/config.axios";

export const getStudentsCountData = async () => {
  try {
    const res = await api.post("/others/getstudentscountdata");
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};
