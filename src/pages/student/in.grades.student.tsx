import { useParams } from "react-router-dom";
import NotFound from "../not-found";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const InGradesStudent = () => {
  const [results, setResults] = useState<Array<any>>([]);
  const { semester } = useParams<{
    semester: string;
  }>();
  const totalCredits = results.reduce(
    (acc, subject) => acc + subject.credit,
    0
  );
  const totalCreditPoints = results.reduce(
    (acc, subject) => acc + subject.totalCreditPoints,
    0
  );
  const SGPA = (totalCreditPoints / totalCredits).toFixed(2);
  if (![1, 2, 3, 4, 5, 6, 7, 8].includes(Number(semester))) {
    return <NotFound />;
  }
  return (
    <table className="table-fixed border-collapse  border w-full">
      <thead className="border rounded-sm">
        <tr>
          <th className="font-semibold w-[20%]">Subject Code</th>
          <th className="font-semibold w-[40%]">Subject Name</th>
          <th className="font-semibold w-[10%]">Letter Grade</th>
          <th className="font-semibold  w-[10%]">Points</th>
          <th className="font-semibold w-[10%]">Credits</th>
          <th className="font-semibold w-[10%]">Credit Points</th>
        </tr>
      </thead>
      <tbody className="border">
        <tr className="border">
          <td className="border text-center p-1">asdasd</td>
          <td className="border text-center p-1">John Doe</td>
          <td className="border text-center p-1">A</td>
          <td className="border text-center p-1">1</td>
          <td className="border text-center p-1">1</td>
          <td className="border text-center p-1">1</td>
        </tr>
        <tr className="border">
          <td className="border text-center p-1"></td>
          <td className="border text-center p-1"></td>
          <td className="border text-center p-1"></td>
          <td className="border text-center p-1">Total</td>
          <td className="border text-center p-1">21</td>
          <td className="border text-center p-1">177</td>
        </tr>
        <span className=" text-xl px-2">SGPA : 9.0</span>
      </tbody>
    </table>
  );
};

export default InGradesStudent;
