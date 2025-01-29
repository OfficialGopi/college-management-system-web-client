import MaterialsComponentTeacher from "../../components/specific/materials.component.teacher";

const PreviousMaterialsTeacher = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <MaterialsComponentTeacher
          description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. In rerum earum, tenetur asperiores, doloremque aliquid sit quisquam illum modi dignissimos porro sed, maxime autem minima laborum reiciendis ipsa. Pariatur, maxime.
            `}
          title="asdasd"
          url="asd"
        />
        <MaterialsComponentTeacher
          description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. In rerum earum, tenetur asperiores, doloremque aliquid sit quisquam illum modi dignissimos porro sed, maxime autem minima laborum reiciendis ipsa. Pariatur, maxime.
            `}
          title="asdasd"
          url="asd"
        />
      </div>
    </>
  );
};

export default PreviousMaterialsTeacher;
