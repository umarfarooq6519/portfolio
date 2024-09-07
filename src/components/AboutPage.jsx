import { motion } from "framer-motion";

import Contact from "./Contact";
import ButtonHref from "./elements/ButtonHref";
const resumeURL = "/resume.pdf";

export default function AboutPage() {
  return (
    <>
      <section className="about-page">
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <hr className="text-container container border-gray-400" />
        <Contact />
      </section>
    </>
  );
}

// fhd:left-40 fhd:w-96 relative left-32 z-10 -mb-32 hidden w-80 rounded-lg
function AboutSection() {
  return (
    <div className="container">
      <div className="flex min-h-screen items-center justify-center">
        <div className="heading flex flex-col items-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: 280,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
                ease: [0.1, 1, 0.8, 1],
              }}
              className="text-[5.7rem] xs:max-md:text-[6rem] md:text-[12rem] lg:text-[16rem] 2xl:text-[18rem]"
            >
              About
            </motion.h1>
          </div>
          <div>
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.5,
              }}
              src="/profile.JPEG"
              alt=""
              className="relative -left-24 -top-5 w-56 rounded-lg xs:max-sm:-left-28 md:-top-16 md:w-80 lg:-left-32 lg:-top-24 lg:max-xl:w-96 fhd:w-[23em]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div id="services-section" className="bg-primary text-secondary">
      <div className="container px-5 pb-20 pt-32 lg:pb-32 lg:pt-56 2xl:px-44 fhd:pt-80">
        <div className="flex gap-14 max-xl:flex-col xl:gap-56">
          <div className="">
            <div className="services mt-0">
              {[
                "Art",
                "Direction",
                "Branding",
                "UX / UI",
                "Bespoke",
                "Visuals",
              ].map((service, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.h4
                    initial={{
                      opacity: 0.1,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.8,
                    }}
                  >
                    {service}
                  </motion.h4>
                </div>
              ))}
            </div>
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
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            className="flex flex-col items-start max-xl:gap-28 xl:justify-between xl:gap-10"
          >
            <p className="text-base lg:leading-snug lg:max-xl:text-xl fhd:text-xl">
              I design and develop websites with a deep understanding of brand
              identity, blending technical expertise with a keen eye for detail.
              My skills allow me to create seamless digital experiences, from
              UI/UX design to custom websites. I excel when diving into the
              intricacies of a brands story, ensuring that every element of the
              website reflects and communicate the essence of the brand.
            </p>
            <div className="pl-0 xl:w-full xl:text-left">
              <ButtonHref text="Résumé" href={resumeURL} theme="dark" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div id="experience-section" className="text-container container">
      {/* grid cols 12 */}
      <div className="flex gap-10 pt-0 max-xl:flex-col">
        {/* col 8 */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{
            amount: 0.5,
            once: true,
          }}
          className="flex h-full xl:max-fhd:max-w-3xl fhd:max-w-5xl"
        >
          <h5>
            I’m Umar, an undergraduate studying Computer Sciences <i>+</i> over
            three years of experience in crafting websites that blend simplicity
            with uniqueness.
          </h5>
        </motion.div>
        {/* col 4 */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          viewport={{
            amount: 1,
            once: true,
          }}
          className="flex justify-end pr-0 pt-1 xl:w-full"
        >
          <p className="dim-text">
            *Experience & <br /> Education
          </p>
        </motion.div>
      </div>
    </div>
  );
}
