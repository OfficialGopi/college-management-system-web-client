import { Add, ArrowForward } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { postSubject } from "../../services/subject.service";

const SubjectsAdmin = () => {
  const [subjectFormData, setSubjectFormData] = useState<{
    subjectName: string;
    subjectCode: string;
    department: "CSE" | "IT" | "LT";
    credit: number;
    semester: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    type: "Theory" | "Practical";
  }>({
    subjectName: "",
    department: "CSE",
    semester: 1,
    subjectCode: "",
    credit: 0,
    type: "Theory",
  });
  return (
    <>
      <div className="w-full p-3">
        <h2 className="text-2xl font-semibold p-2">Create Subjects</h2>
        <div className="flex justify-between w-full md:items-center flex-col">
          <form className="flex flex-col border rounded-lg w-full p-2 md:items-center">
            <div className="w-full">
              <div className="p-3 flex gap-3 md:text-lg text-sm md:items-center">
                <label className="font-semibold" htmlFor="subjectName">
                  Subject Name :
                </label>
                <input
                  type="text"
                  name="subjectName"
                  id="subjectName"
                  placeholder="Enter name of the subject"
                  className="outline-none border-b border-black flex-1"
                  value={subjectFormData.subjectName}
                  onChange={(e) => {
                    setSubjectFormData({
                      ...subjectFormData,
                      subjectName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="p-3 flex gap-3 md:text-lg text-sm md:items-center">
                <label className="font-semibold" htmlFor="subjectCode">
                  Subject Code :
                </label>
                <input
                  type="text"
                  name="subjectCode"
                  id="subjectCode"
                  placeholder="Enter code of the subject"
                  className="outline-none border-b border-black flex-1"
                  value={subjectFormData.subjectCode}
                  onChange={(e) => {
                    setSubjectFormData({
                      ...subjectFormData,
                      subjectCode: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="p-3 flex gap-3 md:text-lg text-sm md:items-center">
                <label className="font-semibold" htmlFor="credit">
                  Subject Credit Point :
                </label>
                <input
                  type="number"
                  name="credit"
                  id="credit"
                  placeholder="Enter credit point of the subject"
                  className="outline-none border-b border-black flex-1"
                  max={5}
                  min={0}
                  value={subjectFormData.credit}
                  onChange={(e) => {
                    setSubjectFormData({
                      ...subjectFormData,
                      credit: Number(e.target.value),
                    });
                  }}
                />
              </div>
              <div className="flex md:items-center md:flex-row flex-col flex-wrap">
                <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
                  <label className="font-semibold" htmlFor="credit">
                    Department :
                  </label>
                  <Select
                    value={subjectFormData.department}
                    onChange={(e) => {
                      setSubjectFormData({
                        ...subjectFormData,
                        department: e.target.value as "CSE" | "IT" | "LT",
                      });
                    }}
                  >
                    <MenuItem value={"CSE"}>CSE</MenuItem>
                    <MenuItem value={"IT"}>IT</MenuItem>
                    <MenuItem value={"LT"}>LT</MenuItem>
                  </Select>
                </div>
                <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
                  <label className="font-semibold" htmlFor="semester">
                    Semester :
                  </label>
                  <Select
                    value={subjectFormData.semester}
                    onChange={(e) => {
                      setSubjectFormData({
                        ...subjectFormData,
                        semester: e.target.value as
                          | 1
                          | 2
                          | 3
                          | 4
                          | 5
                          | 6
                          | 7
                          | 8,
                      });
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                  </Select>
                </div>
                <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
                  <label className="font-semibold" htmlFor="type">
                    Type :
                  </label>
                  <Select
                    value={subjectFormData.type}
                    onChange={(e) => {
                      setSubjectFormData({
                        ...subjectFormData,
                        type: e.target.value as "Theory" | "Practical",
                      });
                    }}
                  >
                    <MenuItem value={"Theory"}>Theory</MenuItem>
                    <MenuItem value={"Practical"}>Practical</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toast.promise(postSubject(subjectFormData), {
                    success: "Subject Created Successfully",
                    loading: "Creating...",
                    error: "Something went wrong",
                  });
                }}
                className="border rounded-lg p-2 flex items-center gap-2 hover:bg-black hover:text-white active:scale-90 transition-all duration-300"
              >
                <span>Create</span>
                <Add />
              </button>
            </div>
          </form>
          <div className="flex w-full justify-end p-2">
            <Link
              className="p-2 border rounded-lg bg-black text-white hover:scale-90 transition-transform duration-300"
              to={"allsubjects"}
            >
              <span className="md:text-lg text-sm p-2">View All Subjects</span>
              <ArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectsAdmin;
