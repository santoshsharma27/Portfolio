function Home() {
  return (
    <section
      id="home"
      className="bg-no-repeat bg-center bg-cover bg-fixed h-[700px]"
      style={{
        backgroundImage: "url(/images/bannernew.jpg)",
      }}
    >
      <div className="flex flex-col pt-36 items-start h-full sm:pl-12 md:pl-28 pl-8 sm:px-10 md:px-16">
        <p className="text-white font-semibold shadow-md text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
          Hello <span className="animate-pulse">👋</span> I 'm
        </p>

        <p className="text-white font-semibold shadow-md text-3xl sm:text-5xl md:text-6xl lg:text-[65px] pt-2 sm:pt-4">
          Santosh Kumar Sharma
        </p>

        <p className="text-white shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4 sm:pt-6">
          And I'm a{" "}
          <span className="font-bold text-red-600 inline-block animate-pulse whitespace-nowrap">
            Front End Developer
          </span>
        </p>

        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <a
            className="px-6 py-3 rounded-xl bg-red-700 font-semibold text-white transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 text-center"
            href="https://drive.google.com/file/d/1N6lEg4aLeM-FC2N-uDE1Wa_Udh6yTjMF/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

          <a
            className="px-6 py-3 rounded-xl bg-red-700 font-semibold text-white transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 text-center"
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
