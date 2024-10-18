import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"; // Correcting FaSquareXTwitter

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/pavanvasa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Pawanvasa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/pavan_vasa/profilecard/?igsh=Y3J2cnVibDFyM3lw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaSquareXTwitter />
      </a>
    </div>
  </nav>
  );
};

export default Navbar;