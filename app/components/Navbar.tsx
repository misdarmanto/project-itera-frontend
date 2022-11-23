import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center mx-auto">
          <span className="text-xl font-medium whitespace-nowrap dark:text-white text-gray-500">Welcome, Misdar</span>
        </div>

        <div className="flex justify-end items-center pt-4 sm:mr-5">
          <IoMdNotifications className="text-3xl mx-2 sm:mr-5 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-full" />
          <img
            className="p-1 w-10 h-10 mx-2 rounded-full ring-2 ring-teal-500 cursor-pointer dark:ring-gray-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugMCl7Y_-i2mW0Y6Y1jjrrl5sp-q9c1B6Kw&usqp=CAU"
            alt="Bordered avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
