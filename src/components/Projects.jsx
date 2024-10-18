function Project() {
  return (
    <div className="sm:pt-16 pt-16 pb-20" id="projects">
      <div className="text-center text-2xl font-semibold">
        <p>My Projects</p>
        <p className="text-lg">
          -- <span className="text-red-600 px-2">check my work</span> --
        </p>
      </div>

      {/* Project Cards Wrapper */}
      <div className="pt-7 px-4 sm:px-16">
        {/* Grid layout for responsive project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Project Card 1 */}
          <div className="bg-black rounded-xl transition-transform duration-300 hover:bg-gray-800">
            <div className="p-5 flex flex-col justify-between h-full items-center">
              <a
                href="https://fast-reactpizza.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="p-4 rounded-2xl border-red-600 border-2 transition-transform duration-300 hover:scale-105 max-h-40 object-cover"
                  src="/images/FastReact.png"
                  alt="Fast React"
                />
              </a>
              <div className="text-center p-5 text-base font-semibold text-white">
                <p className="mb-3">
                  Fast React Pizza App using React.js, Tailwindcss
                </p>
                <a
                  href="https://fast-reactpizza.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-black rounded-2xl transition-transform duration-300 hover:bg-gray-800">
            <div className="p-5 flex flex-col justify-between h-full items-center">
              <a
                href="https://food-fire.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="p-4 rounded-2xl border-red-600 border-2 transition-transform duration-300 hover:scale-105 max-h-40 object-cover"
                  src="/images/FoodFire.png"
                  alt="Food Fire"
                />
              </a>
              <div className="text-center p-5 text-base font-semibold text-white">
                <p className="mb-3">
                  Food Fire App using React.js, Tailwindcss
                </p>
                <a
                  href="https://food-fire.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-black rounded-2xl transition-transform duration-300 hover:bg-gray-800">
            <div className="p-5 flex flex-col justify-between h-full items-center">
              <a
                href="https://netflix-gpt4.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="p-4 rounded-2xl border-red-600 border-2 transition-transform duration-300 hover:scale-105 max-h-40 object-cover"
                  src="/images/Netflix.png"
                  alt="Netflix"
                />
              </a>
              <div className="text-center p-5 text-base font-semibold text-white">
                <p className="mb-3">
                  Netflix-GPT using React.js, Tailwindcss, Firebase
                </p>
                <a
                  href="https://netflix-gpt4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
