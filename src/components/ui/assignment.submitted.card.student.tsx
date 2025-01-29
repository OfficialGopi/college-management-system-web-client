import { Avatar } from "@mui/material";
import PdfViewDialog from "../dialog/pdf-view-dialog";
import { useState } from "react";

const AssignmentSubmittedStudentCard = ({
  Component = "li",
  studentId,
  studentName,
  studentAvatar,
}: {
  Component?: any;
  studentId: string;
  studentName: string;
  studentAvatar?: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    Component && (
      <>
        <Component className="bg-green-50 lg:w-[300px] sm:w-[40%] h-full w-full text-sm sm:text-lg gap-2  border cursor-pointer  rounded-3xl flex sm:flex-col items-center p-4 transition-all  transform sm:hover:scale-90 hover:scale-[0.95] duration-300">
          <span className="w-[100px] md:w-1/2 lg:w-[150px] aspect-square">
            <Avatar
              src={studentAvatar}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </span>
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-xl font-bold ">Name: {studentName}</h2>
            <p className="">Roll: {studentId}</p>
            {studentName && <p className=""></p>}
            <button
              className=" border hover:bg-slate-950 hover:border-white hover:text-white hover:scale-90 transition-all duration-300 rounded-lg p-2"
              onClick={() => setIsOpen(true)}
            >
              View Submitted File
            </button>
            <input
              className="p-2 border rounded-lg outline-none"
              placeholder="Enter Score"
              type="number"
              name="score"
              id="score"
              max={100}
              min={0}
            />
            <button className="border p-2 rounded-lg hover:bg-black hover:text-white active:scale-90 transition-all duration-500">
              Save
            </button>
          </div>
        </Component>
        <PdfViewDialog
          file="https://docs.google.com/gview?embedded=true&url=https://res.cloudinary.com/dko5qxqqi/image/upload/v1733731060/CMS/assignments/c5elhhzhsfvcac2fzopj.pdf.pdf"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    )
  );
};

export default AssignmentSubmittedStudentCard;
