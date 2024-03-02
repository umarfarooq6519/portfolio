import { useState } from "react";

export default function ContactPage() {
  const email = "umar_farooq52@outlook.com";
  const whatsapp = "+92 324 4298602";
  const emailPath = `mailto:${email}`;
  const whatsappPath = `https://wa.me/${whatsapp}`;

  const upworkLink =
    "https://www.upwork.com/services/product/development-it-front-end-website-using-html-css-javascript-animations-and-styling-1756304190940692480?ref=fl_profile";
  const fancyBox =
    "border-2 bg-gray-50 border-gray-400 rounded-3xl w-full py-5 px-6 flex";

  type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
  const [emailState, setEmailState] = useState(true); //copyToClipboard state
  const [whatsappState, setWhatsappState] = useState(true);

  function copyToClipboard(
    text: string,
    state: boolean,
    setState: SetState<boolean>
  ) {
    navigator.clipboard.writeText(text); //write to clipboard
    setState(!state);
    setTimeout(() => setState(true), 2000); //reset state
  }

  const CopyIcon = ({ state }: { state: boolean }) => {
    if (state) return <i className="fa-solid fa-clipboard fa-lg"></i>;
    else return <i className="fa-solid fa-check fa-lg"></i>;
  };

  return (
    <section className="section-contact w-full flex flex-col items-center gap-4 md:gap-8">
      <div className="contact-headings max-w-sm">
        <h4 className="text-base faded poppins">Get in Touch</h4>
        <h3 className="text-3xl md:text-4xl poppins font-medium">Contact Me</h3>
        <p className="faded text-base pt-4">
          Tell me about your next project and lets create something incredible
          together
        </p>
      </div>

      <div className="contact-list w-full text-base poppins flex max-w-lg flex-col md:flex-row px-10 md:px-0 items-center gap-4">
        <div className={`${fancyBox} justify-between`}>
          <span>
            <i className="fa-solid fa-envelope fa-xl mr-2"></i>
            <a href={emailPath}>
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                Email me
              </span>
            </a>
          </span>
          <span
            title="Copy Email Address"
            className="hover:text-[#132043bf] cursor-pointer"
            onClick={() => copyToClipboard(email, emailState, setEmailState)}
          >
            <CopyIcon state={emailState} />
          </span>
        </div>
        <div className={`${fancyBox} justify-between`}>
          <span>
            <i className="fa-brands fa-whatsapp fa-xl mr-2"></i>
            <a href={whatsappPath} target="_blank">
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                Whatsapp
              </span>
            </a>
          </span>
          <span
            title="Copy Phone Number"
            className="hover:text-[#132043bf] cursor-pointer"
            onClick={() =>
              copyToClipboard(whatsapp, whatsappState, setWhatsappState)
            }
          >
            <CopyIcon state={whatsappState} />
          </span>
        </div>
      </div>
      <p className="faded text-base">
        Or place an order directly and we <br /> can start straight away
      </p>
      <div className="w-full text-base poppins flex max-w-xs md:max-w-64 flex-col md:flex-row px-10 md:px-0 items-center gap-4">
        <ul className={`${fancyBox} justify-center`}>
          <li>
            <i className="fa-brands fa-upwork fa-xl mr-2"></i>
            <a href={upworkLink} target="_blank">
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                Upwork
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
