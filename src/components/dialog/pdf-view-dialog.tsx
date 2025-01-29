import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const PdfViewDialog = ({
  file,
  isOpen = false,
  onClose,
}: {
  file: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className="w-screen h-screen top-0 left-0 fixed z-20 bg-black bg-opacity-15"
            onClick={onClose}
          ></div>
          <div className="z-30 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="relative">
              <object className="w-[90vw] h-[90vh]" data={`${file}`}></object>
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: "100%",
                  left: "100%",
                }}
                onClick={() => {
                  onClose();
                }}
              >
                <Close />
              </IconButton>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PdfViewDialog;
