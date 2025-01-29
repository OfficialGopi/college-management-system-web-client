import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import {
  deleteAdmin,
  getAllAdmins,
  updateAdmin,
} from "../../services/admin.service";
import DialogComponent from "../../components/dialog/dialog.component";
import toast from "react-hot-toast";

const ManageAdminsSuperAdmin = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [adminInDialog, setAdminInDialog] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [admins, setAdmins] = useState<any[]>([]);
  const [editCount, setEditCount] = useState<number>(0);
  useEffect(() => {
    setLoading(true);
    getAllAdmins()
      .then((data) => {
        console.log(data);
        setAdmins(data.data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [editCount]);
  return (
    <>
      <div className="w-full">
        <h1 className="font-semibold text-2xl mb-2">Manage Admins</h1>
        <div className="p-2 flex flex-col gap-2 justify-center  text-xl   ">
          {loading && <span>loader..</span>}
          {!loading &&
            admins?.map((admin, index) => (
              <div
                key={index}
                className="border rounded-md p-2 flex gap-2 bg-black text-white items-center w-full  duration-300 "
              >
                <div className="flex-1">
                  <span>{index + 1}. </span>
                  <span>
                    {admin.name} ({admin.adminId})
                  </span>
                </div>
                <div>
                  <IconButton
                    sx={{
                      color: "white",
                    }}
                    onClick={() => {
                      setAdminInDialog(() => admin);
                      setOpenDialog(true);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "white",
                    }}
                    onClick={() => {
                      setAdminInDialog(() => admin);
                      setOpenDeleteDialog(true);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </div>
            ))}
        </div>
      </div>
      <DialogComponent
        dialogOpen={openDeleteDialog}
        handleClose={() => {
          setOpenDeleteDialog(false);
        }}
        handleTodo={() => {
          toast
            .promise(deleteAdmin(adminInDialog._id), {
              success: "Admin Successfulll deleted",
              loading: "Deleting...",
              error: "Something went wrong",
            })
            .then(() => {
              setEditCount(editCount + 1);
            })
            .finally(() => {
              setOpenDeleteDialog(false);
            });
        }}
        title="Delete Admin"
        todo="Delete"
        content={`Are you sure you want to delete this admin? ${
          adminInDialog.name + "(" + adminInDialog.adminId + ")"
        }`}
      />
      <DialogComponent
        dialogOpen={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
        handleTodo={() => {
          toast
            .promise(updateAdmin(adminInDialog._id, adminInDialog), {
              success: "Admin successfully Updated",
              loading: "Updating..",
              error: "Something went wrong..",
            })
            .then(() => {
              setEditCount(editCount + 1);
            })
            .finally(() => {
              setOpenDialog(false);
            });
        }}
        title="Edit Admin"
        todo="Edit"
      >
        <form className="border  p-2 rounded-sm text-base flex flex-col gap-2">
          <div className="flex items-center gap-2 ">
            <label htmlFor="adminId" className="font-semibold">
              Admin Id :{""}
            </label>
            <input
              type="text"
              name="adminId"
              id="adminId"
              className="border p-1 rounded-md flex-1"
              onChange={(e) => {
                setAdminInDialog({
                  ...adminInDialog,
                  adminId: e.target.value,
                });
              }}
              value={adminInDialog.adminId}
            />
          </div>
          <div className="flex items-center gap-2 ">
            <label htmlFor="name" className="font-semibold">
              Name :{""}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border p-1 rounded-md flex-1"
              onChange={(e) => {
                setAdminInDialog({
                  ...adminInDialog,
                  name: e.target.value,
                });
              }}
              value={adminInDialog.name}
            />
          </div>
          <div className="flex items-center gap-2 ">
            <label htmlFor="gmail" className="font-semibold">
              Gmail :{""}
            </label>
            <input
              type="text"
              name="gmail"
              id="gmail"
              className="border p-1 rounded-md flex-1"
              onChange={(e) => {
                setAdminInDialog({
                  ...adminInDialog,
                  gmail: e.target.value,
                });
              }}
              value={adminInDialog.gmail}
            />
          </div>
          <div className="flex items-center gap-2 ">
            <label htmlFor="password" className="font-semibold">
              Password :{""}
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="border p-1 rounded-md flex-1"
              onChange={(e) => {
                setAdminInDialog({
                  ...adminInDialog,
                  password: e.target.value,
                });
              }}
              value={adminInDialog.password}
            />
          </div>
          <div className="flex items-center border bg-gray-800 text-white p-2 rounded-xl">
            <span className="font-semibold">Active : </span>
            <Switch
              checked={adminInDialog.isActive}
              onChange={() => {
                setAdminInDialog({
                  ...adminInDialog,
                  isActive: !adminInDialog.isActive,
                });
              }}
            />
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center">
              <span className="font-semibold">Batches Department : </span>
              <Switch
                checked={adminInDialog.batchesDepartment}
                onChange={() => {
                  setAdminInDialog({
                    ...adminInDialog,
                    batchesDepartment: !adminInDialog.batchesDepartment,
                  });
                }}
              />
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Subjects Department : </span>
              <Switch
                checked={adminInDialog.subjectsDepartment}
                onChange={() => {
                  setAdminInDialog({
                    ...adminInDialog,
                    subjectsDepartment: !adminInDialog.subjectsDepartment,
                  });
                }}
              />
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Users Department : </span>
              <Switch
                checked={adminInDialog.usersDepartment}
                onChange={() => {
                  setAdminInDialog({
                    ...adminInDialog,
                    usersDepartment: !adminInDialog.usersDepartment,
                  });
                }}
              />
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Attendances Department : </span>
              <Switch
                checked={adminInDialog.attendancesDepartment}
                onChange={() => {
                  setAdminInDialog({
                    ...adminInDialog,
                    attendancesDepartment: !adminInDialog.attendancesDepartment,
                  });
                }}
              />
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Notices Department : </span>
              <Switch
                checked={adminInDialog.noticesDepartment}
                onChange={() => {
                  setAdminInDialog({
                    ...adminInDialog,
                    noticesDepartment: !adminInDialog.noticesDepartment,
                  });
                }}
              />
            </div>
          </div>
        </form>
      </DialogComponent>
    </>
  );
};

export default ManageAdminsSuperAdmin;
