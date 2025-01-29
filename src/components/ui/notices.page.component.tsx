import { useState } from "react";
import PdfViewDialog from "../dialog/pdf-view-dialog";

const NoticesPageComponent = () => {
  const [viewPdf, setViewPdf] = useState<boolean>(false);
  const [currentPdf, setCurrentPdf] = useState<string>("");
  return (
    <>
      <div className="w-full flex flex-col border gap-2 rounded-lg p-3">
        <h3 className="w-full font-semibold text-2xl">Notice 1</h3>
        <div className="w-full">
          <span className="text-lg font-semibold">Description</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sed
            temporibus sint sunt qui ipsum eaque asperiores officia est tenetur
            sequi ducimus voluptatum deserunt, velit quasi ut adipisci
            laboriosam. Ad!
          </p>
          <div className="flex font-semibold gap-2 p-2 items-center">
            <span className="text-lg">Attachments :</span>
            <button
              onClick={() => {
                setViewPdf(true);
                setCurrentPdf("path/to/pdf/file.pdf");
              }}
              className="border p-2 rounded-lg border-black bg-black text-white hover:scale-90 transition-transform duration-300"
            >
              View 1
            </button>
          </div>
        </div>
        <PdfViewDialog
          isOpen={viewPdf}
          onClose={() => {
            setViewPdf(false);
            setCurrentPdf("");
          }}
          file={currentPdf}
        />
      </div>
    </>
  );
};

export default NoticesPageComponent;
