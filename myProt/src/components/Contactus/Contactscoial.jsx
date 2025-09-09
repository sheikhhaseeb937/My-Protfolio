import SingleContactSocial from "../Contactus/Singlesocail";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 text-white">
      <SingleContactSocial link="https://www.linkedin.com/feed/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/sheikhhaseeb937" Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
