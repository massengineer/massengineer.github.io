import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="mailto:louisjohnmassingham@gmail.com"
          className="text-blue-400 hover:underline"
        >
          <SiGmail size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/louis-massingham-2909a5318"
          className="text-blue-400 hover:underline"
        >
          <FaLinkedin size={50} />
        </a>
      </div>
    </div>
  );
}
