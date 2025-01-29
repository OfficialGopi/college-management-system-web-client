import { useParams } from "react-router-dom";
import AccordionAssignmentComponentTeacher from "../../components/specific/assignment.accordion.component.teacher";

const PreviousAssignmentsTeacher = () => {
  const { subjectCode } = useParams();
  return (
    <>
      <main className="w-full p-2">
        <h2 className="text-2xl font-semibold p-2">
          Assignments of {subjectCode}
        </h2>
        <div className="w-full flex flex-col gap-1 p-1 ">
          <AccordionAssignmentComponentTeacher />
          <AccordionAssignmentComponentTeacher />
          <AccordionAssignmentComponentTeacher />
          <AccordionAssignmentComponentTeacher />
        </div>
      </main>
    </>
  );
};

export default PreviousAssignmentsTeacher;
