import ContactInfo from "../Contactus/ContactInfo";
import ContactSocial from "../Contactus/Contactscoial";
import img from "../../assets/email-image.png";

const ContactMeRight = () => {
  return (
    <div className="w-full max-[645px]:block   lg:w-1/2 flex flex-col items-center justify-center gap-10 px-4 py-6">
      {/* Responsive Image */}
      <img
        src={img}
        alt="email illustration"
        className="w-full max-w-xs sm:max-w-sm object-contain"
      />

      {/* Contact Info & Social */}
      <div className="w-full flex flex-col items-center gap-6">
        <ContactInfo />
        <ContactSocial />
      </div>
    </div>
  );
};

export default ContactMeRight;
