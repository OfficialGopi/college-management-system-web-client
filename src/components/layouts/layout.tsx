import { Outlet } from "react-router-dom";
import Aside from "./../shared/aside";
const Layout = (Navbar: () => JSX.Element) => () => {
  return (
    <>
      <header className="h-[70px] z-10 border-b-2 w-full object-center   backdrop-blur-xl sticky top-0 flex items-center justify-center">
        <Navbar />
      </header>
      <main className="mx-auto w-full lg:w-[1024px]   flex  justify-center">
        <aside className="hidden md:flex w-[30%] h-[calc(100vh-70px)] sticky top-[70px] border-r">
          <Aside />
        </aside>
        <section className="w-full md:w-[70%] md:p-2 overflow-x-hidden ">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
