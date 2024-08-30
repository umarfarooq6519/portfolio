/* eslint-disable react/no-unescaped-entities */

import Button from "./elements/Button";

export default function Intro() {
  return (
    <section id="intro" className="">
      {/* container > 12 cols */}
      <div className="container grid grid-cols-12 px-32 pb-36 pt-44">
        {/* content > span 8 */}
        <div className="content col-span-8 flex flex-col items-start">
          <h5>
            I'm a web *craftsman with a knack for coding and design. From
            concept to deployment, I build engaging websites, streamline user
            interactions, and ensure every detail is pixel-perfect. Let's make
            your digital footprint stand out.
          </h5>
          <div className="mt-20">
            <Button
              text="About"
              link="/about"
              icon={
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
              }
            />
          </div>
        </div>
        {/* wrapper span 4 */}
        <div className="wrapper col-span-4 flex justify-center p-4">
          <div className="dim-text">
            *Born, raised and
            <br />
            based in Pakistan
          </div>
        </div>
      </div>
    </section>
  );
}
