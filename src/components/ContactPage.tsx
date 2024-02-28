export default function ContactPage() {
  return (
    <section className="section-contact w-full flex flex-col gap-4 md:gap-8">
      <div className="contact-headings">
        <h4 className="text-base faded poppins">Get in Touch</h4>
        <h3 className="text-3xl md:text-4xl poppins font-medium">Contact Me</h3>
      </div>

      <div className="contact-list w-full text-base flex justify-center px-4">
        <ul className="border-2 bg-gray-50 border-gray-400 rounded-[25px] w-fit py-3 px-4 md:py-6 md:px-7 flex gap-8">
          <li>
            <i className="fa-solid fa-envelope fa-lg sm:mr-1.5"></i>
            <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
              umar_farooq52@outlook.com
            </span>
          </li>
          <li>
            <i className="fa-solid fa-download fa-lg sm:mr-1.5"></i>
            <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
              Résumé
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
