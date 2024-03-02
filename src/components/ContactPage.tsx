export default function ContactPage() {
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
        <ul className="border-2 bg-gray-50 border-gray-400 rounded-[25px] w-full py-6 px-8 flex justify-between">
          <li>
            <i className="fa-solid fa-envelope fa-xl mr-2"></i>
            <a href="mailto:`{email}`">
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                Email me
              </span>
            </a>
          </li>
          <li>
            <span
              className="hover:text-[#132043bf]"
              onClick={() => {
                navigator.clipboard.writeText(email);
              }}
            >
              <i className="fa-solid fa-clipboard fa-lg"></i>
            </span>
          </li>
        </ul>
        <ul className="border-2 bg-gray-50 border-gray-400 rounded-[25px] w-full py-6 px-8 flex justify-between">
          <li>
            <i className="fa-brands fa-whatsapp fa-xl mr-2"></i>
            <a href={whatsapp} target="_blank">
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                Whatsapp
              </span>
            </a>
          </li>
          <li>
            <span
              className="hover:text-[#132043bf]"
              onClick={() => {
                navigator.clipboard.writeText('+92 3244298602');
              }}
            >
              <i className="fa-solid fa-clipboard fa-lg"></i>
            </span>
          </li>
        </ul>
      </div>
      <p className="faded text-base">
        Or place an order directly and we <br /> can start straight away
      </p>
      <div className="w-full text-base poppins flex max-w-xs md:max-w-64 flex-col md:flex-row px-10 md:px-0 items-center gap-4">
        <ul className="border-2 bg-gray-50 border-gray-400 rounded-[25px] w-full py-6 px-8 flex justify-center">
          <li>
            <i className="fa-brands fa-upwork fa-xl mr-2"></i>
            <a
              href="https://www.upwork.com/services/product/development-it-front-end-website-using-html-css-javascript-animations-and-styling-1756304190940692480?ref=fl_profile"
              target="_blank"
            >
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

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

const email = "umar_farooq52@outlook.com";
const whatsapp = "https://wa.me/+923244298602";
