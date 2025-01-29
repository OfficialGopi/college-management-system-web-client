import { somethingWentWrong } from "../constants/error.messages.constant";
import { api } from "../utils/config.axios";

export const getAllRunningBatches = async () => {
  try {
    const res = await api.get("/batch");
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const createBatch = async (year: Date) => {
  try {
    const res = await api.post("/batch", {
      startingYear: new Date(year),
    });
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const deleteBatch = async (_id: string) => {
  try {
    const res = await api.delete(`/batch/${_id}`);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const increaseSemesterOrCloseBatchIfAllSemesterCompleted = async (
  _id: string
) => {
  try {
    const res = await api.patch(`/batch/${_id}`);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};
