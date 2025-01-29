import { Avatar } from "@mui/material";

const SubjectCard = ({
  Component = "li",
  to,
  subjectName,
  subjectCode,
  teacherName,
  teacherAvatar,
  credit,
  type,
}: {
  Component?: any;
  to?: string;
  subjectName: string;
  subjectCode: string;
  teacherName?: string;
  teacherAvatar?: string;
  credit: string;
  type: string;
}) => {
  return (
    Component && (
      <>
        <Component
          to={to}
          className="lg:w-[300px] sm:w-[40%] h-full w-full text-sm sm:text-lg gap-2  border text-black hover:text-white cursor-pointer hover:bg-black rounded-3xl flex sm:flex-col items-center p-4 transition-all  transform sm:hover:scale-90 hover:scale-[0.95] duration-300"
        >
          <span className="w-[100px] md:w-1/2 lg:w-[150px] aspect-square">
            <Avatar
              src={teacherAvatar}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-bold ">{subjectName}</h2>
            <p className="">Code: {subjectCode}</p>
            {teacherName && <p className="">Teacher: {teacherName}</p>}
            <p className="">Credit: {credit}</p>
            <p className="">Type: {type}</p>
          </div>
        </Component>
      </>
    )
  );
};

export default SubjectCard;
