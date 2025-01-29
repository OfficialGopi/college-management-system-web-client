import { ArrowForward, Delete, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Switch,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const AccordionAssignmentComponentTeacher = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <h2 className="text-lg font-bold">Assignments title</h2>
      </AccordionSummary>
      <AccordionDetails>
        <p className="px-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          accusantium itaque dicta quis cupiditate eum illum possimus fuga
          magnam harum odit nesciunt fugit adipisci est vero ex, velit odio
          molestias!
        </p>
        <p className="text-black text-xl">
          Due Date: <span>{new Date().toDateString()}</span>
        </p>
      </AccordionDetails>
      <AccordionActions>
        <div className="flex items-center gap-5">
          <div>
            {/* <span className="text-lg font-semibold">
                  Assignment Status :
                </span>
                 */}
            <span className="text-red-500 font-semibold ">Closed</span>
            <Switch
              checked={checked}
              sx={{
                "& .MuiSwitch-track": {
                  backgroundColor: "#D3D3D3",
                },
                "& .MuiSwitch-thumb": {
                  backgroundColor: "#000",
                },
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#000",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#000",
                },
              }}
              onChange={() => setChecked(!checked)}
            />
            <span className="text-green-500 font-semibold">Open</span>
          </div>
          <IconButton
            sx={{
              color: "#000",
            }}
          >
            <Delete />
          </IconButton>
          <Link
            to={"asd"}
            className="border p-2 rounded-lg border-black flex items-center gap-1 hover:bg-black transition-all hover:text-white duration-300 "
          >
            <span>View</span>
            <ArrowForward />
          </Link>
        </div>
      </AccordionActions>
    </Accordion>
  );
};

export default AccordionAssignmentComponentTeacher;
