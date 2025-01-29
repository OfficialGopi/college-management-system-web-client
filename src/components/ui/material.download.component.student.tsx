import { Book, Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const MaterialDownloadComponentStudent = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <div className="flex gap-2 items-center border hover:bg-black hover:text-white transition-colors duration-300 p-2 rounded-lg">
      <Book fontSize="large" />
      <div className="flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-semibold">Title : {title}</h3>
        <span className="text-sm md:text-base">
          Description : {description}
        </span>
      </div>
      <div>
        <IconButton
          sx={{
            color: "inherit",
          }}
          LinkComponent={"a"}
          href={url}
          target="_blank"
        >
          <Download />
        </IconButton>
      </div>
    </div>
  );
};
export default MaterialDownloadComponentStudent;
