/* eslint-disable react/no-unescaped-entities */
import socialLinks from "../links";

import ButtonLink from "./elements/ButtonLink";

export default function Contact() {
  return (
    <div id="contact-section" className="container">
      {/* grid cols 12 */}
      <div className="text-container flex flex-col gap-10">
        {/* span 8 */}
        <div className="content flex flex-col">
          <h3 className="">Contact</h3>
          <h5 className="mt-20">
            Let's discuss your ideas, <br /> design and inspiration.
          </h5>
          <div className="wrapper justify-left mt-5 flex items-center">
            <div className="dim-text w-full lg:-mt-32 lg:text-right">
              <i className="fa-solid fa-circle fa-2xs fa-beat pr-3 text-sm text-lime-400 opacity-100"></i>
              Available for work!
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ButtonLink text="E-mail" link={socialLinks.email} />
        </div>
      </div>
    </div>
  );
}
