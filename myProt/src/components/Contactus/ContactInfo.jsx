import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInf from "./Singleinfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInf  text="sheikhaseeb937@gmail.com" Image={HiOutlineMail} />
      <SingleInf text="+92 3150006458" Image={FiPhone} />
      <SingleInf text="Karachi Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
