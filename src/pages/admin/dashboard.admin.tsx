import { useEffect, useState } from "react";
import { GraduationIcon } from "../../assets/icons/GraduationIcon";
import { months } from "../../constants/utils.constants";
import { Doughnut, Pie, Line, Bar } from "./../../components/ui/charts";
import { getStudentsCountData } from "../../services/others.service";
const DashboardAdmin = () => {
  const [totalStudents, setTotalStudents] = useState<number>(0);
  const [maleStudents, setMaleStudents] = useState<number>(0);
  const [femaleStudents, setFemaleStudents] = useState<number>(0);
  const [othersStudents, setOthersStudents] = useState<number>(0);
  useEffect(() => {
    getStudentsCountData()
      .then((data) => {
        setTotalStudents(data.data.totalStudents);
        setMaleStudents(data.data.male);
        setFemaleStudents(data.data.female);
        setOthersStudents(data.data.others);
      })
      .catch();
  }, []);
  const students = {
    labels: ["Male", "Female", "Others"],
    datasets: [
      {
        data: [maleStudents, femaleStudents, othersStudents],
        backgroundColor: ["#82ca9d", "#ff6347", "blue"],
        borderColor: ["black"],
      },
    ],
  };

  const SubjectsPerDept = {
    labels: ["CSE", "IT", "LT"],
    datasets: [
      {
        label: "Subjects",
        data: [10, 12, 11],
        backgroundColor: ["red", "green", "blue"],
        borderColor: ["black"],
      },
    ],
  };
  const studentsAttendence = {
    labels: months,
    datasets: [
      {
        label: "Attendence",
        data: [10, 12, 23, 41, 180, 12, 99, 20, 122, 21, 21, 150],
        backgroundColor: ["black"],
      },
      {
        label: "Total Students to be present",
        data: [200, 200, 180, 240, 190, 100, 101, 100, 211, 123, 42, 220],
        backgroundColor: ["red"],
      },
    ],
  };

  const ClassesHeld = {
    labels: months,
    datasets: [
      {
        label: "Classes Held",
        data: [10, 21, 23, 23, 42, 23, 11, 23, 53, 53, 53, 12],
        backgroundColor: "red",
      },
      {
        label: "Classes to be Held",
        data: [15, 27, 29, 29, 49, 26, 17, 23, 55, 55, 58, 19],
        backgroundColor: "black",
      },
    ],
  };
  return (
    <>
      <div className="w-full h-full p-4">
        <div className="w-full flex gap-2 p-2 flex-row flex-wrap">
          <CountUser countName="Students" count={totalStudents} />
          <CountUser countName="Teachers" count={10} />
        </div>
        <div className=" p-2  gap-2 flex flex-col">
          <div className="flex w-full gap-2 flex-col sm:flex-row">
            <div className="sm:w-1/2 border flex flex-col justify-center items-center p-2 rounded-2xl    ">
              <h1 className="p-2 font-semibold text-lg">Students by Gender</h1>
              <Doughnut height={"100%"} data={students} />
            </div>
            <div className="sm:w-1/2 border  flex flex-col justify-center items-center p-2 rounded-2xl    ">
              <h1 className="p-2 font-semibold text-lg">
                Subjects Per Department
              </h1>
              <Pie width={"100%"} data={SubjectsPerDept} />
            </div>
          </div>
          <div className="w-full gap-2 flex">
            <div className=" p-2 w-full border flex flex-col justify-center items-center rounded-2xl    ">
              <h1 className="p-2 font-semibold text-2xl">
                Students attendence
              </h1>
              <Line height={"100%"} data={studentsAttendence} />
            </div>
          </div>
          <div className="  w-full  flex">
            <div className=" border flex flex-col justify-center items-center p-2 rounded-2xl w-full   ">
              <h1 className="p-2 font-semibold text-2xl">Classes</h1>
              <Bar width={"100%"} data={ClassesHeld} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CountUser = ({
  countName,
  count,
}: {
  countName: string;
  count: number;
}) => {
  return (
    <div className=" flex  w-64 gap-2 p-3 rounded-xl border  hover:scale-95 transition-transform duration-300  ">
      <div className=" rounded-xl px-2 items-center flex">
        <GraduationIcon len={48} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className=" font-bold text-slate-600 text-lg ">
          Total {countName}
        </span>
        <span className="font-bold text-3xl">{count}</span>
      </div>
    </div>
  );
};

export default DashboardAdmin;
