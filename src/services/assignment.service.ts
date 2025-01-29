import { somethingWentWrong } from "../constants/error.messages.constant";
import { api } from "../utils/config.axios";

export const createAssignment = async (body: {
  batch: string;
  subject: string;
  title: string;
  description: string;
  multiple: boolean;
  dueDate: Date;
}) => {
  try {
    const res = await api.post("/assignment", body);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const getAllAssignmentsBySubjectAndBatch = async (body: {
  batch: string;
  subject: string;
}) => {
  try {
    const res = await api.post(
      "/assignment/getallassignmentsbysubjectandbatch",
      body
    );
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const getAllSubmittedAssignmentsByStudent = async (
  assignmentId: string
) => {
  try {
    const res = await api.post(
      `/assignment/getallsubmittedassignmentsbystudent/${assignmentId}`
    );
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};

export const submitAssignmentByStudent = async (body: {
  assignment: string;
  student: string;
}) => {
  try {
    const res = await api.post(`/assignment/submitassignment`);
    return res.data;
  } catch (error) {
    throw somethingWentWrong;
  }
};
