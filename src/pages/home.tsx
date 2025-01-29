import { StudentsPhotoIcon } from "../assets/icons/StudentsPhotoIcon";
import { LoginIcon } from "../assets/icons/LoginIcon";
import { LinkButton } from "../components/ui/link.button";
const Home = () => {
  return (
    <>
      <main className="w-screen h-screen flex sm:justify-center overflow-hidden items-center gap-2 p-4 sm:flex-row flex-col">
        <StudentsPhotoIcon />
        <section className="flex items-center sm:w-1/2 flex-col gap-4 lg:w-[700px] ">
          <h1 className="sm:text-4xl text-3xl font-bold flex flex-col  font-sans md:text-6xl mx-auto">
            <span>Welcome to</span>
            <span>College Management</span>
            <span>System</span>
          </h1>
          <p className="md:text-xl  text-base font-thin">
            Streamline college management, class organization, and add students
            and faculty. Seamlessly track attendance, assess performance, and
            provide feedback. Access records, view marks, and communicate
            effortlessly.
          </p>
          <section className="flex justify-center w-full ">
            <LinkButton flexDir="flex-row" to="/login" absolute={false}>
              <>
                <span>Login</span>
                <LoginIcon />
              </>
            </LinkButton>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
