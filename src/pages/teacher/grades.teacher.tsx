import { useEffect, useState } from "react";
import SubjectCard from "../../components/ui/subject.card";
import { Link } from "react-router-dom";
const GradesTeacher = () => {
  const [subjects, setSubjects] = useState<
    Array<{
      subjectName: string;
      subjectCode: string;
      teacherName?: string;
      teacherAvatar?: string;
      credit: string;
      type: string;
    }>
  >([]);
  useEffect(() => {
    setSubjects([
      {
        subjectName: "Maths",
        subjectCode: "MATH-101",
        teacherName: "Mr. John",
        teacherAvatar: "/images/teacher-1.jpg",
        credit: "3",
        type: "Theory",
      },
      {
        subjectName: "Maths",
        subjectCode: "MATH-101",
        teacherName: "Mr. John",
        teacherAvatar: "/images/teacher-1.jpg",
        credit: "3",
        type: "Theory",
      },
      {
        subjectName: "Maths",
        subjectCode: "MATH-101",
        teacherName: "Mr. John",
        teacherAvatar: "/images/teacher-1.jpg",
        credit: "3",
        type: "Theory",
      },
      {
        subjectName: "Maths",
        subjectCode: "MATH-101",
        teacherName: "Mr. John",
        teacherAvatar: "/images/teacher-1.jpg",
        credit: "3",
        type: "Theory",
      },
      {
        subjectName: "Maths",
        subjectCode: "MATH-101",
        teacherName: "Mr. John",
        teacherAvatar: "/images/teacher-1.jpg",
        credit: "3",
        type: "Theory",
      },
    ]);
  }, []);
  return (
    <section className="flex h-full ">
      <div className="flex-1 p-2 lg:p-6">
        <h1 className="text-3xl font-bold mb-4">Grades</h1>
        <ul className="flex flex-wrap justify-center items-center gap-2 mx-auto">
          {subjects.map((subject, index) => (
            <SubjectCard
              Component={Link}
              to={`${subject.subjectCode}`}
              key={index}
              subjectName={subject.subjectName}
              subjectCode={subject.subjectCode}
              teacherName={subject.teacherName}
              teacherAvatar={subject.teacherAvatar}
              credit={subject.credit}
              type={subject.type}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GradesTeacher;
