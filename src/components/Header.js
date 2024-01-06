import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="flex items-center justify-between bg-black text-white font-semibold sm:h-16 fixed w-screen">
      <div className="px-10 sm:tracking-widest font-bold text-[30px]">
        <a href="#home">Portfo</a>
        <span className="text-red-600">lio.</span>
      </div>
      <nav className="pr-8 invisible md:visible">
        <ul className="m-5 sm:space-x-10 flex">
          <li className="hover:text-red-500">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="hidden pr-5">
        <IoMenuOutline className="h-10 w-12" />
        <IoCloseSharp className="h-10 w-12" hidden />
      </button>
    </header>
  );
}

export default Header;
