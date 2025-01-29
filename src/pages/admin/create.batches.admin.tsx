import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { createBatch } from "../../services/batch.service";

let i = 0;
const yearBatches: number[] = [];
for (i = 0; i < 50; i++) {
  yearBatches.push(new Date().getFullYear() - i);
}

const CreateBatchesAdmin = () => {
  const [year, setYear] = useState<Date>(
    new Date("01-01-" + new Date().getFullYear())
  );
  return (
    <>
      <div className="w-full">
        <h1 className="font-semibold text-2xl mb-2">Create Batches</h1>
        <div className="p-2 border rounded-lg">
          <form className="p-2 flex items-center gap-2">
            <div className="text-xl">
              <label className="font-semibold">Batch : </label>
              <Select
                value={year.getFullYear()}
                onChange={(e) => {
                  setYear(new Date("01-01-" + e.target.value));
                }}
              >
                {yearBatches.map((e) => (
                  <MenuItem value={e}>{e}</MenuItem>
                ))}
              </Select>
            </div>
            <button
              className="p-2 border text-xl font-semibold rounded-lg hover:bg-black hover:text-white transition-colors duration-500"
              onClick={(e) => {
                e.preventDefault();
                toast.promise(createBatch(year), {
                  success: "Batch successfully added",
                  loading: "Creating..",
                  error: "Something went wrong",
                });
              }}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBatchesAdmin;
