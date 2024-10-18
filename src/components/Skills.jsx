function Skills() {
  return (
    <div className="bg-black text-white py-16" id="skills">
      <div className="text-center text-3xl font-semibold mb-6">
        <p>My Skills</p>
        <p className="text-lg mt-2">
          -- <span className="text-red-600 px-2">What I Know</span> --
        </p>
      </div>
      <div className="sm:flex items-center justify-around sm:space-x-20 px-7">
        <div className="sm:w-[550px] mb-10">
          <p className="text-lg font-bold py-5">
            My Creative Skills & Experiences
          </p>
          <p className="text-base leading-relaxed tracking-wide text-justify">
            I am a Frontend Developer with a passion for learning and an ability
            to estimate future tasks based on client feedback. Highly motivated
            and result-oriented, I am self-driven, hardworking, and a fast
            learner, constantly seeking to improve my skills. I stay updated on
            the latest front-end development tools and possess a strong
            foundation in JavaScript, React.js, Redux Toolkit, React Context,
            HTML5, CSS3, Git, TailwindCSS, Jest, Jira, REST API, and JSON.
            Additionally, I have a solid understanding of computer software
            packages (frameworks and tools) commonly used in today’s technology
            landscape.
          </p>
        </div>

        {/* Skills Images Section */}
        <div className="flex flex-col items-center justify-center sm:w-[600px] w-96">
          {/* First Row of Icons - 4 Icons */}
          <div className="flex justify-center space-x-10 mb-5">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src="/images/react.png" alt="React" width="80" height="80" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/images/javascript.png"
                alt="JavaScript"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://redux.js.org"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="./images/redux.png"
                alt="Redux"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="./images/html5.png"
                alt="HTML5"
                width="80"
                height="80"
              />
            </a>
          </div>

          {/* Second Row of Icons - Remaining Icons */}
          <div className="flex justify-center space-x-10 mb-5">
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src="./images/css3.png" alt="CSS3" width="80" height="80" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="./images/tailwind-css.png"
                alt="Tailwind CSS"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src="./images/git.png" alt="Git" width="80" height="80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
