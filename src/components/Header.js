function Header() {
  return (
    <header className="sm:flex items-center justify-between bg-black text-white font-semibold sm:h-16 fixed w-[100%]">
      <div className="px-10 sm:tracking-widest font-bold text-lg pt-5">
        <p>
          <a href="#home">Portfolio</a>
        </p>
      </div>
      <nav className="pr-8">
        <ul className="flex items-center justify-between m-5 sm:space-x-10">
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
    </header>
  );
}

export default Header;
