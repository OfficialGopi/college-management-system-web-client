import { useFileHandler } from "6pp";
import { CameraAlt } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const ProfileAdmin = () => {
  const file = useFileHandler("single");
  const handleClick = () => {
    const avatar = document.getElementById("avatar") as HTMLElement;
    avatar.click();
  };
  return (
    <>
      <div className="w-full p-2 border rounded-xl my-2 shadow-inner   flex justify-center flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              id="avatar"
              multiple={false}
              style={{
                display: "none",
              }}
              onChange={file.changeHandler}
            />
            <Avatar
              sx={{
                width: 200,
                height: 200,
              }}
              src={file.preview ? file.preview : ""}
            />
            <IconButton
              onClick={handleClick}
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: 10,
              }}
            >
              <CameraAlt />
            </IconButton>
          </div>
          {file.file && (
            <button className="p-2 m-2 border rounded-lg duration-300 hover:bg-black hover:text-white transition-colors">
              Upload Avatar
            </button>
          )}
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold">
            Admin Name : Gopikanta Mondal
          </h2>
          <p>Admin ID : 11200122034</p>
          <p>Email : gkmondal43210@gmail.com</p>
          <p>Phone Number : 9832968001</p>
          <p>Address : 123 Main St, Anytown, USA</p>
        </div>
      </div>
    </>
  );
};

export default ProfileAdmin;
