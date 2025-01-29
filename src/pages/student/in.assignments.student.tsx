import { useParams } from "react-router-dom";
import AssignmentSubmitComponentStudent from "../../components/ui/assignment.submit.component.student";

const InAssignmentsStudent = () => {
  const { subjectCode } = useParams<{
    subjectCode: string;
  }>();
  return (
    <>
      <main className="w-full">
        <h1 className="p-4 text-xl md:text-3xl  flex flex-col font-semibold">
          <span>Operating System</span>
          <span className="text-base md:text-xl">Code : {subjectCode}</span>
        </h1>
        <section className="p-2">
          <AssignmentSubmitComponentStudent
            _id="213"
            batch="2024"
            createdAt={new Date("2004-30-30")}
            updatedAt={new Date("2004-30-30")}
            dueDate={new Date("2024-12-30")}
            description="asdasd"
            title="ass"
            isClosed={false}
            subject={"asda"}
            multiple
          />
        </section>
      </main>
    </>
  );
};

export default InAssignmentsStudent;
