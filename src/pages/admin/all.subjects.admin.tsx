import { MenuItem, Select } from "@mui/material";
import AllSubjectsComponentAdmin from "../../components/ui/all.subjects.admin.component";
import { useEffect, useState } from "react";
import { getAllSubjects } from "../../services/subject.service";
import { getAllTeachers } from "../../services/user.service";

const AllSubjectsAdmin = () => {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [editCount, setEditCount] = useState<number>(0);

  useEffect(() => {
    getAllSubjects().then((data) => {
      setSubjects(data.data);
    });
  }, [editCount]);
  useEffect(() => {
    getAllTeachers().then((data) => {
      setTeachers(data.data);
    });
  }, []);
  return (
    <>
      <div className="w-full p-2 flex flex-col gap-2 flex-wrap">
        <div className="flex items-center p-2 justify-between">
          <h1 className="text-3xl font-semibold">All Subjects</h1>
          <div className="">
            <div className="flex  gap-2">
              <label
                htmlFor="selectForDepartment"
                className="flex items-center gap-2"
              >
                <p>Filter by Department</p>
                <Select value={"ALL"}>
                  <MenuItem value="ALL">All</MenuItem>
                  <MenuItem value="CSE">CSE</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="LT">LT</MenuItem>
                </Select>
              </label>
              <label
                htmlFor="selectForSemester"
                className="flex items-center gap-2"
              >
                <p>Filter by Semester</p>
                <Select value={"ALL"}>
                  <MenuItem value="ALL">All</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                </Select>
              </label>
            </div>
          </div>
        </div>
        <div className=" flex p-2 flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <AllSubjectsComponentAdmin
              subject={subject}
              teachers={teachers}
              key={index}
              increaseEditCount={() => {
                setEditCount(editCount + 1);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllSubjectsAdmin;
