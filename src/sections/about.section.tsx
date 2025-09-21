import { IoAddOutline } from "react-icons/io5";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollVelocity from "../components/ui/scroll-velocity.component";
import VariableProximity from "../components/ui/variable-proximity.component";
import { Card3D } from "../components/ui/3d-card.component";

const technologies = ["React", "TypeScript", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Swiper.js", "Vite", "Git", "Docker", "AWS", "Vercel", "Figma", "Adobe XD", "JavaScript", "HTML5", "CSS3", "SASS", "Webpack", "Jest", "Cypress"];

const generateTechString = (techs: string[], separator: string = "   ⇢   ") => {
  return techs.join(separator);
};

const experienceCards = [
  {
    company: "Aégis Capital",
    position: "Tech Lead SR",
    startDate: "Feb 2025",
    endDate: "Present",
    isFirst: true,
  },
  {
    company: "GroupLink One",
    position: "Frontend SR",
    startDate: " 2025",
    endDate: "Ago 2025",
    isFirst: false,
  },
  {
    company: "Snapic Tecnologia",
    position: "FullStack PL",
    startDate: "Dez 2024",
    endDate: "Fev 2025",
    isFirst: false,
  },
  {
    company: "Cidade Alta RP",
    position: "Frontend JR",
    startDate: "Nov 2023",
    endDate: "Out 2024",
    isFirst: false,
  },
];

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const meRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const aboutInView = useInView(aboutRef, { once: false });
  const meInView = useInView(meRef, { once: false });
  const journeyInView = useInView(journeyRef, { once: false });
  const skillsInView = useInView(skillsRef, { once: false });
  const techInView = useInView(containerRef, { once: false });

  return (
    <section id="about" className="h-screen bg-secondary text-text-reverse py-16">
      <div className="max-w-[1500px] h-full mx-auto px-8 flex flex-col justify-between">
        <div className="col-span-4 flex justify-between">
          <h2 className="text-6xl font-light relative">
            <motion.span ref={aboutRef} className="font-bold" initial={{ opacity: 0, y: -50, filter: "blur(10px)" }} animate={aboutInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -50, filter: "blur(10px)" }} transition={{ duration: 0.8, ease: "easeOut" }}>
              ABOUT
            </motion.span>
            <br />
            <motion.span
              ref={meRef}
              className="text-4xl absolute bottom-2 left-0"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={meInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              ME
            </motion.span>
          </h2>
          <div className="relative w-[600px] text-end">
            <VariableProximity
              label="I'm a full-stack engineer with a passion for designing and delivering scalable, secure, and robust applications."
              className="text-3xl font-semibold"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={80}
              falloff="linear"
            />
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="w-full">
            <motion.div ref={journeyRef} initial={{ opacity: 0, y: -30, filter: "blur(8px)" }} animate={journeyInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -30, filter: "blur(8px)" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
              <h2 className="text-4xl font-bold">Journey.</h2>
              <h3 className="text-xs uppercase opacity-50 font-bold">MY HISTORY</h3>
            </motion.div>
            <div className="flex justify-between items-center w-full">
              <div className="space-y-4">
                <div className="relative max-w-[700px]">
                  <VariableProximity
                    label="With 4+ years in tech, I’m an independent full-stack developer delivering projects for startups, agencies, and enterprises, focused on performance, scalability, and real business impact."
                    className="leading-relaxed text-xl font-thin"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    containerRef={containerRef}
                    radius={80}
                    falloff="linear"
                  />
                </div>
                <p className="leading-relaxed font-bold max-w-[700px]">Working autonomously sharpened my ability to manage the full cycle — from design to deployment — while leading impactful projects and adapting to different business needs with agility and precision.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-2/5">
                {experienceCards.map((card, index) => (
                  <Card3D key={index} className="experience-card-js" intensity={15} transitionDuration={0.4}>
                    <div className="bg-primary h-24 text-text relative rounded-md flex p-4 flex-col transition-all duration-700 border border-white/20 hover:border-white/40">
                      <h3 className="font-semibold transition-colors duration-700">{card.company}</h3>
                      <p className="text-xs font-medium text-gray-300 transition-colors duration-700">{card.position}</p>
                      <p className="text-xs text-gray-500 transition-colors duration-700 absolute bottom-4 left-4">
                        {card.startDate} - {card.endDate}
                      </p>
                      <button className="w-8 h-8 flex items-center justify-center bg-secondary rounded-full cursor-pointer hover:-rotate-45 hover:text-2xl text-text-reverse ml-auto transition-all duration-700 absolute top-1/2 -translate-y-1/2 right-4">
                        <IoAddOutline />
                      </button>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 w-full">
          <motion.div ref={skillsRef} initial={{ opacity: 0, y: -30, filter: "blur(8px)" }} animate={skillsInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -30, filter: "blur(8px)" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
            <h2 className="text-4xl font-bold text-end">Skills</h2>
            <h3 className="text-xs uppercase opacity-50 font-bold text-end">MY STACK</h3>
          </motion.div>
          <div className="space-y-4">
            <div className="relative max-w-[55%] text-end ml-auto">
              <VariableProximity
                label="I architect scalable applications using Next.js, TypeScript, and Nest.js with Relational Databases. I implement CI/CD pipelines, Docker containerization, virtual machines deployment, and follow SOLID principles with Scrum for robust code."
                className="leading-relaxed text-xl font-thin"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={80}
                falloff="linear"
              />
            </div>
          </div>
        </div>
        <motion.div
          ref={containerRef}
          style={{ position: "relative" }}
          className="rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
          animate={techInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 100, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <ScrollVelocity texts={[generateTechString(technologies), generateTechString(technologies)]} velocity={50} className="text-2xl font-semibold tracking-wider" parallaxClassName="text-semibold" scrollerClassName="text-semibold" />
        </motion.div>
      </div>
    </section>
  );
};
