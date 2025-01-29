import { Delete, TextIncrease } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  deleteBatch,
  getAllRunningBatches,
  increaseSemesterOrCloseBatchIfAllSemesterCompleted,
} from "../../services/batch.service";
import DialogComponent from "../../components/dialog/dialog.component";
import toast from "react-hot-toast";

const PreviousBatchesAdmin = () => {
  const [changeCount, setChangeCount] = useState<number>(0);
  const [batches, setBatches] = useState<any[]>([]);
  const [batchInDialog, setBatchInDialog] = useState<any>({});
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [increaseSemesterDialog, setIncreaseSemesterDialog] =
    useState<boolean>(false);

  useEffect(() => {
    getAllRunningBatches().then((data) => {
      setBatches(data.data);
    });
  }, [changeCount]);
  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-2">Previous Batches</h1>
        <table className="table-fixed border-collapse border w-full">
          <thead className="border">
            <tr>
              <th className="font-semibold">Batch</th>
              <th className="font-semibold">Semester</th>
              <th className="font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="border">
            {batches.map((batch, index) => (
              <tr className="border" key={index}>
                <td className="border text-center p-1">
                  {new Date(batch.startingYear).getFullYear()}
                </td>
                <td className="border text-center p-1">
                  {batch.completedSemester}
                </td>
                <td className="border flex gap-2 items-center justify-center  p-1">
                  <button
                    onClick={() => {
                      setBatchInDialog(batch);
                      setDeleteDialogOpen(true);
                    }}
                    className="p-2 transition-all duration-300  rounded-[100%] active:scale-90 hover:bg-black hover:text-white"
                  >
                    <Delete />
                  </button>
                  <button
                    onClick={() => {
                      setBatchInDialog(batch);
                      setIncreaseSemesterDialog(true);
                    }}
                    className="p-2 transition-all duration-300  rounded-[100%] active:scale-90 hover:bg-black hover:text-white"
                  >
                    <TextIncrease />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DialogComponent
        dialogOpen={deleteDialogOpen}
        handleClose={() => {
          setDeleteDialogOpen(false);
        }}
        handleTodo={() => {
          toast
            .promise(deleteBatch(batchInDialog._id), {
              success: "Batch successfully deleted",
              loading: "Deleting..",
              error: "Something went wrong.",
            })
            .finally(() => {
              setDeleteDialogOpen(false);
              setChangeCount(changeCount + 1);
            });
        }}
        title="Delete Batch"
        todo="Delete"
        content="Are you sure you want to delete this batch?"
      />
      <DialogComponent
        dialogOpen={increaseSemesterDialog}
        handleClose={() => {
          setIncreaseSemesterDialog(false);
        }}
        handleTodo={() => {
          toast
            .promise(
              increaseSemesterOrCloseBatchIfAllSemesterCompleted(
                batchInDialog._id
              ),
              {
                success: "Increased semester successfully ",
                loading: "Increasing..",
                error: "Something went wrong.",
              }
            )
            .finally(() => {
              setIncreaseSemesterDialog(false);
              setChangeCount(changeCount + 1);
            });
        }}
        title="Increase Semester"
        todo="Increase"
        content="Are you sure you want to increase semester in this batch?"
      />
    </>
  );
};

export default PreviousBatchesAdmin;
