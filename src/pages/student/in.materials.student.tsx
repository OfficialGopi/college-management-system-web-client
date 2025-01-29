import { useParams } from "react-router-dom";
import MaterialDownloadComponentStudent from "../../components/ui/material.download.component.student";

const InMaterialsStudent = () => {
  const { subjectCode } = useParams<{
    subjectCode: string;
  }>();
  return (
    <main className="w-full">
      <h1 className="p-4 text-xl md:text-3xl  flex flex-col font-semibold">
        <span>Operating System</span>
        <span className="text-base md:text-xl">Code : {subjectCode}</span>
      </h1>
      <section className="p-2 flex flex-col gap-2">
        <MaterialDownloadComponentStudent
          description="asdasd"
          title="ass"
          url="https://res.cloudinary.com/dko5qxqqi/image/upload/v1733731060/CMS/assignments/c5elhhzhsfvcac2fzopj.pdf.pdf"
        />
      </section>
    </main>
  );
};

export default InMaterialsStudent;
