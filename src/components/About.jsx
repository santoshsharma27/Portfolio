import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div id="about" className="sm:p-14 p-10">
      <div className="text-center m-4 font-semibold text-3xl">
        <p>About Me</p>
      </div>
      <div className="sm:flex items-center justify-center sm:space-x-20 font-semibold text-lg">
        <div className="pb-10 flex flex-col items-center justify-center">
          <img
            className="sm:rounded-2xl w-[300px] h-[300px] rounded-2xl object-cover"
            src="/images/Santosh.jpg"
            alt="Santosh"
          />

          <div className="flex justify-start w-[300px] mt-2">
            <a
              href="https://www.linkedin.com/in/santoshsharma37/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 text-red-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github.com/santoshsharma27"
              target="_blank"
              rel="noreferrer"
              className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 text-red-600"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.facebook.com/sujeet.sharma.31924"
              target="_blank"
              rel="noreferrer"
              className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 text-red-600"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>
        </div>
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold mb-3">
            I'm <span className="text-red-600 animate-running">Santosh</span>{" "}
            and I'm a{" "}
            <span className="text-red-600 animate-pulse">
              React.js Developer
            </span>
          </h1>
          <p className="sm:pb-5 pb-5 leading-relaxed text-justify">
            I am a dedicated Front-end Developer focused on creating attractive
            and user-friendly websites. I am passionate about transforming
            design concepts into interactive digital experiences, continually
            improving my skill set to stay updated with the latest industry
            trends. My portfolio showcases a variety of projects that
            demonstrate my ability to deliver responsive and dynamic web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
