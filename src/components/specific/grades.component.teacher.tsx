import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

const GradesComponentTeacher = () => {
  const [point, setPoint] = useState<number>(0);
  return (
    <>
      <tr className="border">
        <td className="text-center sm:p-2 text-xs sm:text-lg">11200122034</td>
        <td className="text-center sm:p-2 text-xs sm:text-lg">
          Gopikanta Mondal
        </td>
        <td className="text-center sm:p-2 text-xs sm:text-lg">
          <Select
            variant="standard"
            name="points"
            id="points"
            value={point}
            onChange={(e) => setPoint(Number(e.target.value))}
          >
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
          </Select>
        </td>
        <td className="text-center sm:p-2 text-xs sm:text-lg">
          <button className=" border p-2 rounded-lg border-black hover:bg-black hover:text-white transition-all duration-300 active:scale-90 hover:scale-95">
            Save
          </button>
        </td>
      </tr>
    </>
  );
};

export default GradesComponentTeacher;
