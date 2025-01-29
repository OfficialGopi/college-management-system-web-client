import GradesComponentTeacher from "../../components/specific/grades.component.teacher";

const InGradesTeacher = () => {
  return (
    <>
      <main className="w-full flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-semibold">In Grades</h1>
        <p className="text-gray-500">
          View and manage student grades, attendance, and other relevant data.
        </p>
      </main>
      <div className="w-full  p-2">
        <table className="w-full">
          <thead className="border">
            <th className="sm:p-2 text-xs sm:text-lg">Student Roll</th>
            <th className="sm:p-2 text-xs sm:text-lg">Student Name</th>
            <th className="sm:p-2 text-xs sm:text-lg">Points Acheived</th>
            <th className="sm:p-2 text-xs sm:text-lg">Save Result</th>
          </thead>
          <tbody>
            <GradesComponentTeacher />
            <GradesComponentTeacher />
            <GradesComponentTeacher />
            <GradesComponentTeacher />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InGradesTeacher;
