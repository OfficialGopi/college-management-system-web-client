import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const PreviousNoticesAdmin = () => {
  return (
    <div className="w-full">
      <h1 className="font-semibold text-3xl">Previous Notices</h1>
      <div className="w-full p-2 flex flex-col gap-2">
        <div className="p-3 border rounded-lg flex items-start">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Notice no. 1</h3>
            <span className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur blanditiis deleniti error, deserunt assumenda officia
              earum aut perferendis, libero nam aliquid ipsum odio repellendus
              nihil cupiditate odit! Voluptatum, quisquam. Quod.
            </span>
          </div>
          <IconButton>
            <Delete />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PreviousNoticesAdmin;
