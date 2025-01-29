import { Delete, Edit } from "@mui/icons-material";
import { Avatar, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import DialogComponent from "../dialog/dialog.component";
import toast from "react-hot-toast";
import { deleteSubject, editSubject } from "../../services/subject.service";

const AllSubjectsComponentAdmin = ({
  subject,
  teachers,
  increaseEditCount,
}: {
  subject: any;
  teachers: any[];
  increaseEditCount: () => void;
}) => {
  // const [teacherInSubject,setTeacherInSubject]=
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [subjectInDialog, setSubjectInDialog] = useState<{
    subjectCode: string;
    subjectName: string;
    department: "CSE" | "IT" | "LT";
    semester: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    type: "Theory" | "Practical";
    credit: number;
  }>({
    subjectCode: subject.subjectCode,
    subjectName: subject.subjectName,
    department: subject.department,
    credit: subject.credit,
    semester: subject.semester,
    type: subject.type,
  });
  return (
    <div className="lg:w-[300px] sm:w-[40%]   h-full w-full text-sm sm:text-lg gap-2  border text-black hover:text-white cursor-pointer hover:bg-black rounded-3xl flex flex-col items-center p-4 transition-all  transform sm:hover:scale-90 hover:scale-[0.95] duration-300">
      <DialogComponent
        handleClose={() => {
          setOpenDeleteDialog(false);
        }}
        handleTodo={() => {
          toast
            .promise(deleteSubject(subject._id), {
              error: "Something went wrong",
              loading: "Deleting...",
              success: "Deleted successfully",
            })
            .finally(() => {
              increaseEditCount();
              setOpenDeleteDialog(false);
            });
        }}
        title="Delete Subject"
        todo="Delete"
        dialogOpen={openDeleteDialog}
        content="Are you sure you want to delete the subject?"
      />
      <DialogComponent
        handleClose={() => {
          setOpenEdit(false);
        }}
        handleTodo={() => {
          toast
            .promise(editSubject(subject._id, subjectInDialog), {
              error: "Something went wrong",
              loading: "Saving...",
              success: "Edited successfully",
            })
            .finally(() => {
              increaseEditCount();
              setOpenEdit(false);
            });
        }}
        title="Edit Subject"
        todo="Edit"
        dialogOpen={openEdit}
      >
        <>
          <form className="border  p-2 rounded-sm text-base flex flex-col gap-2">
            <div className="flex items-center gap-2 ">
              <label htmlFor="subejctCode" className="font-semibold">
                Subject Code :{""}
              </label>
              <input
                type="text"
                name="subjectCode"
                id="subjectCode"
                className="border p-1 rounded-md flex-1"
                onChange={(e) => {
                  setSubjectInDialog({
                    ...subjectInDialog,
                    subjectCode: e.target.value,
                  });
                }}
                value={subjectInDialog.subjectCode}
              />
            </div>
            <div className="flex items-center gap-2 ">
              <label htmlFor="subjectName" className="font-semibold">
                Name :{""}
              </label>
              <input
                type="text"
                name="subjectName"
                id="subjectName"
                className="border p-1 rounded-md flex-1"
                onChange={(e) => {
                  setSubjectInDialog({
                    ...subjectInDialog,
                    subjectName: e.target.value,
                  });
                }}
                value={subjectInDialog.subjectName}
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
                value={subjectInDialog.credit}
                onChange={(e) => {
                  setSubjectInDialog({
                    ...subjectInDialog,
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
                  value={subjectInDialog.department}
                  onChange={(e) => {
                    setSubjectInDialog({
                      ...subjectInDialog,
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
                  value={subjectInDialog.semester}
                  onChange={(e) => {
                    setSubjectInDialog({
                      ...subjectInDialog,
                      semester: e.target.value as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
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
                  value={subjectInDialog.type}
                  onChange={(e) => {
                    setSubjectInDialog({
                      ...subjectInDialog,
                      type: e.target.value as "Theory" | "Practical",
                    });
                  }}
                >
                  <MenuItem value={"Theory"}>Theory</MenuItem>
                  <MenuItem value={"Practical"}>Practical</MenuItem>
                </Select>
              </div>
            </div>
          </form>
        </>
      </DialogComponent>

      <div className="flex sm:flex-col gap-2 items-center">
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <div>
          <h2 className="text-xl font-semibold">{subject.subjectName}</h2>
          <p>
            <b>Subject Code:</b> {subject.subjectCode}
          </p>

          <p>
            <b>Department:</b> {subject.department}
          </p>
          <p>
            <b>Semester:</b> {subject.semester}
          </p>
          <p>
            <b>Credit:</b> {subject.credit}
          </p>
          <p>
            {subject.teacher && (
              <>
                <b>Teacher:</b> {subject.teacher}
              </>
            )}
          </p>
        </div>
      </div>
      <div className="flex sm:flex-col gap-2">
        <div className="flex gap-2 items-center hover:text-white hover:bg-black">
          <span className="font-semibold text-lg ">Select Teacher :</span>
          <Select
            value={1}
            sx={{
              color: "inherit",
            }}
          >
            {teachers.map((teacher, index) => (
              <MenuItem value={teacher._id} key={index}>
                {teacher.name}({teacher.userId})
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="p-2 border rounded-lg hover:bg-white hover:text-black transition-colors"
          onClick={() => {
            setOpenEdit(true);
          }}
        >
          <Edit />
        </button>
        <button
          className="p-2 border rounded-lg hover:bg-white hover:text-black transition-colors"
          onClick={() => setOpenDeleteDialog(true)}
        >
          <Delete />
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-white hover:text-black transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default AllSubjectsComponentAdmin;
