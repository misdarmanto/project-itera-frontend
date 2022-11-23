import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-auto">
      <Sidebar />
      <div className="grow bg-gray-100">
        <Navbar />
        <div className="m-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
