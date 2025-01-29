import { Doughnut } from "./../../components/ui/charts";

const AttendanceStudent = () => {
  const attendence = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Se",
        data: [70, 30],
        backgroundColor: ["black", "white"],
        borderColor: ["black"],
      },
    ],
  };
  return (
    <>
      <h1 className="font-semibold text-2xl">Attendences</h1>
      <div className="p-2 flex flex-wrap w-full">
        <div className="w-1/2 p-4 flex flex-col items-center ">
          <span className="font-bold text-xl border-b border-black">
            Spftware
          </span>
          <Doughnut data={attendence} />
        </div>
        <div className="w-1/2 p-4 flex flex-col items-center ">
          <span className="font-bold text-xl border-b border-black">
            Spftware
          </span>
          <Doughnut data={attendence} />
        </div>
        <div className="w-1/2 p-4 flex flex-col items-center ">
          <span className="font-bold text-xl border-b border-black">
            Spftware
          </span>
          <Doughnut data={attendence} />
        </div>
      </div>
    </>
  );
};

export default AttendanceStudent;
