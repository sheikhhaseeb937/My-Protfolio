import ContactForm from "../Contactus/Contactform";
import ContactText from "../Contactus/Contacttext";

const ContactMeLeft = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-8 px-4 py-6">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
