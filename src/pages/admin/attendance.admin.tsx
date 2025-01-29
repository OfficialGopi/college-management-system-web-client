import { Switch } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const AttedanceAdmin = () => {
  const [date, setDate] = useState<Dayjs>(dayjs(new Date()));
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">
          Date : {new Date(date.toISOString()).toDateString()}
        </h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="Date"
              value={dayjs(date)}
              onChange={(newValue) => {
                console.log(newValue);
                setDate(dayjs(newValue));
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className="w-full  p-2">
        <table className="w-full">
          <thead className="border">
            <th className="sm:p-2 text-xs sm:text-lg">Teacher Id</th>
            <th className="sm:p-2 text-xs sm:text-lg">Teacher Name</th>
            <th className="sm:p-2 text-xs sm:text-lg">Attendence</th>
          </thead>
          <tbody>
            <tr className="border">
              <td className="text-center sm:p-2 text-xs sm:text-lg">
                11200122034
              </td>
              <td className="text-center sm:p-2 text-xs sm:text-lg">
                Gopikanta Mondal
              </td>
              <td className="text-center sm:p-2 text-xs sm:text-lg">
                <Switch />
              </td>
            </tr>
            <tr className="border">
              <td className="text-center sm:p-2 text-xs sm:text-lg">
                11200122034
              </td>
              <td className="text-center sm:p-2 text-xs sm:text-lg">
                Gopikanta Mondal
              </td>
              <td className="text-center sm:p-2 text-xs sm:text-lg">
                <Switch />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AttedanceAdmin;
