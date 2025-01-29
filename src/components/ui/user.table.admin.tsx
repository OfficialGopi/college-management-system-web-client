import { Delete, Edit } from "@mui/icons-material";

const UserTableAdmin = () => {
  return (
    <>
      <div className="">
        <table className="table-fixed border-collapse border w-full">
          <thead className="border">
            <tr>
              <th className="font-semibold">Roll</th>
              <th className="font-semibold">Name</th>
              <th className="font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="border">
            <tr className="border">
              <td className="border text-center p-1">1</td>
              <td className="border text-center p-1">John Doe</td>
              <td className="border flex gap-2 items-center justify-center  p-1">
                <button className="p-2 transition-all duration-300  rounded-[100%] active:scale-90 hover:bg-black hover:text-white">
                  <Edit />
                </button>
                <button className="p-2 transition-all duration-300  rounded-[100%] active:scale-90 hover:bg-black hover:text-white">
                  <Delete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTableAdmin;
