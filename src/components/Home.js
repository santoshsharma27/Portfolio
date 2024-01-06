function Home() {
  return (
    <section
      id="home"
      className="bg-no-repeat h-[100vh] bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: "url(/images/bannernew.jpg)",
      }}
    >
      <div className="sm:pl-12 md:pl-28 pt-44 pl-8 px-20">
        <p className="sm:text-[28px] font-semibold text-white text-xl">
          Hello 👋 I'm
        </p>
        <p className="sm:text-[44px] text-white font-semibold text-[32px] pt-5 sm:pb-5 md:text-[48px] lg:text-[65px]">
          Santosh Kumar Sharma
        </p>
        <p className="sm:text-3xl text-white pt-7 text-2xl">
          And I'm a <span>Front End Developer</span>
        </p>
        <div className="pt-20 sm:space-x-8 space-x-2 flex text-center">
          <a
            className="px-2 py-2 sm:px-5 sm:py-4 rounded-xl bg-red-700 font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed"
            href="https://drive.google.com/file/d/16mBl736IQT7IEA8ATEgjdUjaSdazLuLn/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <a
            className="px-2 py-2 sm:px-5 sm:py-4 rounded-xl bg-red-700 font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed"
            href="https://github.com/santoshsharma27"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
