import { IconButton } from "@mui/material";
import UserTableAdmin from "../../components/ui/user.table.admin";
import { Search } from "@mui/icons-material";

const AllTeachersAdmin = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 p-2  ">
        <span className="text-2xl font-semibold">All Teachers</span>
        <div className="w-full flex justify-between items-center gap-2">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-full flex border rounded-lg items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded-lg outline-none"
              />
              <IconButton>
                <Search />
              </IconButton>
            </div>
          </div>
        </div>
        <UserTableAdmin />
      </div>
    </>
  );
};

export default AllTeachersAdmin;
