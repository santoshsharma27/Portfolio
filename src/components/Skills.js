function Skills() {
  return (
    <div className="bg-black text-white py-28" id="skills">
      <div className="text-center text-2xl font-semibold">
        <p>My Skills</p>
        <p className="text-lg">
          -- <span className="text-red-600 px-2">What I Know</span>--
        </p>
      </div>
      <div className="sm:flex items-center justify-around sm:space-x-20 px-7">
        <div className="sm:w-[550px] mb-10">
          <p className="text-lg font-bold py-5">
            My creative skills & experiences
          </p>
          <p className="sm:tracking-widest ">
            I am a React Js Developer with a passion for learning and can work
            with estimation of future tasks and client feedback. I am
            highly-motivated, result oriented, self-driven, hard-working, fast
            learner and constantly seeking to improve my skills and am fully
            aware of the latest Front-end Development Tools. I have a firm
            knowledge of JavaScript and React Js, Parcel js, Redux, HTML5, CSS3,
            Git, Tailwind CSS, REST API, JSON, and possess a good knowledge of
            computer software packages (frameworks and tools) that are used in
            today’s technology.
          </p>
        </div>
        <div className="flex items-center flex-wrap space-x-8 sm:w-[600px] w-96 space-y-5">
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="/images/react.png" alt="react" width="80" height="80" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/javascript.png"
              alt="javascript"
              width="80"
              height="80"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/typescript.png"
              alt="TypeScript"
              width="80"
              height="80"
            />
          </a>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            <img src="./images/redux.png" alt="redux" width="80" height="80" />
          </a>

          <a
            href="https://www.w3schools.com/html/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/html5.png" alt="html5" width="80" height="80" />
          </a>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/css3.png" alt="css3" width="80" height="80" />
          </a>

          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              src="./images/tailwind-css.png"
              alt="react"
              width="80"
              height="80"
            />
          </a>

          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src="./images/git.png" alt="git" width="80" height="80" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
