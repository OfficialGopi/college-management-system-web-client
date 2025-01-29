import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

const InAssignmentsTeacher = () => {
  const { subjectCode } = useParams<{
    subjectCode: string;
  }>();

  return (
    <>
      <main className="w-full p-2 flex flex-col gap-2">
        <h1 className="text-3xl my-2 font-bold text-gray-900">
          Give Assignments {subjectCode}
        </h1>
        <form className="flex flex-col items-center p-2 border rounded-lg">
          <div className="flex w-full flex-col gap-1 justify-center p-2">
            <label className="font-medium text-xl text-gray-700">Title</label>
            <input
              className="w-full p-2 border rounded-lg focus:outline-none"
              type="text"
              placeholder="Enter Assignment Title"
            />
          </div>
          <div className="flex w-full flex-col gap-1 justify-center p-2">
            <label className="font-medium text-xl text-gray-700">
              Description
            </label>
            <textarea
              rows={5}
              className="w-full p-2 border rounded-lg focus:outline-none"
              placeholder="Enter Assignment Description"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="border rounded-lg p-3 hover:bg-black hover:text-white hover:transition-all duration-300 hover:scale-90"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-end w-full">
          <Link
            to={"previousassignments"}
            className="border rounded-lg p-2 hover:bg-black transition-all duration-300  hover:text-white border-black"
          >
            <span>View Previous Assignments</span>
            <ArrowForward />
          </Link>
        </div>
      </main>
    </>
  );
};

export default InAssignmentsTeacher;
