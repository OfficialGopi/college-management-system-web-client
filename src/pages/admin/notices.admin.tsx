import { useFileHandler } from "6pp";
import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import PdfViewDialog from "../../components/dialog/pdf-view-dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

const NoticesAdmin = () => {
  const files = useFileHandler("multiple");
  const [isViewPdf, setViewPdf] = useState<boolean>(false);
  const [currentPdf, setCurrentPdf] = useState<string>("");
  return (
    <>
      <div className="w-full">
        <span className="font-semibold text-3xl">Create Notices</span>
        <div className="p-2 w-full">
          <form className="w-full flex flex-col items-center border rounded-lg p-2">
            <div className="p-2 w-full flex gap-2">
              <label htmlFor="title" className=" text-xl">
                Title :
              </label>
              <input
                type="text"
                placeholder="Enter title of the notice"
                className="border-b flex-1"
              />
            </div>
            <div className="p-2 w-full flex gap-2">
              <label htmlFor="details" className=" text-xl">
                Details :
              </label>
              <textarea
                name="details"
                placeholder="Enter details of the notice"
                className="border p-2 flex-1 rounded-md"
                rows={4}
              />
            </div>
            <div className="p-2 w-full flex gap-2 items-center">
              <label htmlFor="file" className="text-xl">
                Attachments :{" "}
              </label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={files.changeHandler}
                className="hidden"
              />
              <IconButton
                onClick={() => {
                  files.clear();
                  const inputBtn = document.getElementById("file");

                  inputBtn?.click();
                }}
              >
                <Add />
              </IconButton>

              <div className="flex font-semibold gap-2 p-2 items-center">
                {files.preview.map((file, index) => (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setViewPdf(true);
                      setCurrentPdf(file);
                    }}
                    className="border p-2 rounded-lg border-black bg-black text-white hover:scale-90 transition-transform duration-300"
                  >
                    View {index + 1}
                  </button>
                ))}
              </div>
              <PdfViewDialog
                isOpen={isViewPdf}
                onClose={() => {
                  setViewPdf(false);
                  setCurrentPdf("");
                }}
                file={currentPdf}
              />
            </div>
            <button
              className="p-2 text-2xl border rounded-xl hover:bg-black hover:text-white transition-all duration-300 hover:scale-90"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Notify
            </button>
          </form>
          <div className="mt-2 flex w-full justify-end ">
            <Link
              to={"previousnotices"}
              className="p-2 hover:bg-black hover:text-white rounded-xl  transition-all duration-300 hover:scale-90 border"
            >
              View Previous Notices
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticesAdmin;
