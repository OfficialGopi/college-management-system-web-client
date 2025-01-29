import NoticesPageComponent from "../../components/ui/notices.page.component";

const NoticesStudent = () => {
  return (
    <>
      <div className="w-full p-4">
        <h1 className="text-3xl font-bold py-2">Notices</h1>
        <div className="w-full flex flex-col gap-2">
          <NoticesPageComponent />
          <NoticesPageComponent />
          <NoticesPageComponent />
          <NoticesPageComponent />
        </div>
      </div>
    </>
  );
};

export default NoticesStudent;
