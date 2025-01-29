import { Add, Preview } from "@mui/icons-material";
import { Link } from "react-router-dom";

const BatchesAdmin = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl mb-4">Batch</h1>
      <div className="flex gap-2">
        <Link
          to={"create"}
          className="border  flex items-center justify-center rounded-2xl gap-2 p-4 text-2xl font-semibold hover:bg-black hover:text-white hover:scale-90 transition-all duration-300"
        >
          <Add fontSize="large" />
          <span>Create Batch</span>
        </Link>
        <Link
          to={"previous"}
          className="border  flex items-center justify-center rounded-2xl gap-2 p-4 text-2xl font-semibold hover:bg-black hover:text-white hover:scale-90 transition-all duration-300"
        >
          <Preview fontSize="large" />
          <span>Previous Batches</span>
        </Link>
      </div>
    </div>
  );
};

export default BatchesAdmin;
