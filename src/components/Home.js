function Home() {
  return (
    <div
      id="home"
      className="bg-no-repeat h-[100vh] bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: "url(/images/bannernew.jpg)",
      }}
    >
      <div className="sm:px-40 pt-44 pl-8">
        <p className="sm:text-[28px] font-semibold text-white text-xl">
          Hello, I'm
        </p>
        <p className="sm:text-[65px] text-white font-semibold text-3xl pt-5 sm:pb-5">
          Santosh Kumar Sharma
        </p>
        <p className="sm:text-3xl text-white pt-7 text-2xl">
          And I'm a <span>Front End Developer</span>
        </p>
        <div className="pt-20 sm:space-x-8 space-x-5">
          <a
            className="px-5 py-4 rounded-xl bg-red-700 font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed"
            href="https://github.com/santoshsharma27"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <a
            className="px-5 py-4 rounded-xl bg-red-700 font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed"
            href="https://github.com/santoshsharma27"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
