import { Link } from "react-router-dom";
import SubjectCard from "../../components/ui/subject.card";

const AttendanceTeacher = () => {
  return (
    <>
      <div className="w-full">
        <SubjectCard
          subjectCode="asads"
          subjectName="asdas"
          credit="1"
          type="practical"
          teacherAvatar="asdasd"
          Component={Link}
          to="asdas"
          key={"Ssa"}
          teacherName="asdasd"
        />
      </div>
    </>
  );
};

export default AttendanceTeacher;
