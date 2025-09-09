import ContactMeLeft from "../Contactus/Contactleft"
import ContactMeRight from "../Contactus/Contactright"

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className=" p-8 rounded-3xl bg-black bg-opacity-30 max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="text-4xl md:text-6xl mb-10 text-center font-bold text-yellow-500">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
     <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
