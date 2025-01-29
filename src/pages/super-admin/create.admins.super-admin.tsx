import { useState } from "react";
import toast from "react-hot-toast";
import { createAdmin } from "../../services/admin.service";

const CreateAdminsSuperAdmin = () => {
  const [formData, setFormData] = useState<{
    name: string;
    adminId: string;
    gmail: string;
    password: string;
  }>({
    name: "",
    adminId: "",
    gmail: "",
    password: "",
  });

  return (
    <>
      <div className="w-full">
        <h1 className="font-bold text-2xl">Create Admins</h1>
        <div className="p-2 w-full">
          <form className="border  p-2 rounded-md flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <label htmlFor="name" className="text-lg font-semibold">
                Name :
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="text-lg font-semibold border rounded-md flex-1 p-2"
                value={formData.name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="adminId" className="text-lg font-semibold">
                Admin Id :
              </label>
              <input
                type="text"
                name="adminId"
                id="adminId"
                className="text-lg font-semibold border rounded-md flex-1 p-2"
                value={formData.adminId}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    adminId: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="gmail" className="text-lg font-semibold">
                Gmail :
              </label>
              <input
                type="text"
                name="gmail"
                id="gmail"
                className="text-lg font-semibold border rounded-md flex-1 p-2"
                value={formData.gmail}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    gmail: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="password" className="text-lg font-semibold">
                Password :
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="text-lg font-semibold border rounded-md flex-1 p-2"
                minLength={8}
                value={formData.password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button
              className="p-2 border hover:bg-black hover:text-white rounded-lg transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                toast
                  .promise(createAdmin(formData), {
                    success: "Admin created successfully",
                    loading: "Creating...",
                    error: "Something went wrong",
                  })
                  .then(() => {
                    setFormData({
                      adminId: "",
                      gmail: "",
                      name: "",
                      password: "",
                    });
                  })
                  .catch(() => {});
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

export default CreateAdminsSuperAdmin;
