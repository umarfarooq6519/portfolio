/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import socialLinks from "../links";
import ButtonLink from "./elements/ButtonLink";

export default function Contact() {
  return (
    <div id="contact-section" className="container">
      {/* grid cols 12 */}
      <div className="text-container !mt-0 flex flex-col gap-10">
        {/* span 8 */}
        <div className="content flex flex-col">
          <div className="overflow-hidden">
            <motion.h3
              initial={{
                // opacity: 0,
                y: 100,
              }}
              whileInView={{
                // opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8, // Adjust the duration for smoother scaling
                ease: [0.1, 1, 0.8, 1], // Smooth out the easing as it returns to original size
                delay: 0.5,
              }}
              viewport={{
                once: true, // Triggers the animation once when it comes into view
                amount: 0.1, // Partially visible to trigger
              }}
              className="border-red-300 pt-20 md:pt-36 lg:pt-44 xl:pt-52"
            >
              Contact
            </motion.h3>
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
          >
            <h5 className="mt-14 lg:mt-20">
              Let's discuss your ideas, <br /> design and inspiration.
            </h5>
            <div className="wrapper justify-left mt-5 flex items-center">
              <div className="dim-text w-full lg:-mt-32 lg:text-right">
                <i className="fa-solid fa-circle fa-2xs fa-beat pr-3 text-sm text-lime-400 opacity-100"></i>
                Available for work!
              </div>
            </div>
            <div className="mt-8">
              <ButtonLink text="E-mail" link={socialLinks.email} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
