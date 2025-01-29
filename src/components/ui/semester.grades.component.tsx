import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SemesterGradesComponent = () => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <section className="flex h-full ">
        <div className="flex-1 p-2 lg:p-6">
          <h1 className="text-3xl font-bold mb-4">Results</h1>
          <ul className="flex flex-wrap justify-center items-center gap-2 mx-auto">
            {semesters.map((semester, index) => (
              <Link
                className="lg:w-[300px] sm:w-[40%] h-full w-full text-sm sm:text-lg gap-2  border text-black hover:text-white cursor-pointer hover:bg-black rounded-3xl flex sm:flex-col items-center p-4 transition-all  transform sm:hover:scale-90 hover:scale-[0.95] duration-300"
                to={String(semester)}
                key={index}
              >
                <Star fontSize="large" />
                <div>
                  <h2>Semester {semester}</h2>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SemesterGradesComponent;
