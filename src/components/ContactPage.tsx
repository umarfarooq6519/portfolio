export default function ContactPage() {
  return (
    <section className="contactSection mb-10 border-2 flex justify-around">
      <div className="contact-left border shadow-lg max-w-3xl rounded-3xl p-6 lg:px-20 lg:py-10 ">
        <h3 className="text-2xl md:text-3xl poppins font-medium">
          Get in Touch
        </h3>
        <p className="pt-3">
          For professional and polished website development services, I'm your
          go-to frontend web developer. Reach out to me ASAP.
        </p>
        <ul className="contact-icons-list text-base flex flex-col pt-4 gap-1">
          <li>
            <i className="fa-solid fa-envelope"></i> umar_farooq52@outlook.com
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> Lahore, Pakistan
          </li>
        </ul>
      </div>

      <div className="contact-right flex flex-col">
        <div className="name-form w-full max-w-xs">
          <label htmlFor="name" className="block text-base leading-6">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400  focus:ring-1 focus:ring-gray-300  sm:leading-6"
          />
        </div>

        <div className="subject-form w-full max-w-sm">
          <label htmlFor="subject" className="block text-base leading-6">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            autoComplete="given-subject"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </section>
  );
}
