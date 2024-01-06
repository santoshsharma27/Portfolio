function Project() {
  return (
    <div className="sm:pt-24 pt-20 pb-20" id="projects">
      <div className="text-center text-2xl font-semibold">
        <p>My Projects</p>
        <p className="text-lg">
          -- <span className="text-red-600 px-2">check my work</span>--
        </p>
      </div>
      <div className="sm:flex justify-center items-center sm:m-7 sm:space-x-7 pt-7 px-16">
        <div className="sm:h-[300px] sm:w-[350px] bg-black rounded-2xl h-64 w-64 mb-7">
          <div className="p-5">
            <a
              href="https://fast-reactpizza.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="p-4 rounded-2xl border-red-600 border-2"
                src="/images/FastReact.png"
                alt="Fast React"
              />
            </a>
            <div className="text-center p-5 text-base font-semibold text-white">
              <p>Fast React Pizza App using React.js, Tailwindcss</p>
            </div>
          </div>
        </div>
        <div className="sm:h-[300px] sm:w-[350px] bg-black rounded-2xl h-64 w-64 mb-7">
          <div className="p-5">
            <a
              href="https://food-fire.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="p-4 rounded-2xl border-red-600 border-2"
                src="/images/FoodFire.png"
                alt="Food Fire"
              />
            </a>
            <div className="text-center p-5 text-base font-semibold text-white">
              <p>Food Fire App using React.js, Tailwindcss</p>
            </div>
          </div>
        </div>
        <div className="sm:h-[300px] sm:w-[350px] bg-black rounded-2xl h-64 w-64 mb-7">
          <div className="p-5">
            <a
              href="https://netflix-gpt4.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="p-4 rounded-2xl border-red-600 border-2"
                src="/images/Netflix.png"
                alt="Netflix"
              />
            </a>
            <div className="text-center p-5 text-base font-semibold text-white">
              <p>Netflix-GPT using React.js, Tailwindcss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
