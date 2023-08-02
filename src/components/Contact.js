import { useState } from "react";
import { HiMapPin, HiOutlineEnvelope, HiUser } from "react-icons/hi2";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="contact" className="bg-black sm:p-24 p-14 text-white">
      <div className="text-center m-4 font-semibold ">
        <p className="text-3xl">Contact me</p>
        <p>
          -- <span className="text-red-600 px-2 text-lg">get in touch</span>
          --
        </p>
      </div>
      <div className="sm:flex items-center justify-around wrap">
        <div className="font-semibold text-lg mb-10">
          <div className="pt-5">Reach Out to me!</div>
          <p className="pt-5 pb-5">
            Discuss a Project or just want to say Hi? My inbox is open for all.
          </p>
          <div className="flex items-center">
            <span className="py-2 w-16 text-red-600 text-3xl">
              <HiUser />
            </span>

            <div className="pt-2">
              <div>Name</div>
              <p>Santosh Kumar Sharma</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="py-2 w-16 text-red-600 text-3xl">
              <HiMapPin />
            </span>

            <div className="pt-2">
              <div>Address</div>
              <p>Bangalore, India</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="py-2 w-16 text-red-600 text-3xl">
              <HiOutlineEnvelope />
            </span>

            <div className="pt-2">
              <div>Email</div>
              <p>santosh37kr@gmail.com</p>
            </div>
          </div>

          <div className="py-10 pb-5">
            <p className="pb-5">Stay Connected</p>
            <div className="flex items-center space-x-5">
              <div>
                <a
                  href="https://www.linkedin.com/in/santosh-kumar-sharma-15b132168/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-12 w-12"
                    src="/images/Iinkedin.png"
                    alt="Santosh Linkedin"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/sujeet.sharma.31924"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/images/facebook.png"
                    alt="Santosh Facebook"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/santoshsharma27"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/images/git.png"
                    alt="Santosh Git"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold">Message Me</div>
          <form className=" text-black" onSubmit={handleSubmit}>
            <div className="sm:space-x-8 sm:py-5 mb-5 pt-5 space-y-8">
              <input
                className="px-5 py-3 rounded-md w-72"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="px-5 py-3 rounded-md w-72"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-5">
              <input
                className="px-5 py-3 rounded-md sm:w-[610px] w-72"
                type="text"
                placeholder="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="py-5">
              <textarea
                className="px-5 py-3 rounded-md sm:w-[610px] sm:h-[200px] h-48 w-72"
                placeholder="Describe Project..."
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="py-5">
              <button className="bg-red-700 px-5 py-3 rounded-lg font-semibold text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
