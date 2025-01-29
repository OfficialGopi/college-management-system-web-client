import { useFileHandler } from "6pp";
import { Add, Assignment, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import PdfViewDialog from "../dialog/pdf-view-dialog";
const AssignmentSubmitComponentStudent = ({
  _id,
  batch,
  subject,
  title,
  description,
  dueDate,
  multiple,
  isClosed,
  createdAt,
  updatedAt,
}: {
  _id: string;
  batch: string;
  subject: string;
  title: string;
  description: string;
  dueDate?: Date;
  multiple: boolean;
  isClosed: boolean;
  createdAt: Date;
  updatedAt: Date;
}) => {
  const files = useFileHandler("multiple", 5);
  const [url, setUrl] = useState("");
  const [currentFileInView, setCurrentFileInView] = useState<string>("");
  const [isPdfOpen, setPdfOpen] = useState<boolean>(false);
  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/dko5qxqqi/image/upload/v1733731060/CMS/assignments/c5elhhzhsfvcac2fzopj.pdf.pdf"
    )
      .then((data) => {
        console.log(data);
        setUrl(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flex gap-2 items-center border hover:bg-black hover:text-white transition-colors duration-300 p-2 rounded-lg">
        <Assignment fontSize="large" />
        <div className="flex flex-col flex-1">
          <h3 className="text-lg md:text-xl font-semibold">Title : {title}</h3>
          <span className="text-sm md:text-base">
            Description : {description}
          </span>
          {dueDate && (
            <span className="text-xs">
              Due Date : {dueDate.toLocaleDateString()}
            </span>
          )}
        </div>
        <div className="w-40 gap-2 flex flex-wrap">
          {files.preview.map((pdf, index) => (
            <div
              key={index}
              className="border flex items-center justify-around rounded-lg p-1  hover:scale-90 transition-transform duration-300"
            >
              <button
                onClick={(e) => {
                  setCurrentFileInView(pdf);
                  setPdfOpen(true);
                }}
              >
                View {index + 1}
              </button>
              <IconButton
                sx={{
                  color: "inherit",
                }}
                onClick={() => {
                  console.log(files.file);

                  files.file.splice(index, 1);
                  console.log(files.file);
                  let temp = files.file;
                  files.clear();
                  files.changeHandler({
                    target: {
                      files: temp,
                    },
                  });
                }}
              >
                <Close />
              </IconButton>
            </div>
          ))}
        </div>
        {!isClosed && (
          <div className="flex flex-col">
            <input
              type="file"
              name="assignmentFiles"
              id="assignmentFiles"
              className="hidden"
              multiple
              onChange={(e) => {
                console.log(e);
                files.changeHandler(e);
              }}
            />
            <IconButton
              sx={{
                color: "inherit",
              }}
              onClick={() => {
                document.getElementById("assignmentFiles")?.click();
              }}
            >
              <Add />
            </IconButton>
          </div>
        )}
      </div>
      <PdfViewDialog
        file={currentFileInView}
        isOpen={isPdfOpen}
        onClose={() => {
          setPdfOpen(false);
        }}
      />
    </>
  );
};

export default AssignmentSubmitComponentStudent;
