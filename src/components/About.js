function About() {
  return (
    <div id="about" className="sm:p-14 p-10">
      <div className="text-center m-4 font-semibold text-3xl">
        <p>About Me</p>
        <p className="text-lg">
          -- <span className="text-red-600 px-2">Who am I</span>--
        </p>
      </div>
      <div className="sm:flex items-center justify-center sm:space-x-20 font-semibold text-lg">
        <div className="pb-10">
          <img
            className="sm:rounded-2xl w-[300px] h-[300px] rounded-2xl"
            src="/images/Santosh.jpg"
            alt="Santosh_image"
          />
        </div>
        <div className="">
          <p className="sm:font-bold sm:pb-5 pb-5">
            I'm Santosh Kumar Sharma and I am a Front End Developer
          </p>
          <p className="font-normal flex-wrap">
            I'm React.js Developer. My goal is to build a fast, flexible,
          </p>
          <p className="font-normal flex-wrap">
            mobile-first website that clearly communicates with visitors. I have
            done B.E in E&C
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
