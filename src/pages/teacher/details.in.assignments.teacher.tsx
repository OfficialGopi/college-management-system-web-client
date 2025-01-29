import { useParams } from "react-router-dom";
import AssignmentSubmittedStudentCard from "../../components/ui/assignment.submitted.card.student";

const DetailsInAssignmentsTeacher = () => {
  const { assignment } = useParams();
  return (
    <>
      <div className="w-full">
        <h1 className="p-4 text-xl md:text-3xl  flex flex-col font-semibold">
          <span>Operating System</span>
          <span className="text-base md:text-xl">
            Assignment : {assignment}
          </span>
        </h1>
        <div className="p-4 w-full">
          <ul className="flex flex-wrap gap-2">
            <AssignmentSubmittedStudentCard
              studentId="11200122034"
              studentName="Gopi"
            />
            <AssignmentSubmittedStudentCard
              studentId="11200122034"
              studentName="Gopi"
            />
            <AssignmentSubmittedStudentCard
              studentId="11200122034"
              studentName="Gopi"
            />
            <AssignmentSubmittedStudentCard
              studentId="11200122034"
              studentName="Gopi"
            />
            <AssignmentSubmittedStudentCard
              studentId="11200122034"
              studentName="Gopi"
            />
            <AssignmentSubmittedStudentCard
              studentId="11200122034"
              studentName="Gopi"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailsInAssignmentsTeacher;
