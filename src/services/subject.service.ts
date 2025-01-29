import { somethingWentWrong } from "../constants/error.messages.constant";
import { api } from "../utils/config.axios";

export const postSubject = async (body: {
  subjectCode: string;
  subjectName: string;
  department: "CSE" | "IT" | "LT";
  semester: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  type: "Theory" | "Practical";
  credit: number;
}) => {
  try {
    const res = await api.post("/subject", body);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const deleteSubject = async (_id: string) => {
  try {
    const res = await api.delete(`/subject/${_id}`);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};
export const editSubject = async (
  _id: string,
  body: {
    subjectCode: string;
    subjectName: string;
    department: "CSE" | "IT" | "LT";
    semester: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    type: "Theory" | "Practical";
    credit: number;
  }
) => {
  try {
    const res = await api.put(`/subject/${_id}`, body);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const getAllSubjects = async () => {
  try {
    const res = await api.get("/subject");
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};
