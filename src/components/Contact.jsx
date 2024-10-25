import { useState } from "react";
import { HiMapPin, HiOutlineEnvelope, HiUser } from "react-icons/hi2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Set timer to hide submission message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div id="contact" className="bg-black sm:p-16 p-14 text-white">
      <div className="text-center m-4 font-semibold ">
        <p className="text-3xl">Contact me</p>
        <p>
          -- <span className="text-red-600 px-2 text-lg">get in touch</span> --
        </p>
      </div>
      <div className="lg:flex items-center justify-around wrap">
        <div className="font-semibold text-lg mb-10">
          <div className="pt-5">Reach Out to me!</div>
          <p className="pt-5 pb-5">
            Discuss a Project or just want to say Hi? My inbox is open for all.
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4">
            <span className="py-2 w-16 text-red-600 text-3xl">
              <HiUser />
            </span>
            <div className="pt-2 lg:pl-2">
              <div className="text-lg">Name</div>
              <p className="text-base">Santosh Kumar Sharma</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4">
            <span className="py-2 w-16 text-red-600 text-3xl">
              <HiMapPin />
            </span>
            <div className="pt-2 lg:pl-2">
              <div className="text-lg">Address</div>
              <p className="text-base">Bangalore, India</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4">
            <span className="py-2 w-16 text-red-600 text-3xl">
              <HiOutlineEnvelope />
            </span>
            <div className="pt-2 lg:pl-2">
              <div className="text-lg">Email</div>
              <p className="text-base">santosh37kr@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="py-10 pb-5">
            <p className="pb-5">Stay Connected</p>
            <div className="flex items-center space-x-2">
              <div>
                <a
                  href="https://www.linkedin.com/in/santoshsharma37/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:bg-white-600 text-red-600">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/santoshsharma27"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:bg-white-600 text-red-600">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/sujeet.sharma.31924"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:bg-white-600 text-red-600">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Field */}
        <div>
          <div className="font-semibold">Message Me</div>
          {submitted && (
            <p className="text-center text-white font-semibold pt-5">
              Thank you for reaching out! We’ll get back to you soon.
            </p>
          )}
          <form className="text-black" onSubmit={handleSubmit}>
            <div className="sm:py-5 pt-5 space-y-8">
              <input
                className="px-5 py-3 rounded-md w-full"
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="px-5 py-3 rounded-md w-full"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="py-5">
              <input
                className="px-5 py-3 rounded-md w-full"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="py-5">
              <textarea
                className="px-5 py-3 rounded-md w-full"
                name="message"
                rows="7"
                placeholder="Describe Project..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="py-5">
              <button className="bg-red-600 px-5 py-3 rounded-lg font-semibold text-white hover:bg-red-700">
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
