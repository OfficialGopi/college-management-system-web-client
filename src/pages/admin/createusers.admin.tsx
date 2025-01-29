import { ArrowForward } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateUsersAdmin = () => {
  const [role, setRole] = useState<"student" | "teacher">("student");
  return (
    <>
      <div className="w-full p-4">
        <h1 className="text-2xl font-semibold py-2">Create Users</h1>
        <form className="border p-3 rounded-md shadow-inner w-full">
          <div className="flex items-center justify-center gap-6">
            <button
              className={`p-2 border rounded-md transition-colors duration-500  ${
                role == "student" ? "bg-black text-white" : "hover:bg-slate-200"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setRole("student");
              }}
            >
              Student
            </button>
            <button
              className={`p-2 border rounded-md transition-colors duration-500  ${
                role == "teacher"
                  ? "bg-black  text-white"
                  : "hover:bg-slate-200"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setRole("teacher");
              }}
            >
              Teacher
            </button>
          </div>
          <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
            <label className="font-semibold" htmlFor="id">
              User Id :
            </label>
            <input
              type="number"
              name="id"
              id="id"
              placeholder="Enter id of the user"
              className="outline-none border-b border-black flex-1"
            />
          </div>
          <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
            <label className="font-semibold" htmlFor="name">
              Name :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name of the user"
              className="outline-none border-b border-black flex-1"
            />
          </div>
          <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
            <label className="font-semibold" htmlFor="address">
              Address :
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter address of the user"
              className="outline-none border-b border-black flex-1"
            />
          </div>
          <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
            <label className="font-semibold" htmlFor="mobileNumber">
              Mobile Number :
            </label>
            <input
              type="number"
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Enter Mobile number of the user"
              className="outline-none border-b border-black flex-1"
            />
          </div>
          <div className="p-3 flex gap-3 md:text-lg text-sm items-center">
            <label className="font-semibold" htmlFor="gmail">
              Gmail :
            </label>
            <input
              type="email"
              name="gmail"
              id="gmail"
              placeholder="Enter Gmail of the user"
              className="outline-none border-b border-black flex-1"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap p-3">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="Blood Group"
                className="md:text-lg text-sm font-semibold"
              >
                Blood Group :
              </label>
              <Select value={"A+"}>
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
              </Select>
            </div>
            <div className="flex gap-2 items-center">
              <label
                htmlFor="Gender"
                className="md:text-lg text-sm font-semibold"
              >
                Gender :
              </label>
              <Select value={"Male"}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </div>
            <div className="flex gap-2 items-center">
              <label
                htmlFor="Date of Birth"
                className="md:text-lg text-sm font-semibold"
              >
                Date of Birth :
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </div>
          </div>
          <div className="w-full">
            <button
              className="w-full py-2 text-white transition-transform duration-500 bg-black rounded-md hover:scale-95"
              onClick={(e) => {
                e.preventDefault();
                console.log("User created successfully");
              }}
            >
              Create User
            </button>
          </div>
        </form>
        <div className="flex w-full justify-end p-2">
          <Link
            className="p-2 border rounded-lg bg-black text-white hover:scale-90 transition-transform duration-300"
            to={"allstudents"}
          >
            <span className="md:text-lg text-sm p-2">View All Students</span>
            <ArrowForward />
          </Link>
          <Link
            className="p-2 border rounded-lg bg-black text-white hover:scale-90 transition-transform duration-300"
            to={"allteachers"}
          >
            <span className="md:text-lg text-sm p-2">View All Teachers</span>
            <ArrowForward />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateUsersAdmin;
