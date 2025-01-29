import { Search } from "@mui/icons-material";
import UserTableAdmin from "../../components/ui/user.table.admin";
import { IconButton, MenuItem, Select } from "@mui/material";

const AllStudentsAdmin = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 p-2  ">
        <span className="text-2xl font-semibold">All Students</span>
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
            <div className="">
              <div className="flex  gap-2">
                <label
                  htmlFor="selectForDepartment"
                  className="flex items-center gap-2"
                >
                  <p>Filter by Department</p>
                  <Select value={"ALL"}>
                    <MenuItem value="ALL">All</MenuItem>
                    <MenuItem value="CSE">CSE</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                    <MenuItem value="LT">LT</MenuItem>
                  </Select>
                </label>
                <label
                  htmlFor="selectForSemester"
                  className="flex items-center gap-2"
                >
                  <p>Filter by Semester</p>
                  <Select value={"ALL"}>
                    <MenuItem value="ALL">All</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                  </Select>
                </label>
              </div>
            </div>
          </div>
        </div>
        <UserTableAdmin />
      </div>
    </>
  );
};

export default AllStudentsAdmin;
