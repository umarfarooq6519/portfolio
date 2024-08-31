/* eslint-disable react/no-unescaped-entities */

import Button from "./elements/Button";
const emailURL = "mailto:umar_farooq52@outlook.com";

export default function Contact() {
  return (
    <div id="contact-section" className="container">
      {/* grid cols 12 */}
      <div className="text-container grid grid-cols-12">
        {/* span 8 */}
        <div className="content col-span-8">
          <h3 className="">Contact</h3>
          <h5 className="mt-24">
            Let's discuss your ideas, <br /> design and inspiration.
          </h5>

          <div className="mt-20">
            <Button
              text="E-mail"
              link={emailURL}
              icon={
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
              }
            />
          </div>
        </div>
        {/* span 4 */}
        <div className="wrapper col-span-4 flex items-center justify-center pt-2">
          <div className="dim-text">
            <i className="fa-solid fa-circle fa-2xs fa-beat pr-3 text-sm text-lime-400 opacity-100"></i>
            Available for work!
          </div>
        </div>
      </div>
    </div>
  );
}
