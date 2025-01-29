import { useFileHandler } from "6pp";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PdfViewDialog from "../../components/dialog/pdf-view-dialog";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const InMaterialsTeacher = () => {
  const { subjectCode } = useParams<{
    subjectCode: string;
  }>();
  const [isOpen, setIsOpen] = useState(false);
  const files = useFileHandler("multiple");
  console.log(files);
  return (
    <>
      <div className="w-full p-2">
        <h1 className="p-4 text-xl md:text-3xl  flex flex-col font-semibold">
          <span>Operating System</span>
          <span className="text-base md:text-xl">Code : {subjectCode}</span>
        </h1>
        <form className="p-2 flex flex-col gap-2 rounded-lg  border">
          <div className="flex flex-col gap-2 md:items-center md:flex-row md:space-x-4 border rounded-xl p-4">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              className="w-full rounded-lg p-2 focus:outline-none border "
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="flex flex-col gap-2 md:items-center md:flex-row md:space-x-4 border rounded-xl p-4">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full rounded-lg p-2 focus:outline-none border row-auto"
              placeholder="Enter Description"
              rows={3}
            />
          </div>
          <div className="flex flex-col gap-2 md:items-center md:flex-row md:space-x-4 border rounded-xl p-4">
            <label className="text-sm font-medium text-gray-700">
              File Upload
            </label>
            <input
              className="w-full rounded-lg p-2 focus:outline-none border row-auto"
              type="file"
              multiple
              onChange={(e) => {
                files.clear();
                files.changeHandler(e);
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            {files.file.length > 0 &&
              files.preview.map((file, index) => {
                return (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(true);
                      }}
                      className="hover:cursor-pointer border p-2 hover:bg-black hover:text-white rounded-lg transition-colors duration-300 "
                      key={index}
                    >
                      File No {index + 1}
                    </button>
                    <PdfViewDialog
                      file={file}
                      isOpen={isOpen}
                      onClose={() => setIsOpen(false)}
                    />
                  </>
                );
              })}
          </div>
          <div className="w-full flex justify-around">
            <button
              className="hover:bg-black hover:text-white border border-black p-2 rounded-xl transition-colors duration-300"
              type="reset"
              onClick={(e) => {
                e.preventDefault();
                files.clear();
              }}
            >
              Reset
            </button>
            <button
              className="hover:bg-white bg-black hover:text-black text-white border border-black p-2 rounded-xl transition-colors duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-wrap mt-2 justify-end gap-x-4 gap-y-8">
          <Link
            to={"previousmaterials"}
            className="p-4 border rounded-xl flex items-center border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <span>Previous Materials</span>
            <ArrowRightAlt fontSize="large" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default InMaterialsTeacher;
