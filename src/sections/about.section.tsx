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
    position: "FullStack JR",
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
    <section id="about" className="h-screen bg-secondary text-text-reverse py-16 relative max-[420px]:py-12">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/about.jpg')",
        }}
      ></div>
      <div className="max-w-[1500px] h-full mx-auto px-8 flex flex-col justify-between max-[720px]:px-4">
        <div className="col-span-4 flex justify-between max-[720px]:flex-col max-[720px]:items-start">
          <h2 className="text-6xl font-light relative max-[1250px]:text-5xl h-fit max-[420px]:text-4xl">
            <motion.span ref={aboutRef} className="font-bold" initial={{ opacity: 0, y: -50, filter: "blur(10px)" }} animate={aboutInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -50, filter: "blur(10px)" }} transition={{ duration: 0.8, ease: "easeOut" }}>
              ABOUT
            </motion.span>
            <br />
            <motion.span
              ref={meRef}
              className="text-4xl absolute -bottom-9 left-0 max-[420px]:text-2xl max-[420px]:-bottom-7"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={meInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              ME
            </motion.span>
          </h2>
          <div className="relative w-[60vw] max-w-[600px] text-end max-[720px]:max-w-full max-[720px]:w-full max-[720px]:mt-12 max-[720px]:text-start">
            <VariableProximity
              label="I'm a full-stack engineer with a passion for designing and delivering scalable, secure, and robust applications."
              className="text-3xl font-semibold max-[1250px]:text-2xl max-[870px]:text-xl max-[720px]:text-base"
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
            <motion.div className="flex flex-col max-[1250px]:flex-row max-[1250px]:items-center max-[1250px]:justify-between" ref={journeyRef} initial={{ opacity: 0, y: -30, filter: "blur(8px)" }} animate={journeyInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -30, filter: "blur(8px)" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
              <h2 className="text-4xl font-bold max-[1250px]:text-3xl max-[720px]:text-xl">Journey.</h2>
              <h3 className="text-xs uppercase opacity-50 font-bold max-[1250px]:text-sm max-[1250px]:mt-3 max-[720px]:mt-2 max-[720px]:text-xs">MY HISTORY</h3>
            </motion.div>
            <div className="flex justify-between items-center w-full max-[1250px]:flex-col max-[1250px]:items-start">
              <div className="space-y-4">
                <div className="relative max-w-[700px] max-[1250px]:max-w-full max-[1250px]:mt-4">
                  <VariableProximity
                    label="With 4+ years in tech, I’m an independent full-stack developer delivering projects for startups, agencies, and enterprises, focused on performance, scalability, and real business impact."
                    className="leading-relaxed text-xl font-thin max-[870px]:text-lg max-[720px]:text-sm"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    containerRef={containerRef}
                    radius={80}
                    falloff="linear"
                  />
                </div>
                <p className="leading-relaxed font-bold max-w-[700px] max-[1250px]:font-semibold max-[870px]:text-sm max-[720px]:hidden">Working autonomously sharpened my ability to manage the full cycle — from design to deployment — while leading impactful projects and adapting to different business needs with agility and precision.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 max-[720px]:gap-2 w-2/5 max-[1250px]:w-full max-[1250px]:grid-cols-4 max-[1250px]:mt-8 max-[720px]:mt-0 max-[870px]:grid-cols-2 max-[220px]:grid-cols-1">
                {experienceCards.map((card, index) => (
                  <Card3D key={index} className="experience-card-js min-w-[200px] max-[720px]:min-w-full" intensity={15} transitionDuration={0.4}>
                    <div className="bg-primary h-24 max-[720px]:h-20 max-[420px]:h-16 text-text relative rounded-md flex p-4 max-[720px]:p-2 flex-col transition-all duration-700 border border-white/20 hover:border-white/40">
                      <h3 className="font-semibold transition-colors duration-700 max-[720px]:text-sm max-[420px]:text-xs">{card.company}</h3>
                      <p className="text-xs font-medium text-gray-300 transition-colors duration-700 max-[420px]:text-[10px]">{card.position}</p>
                      <p className="text-xs text-gray-500 transition-colors duration-700 absolute bottom-4 left-4 max-[720px]:bottom-2 max-[720px]:left-2 max-[420px]:text-[10px]">
                        {card.startDate} - {card.endDate}
                      </p>
                      <button className="w-8 h-8 max-[420px]:w-6 max-[420px]:h-6 flex items-center justify-center bg-secondary rounded-full cursor-pointer hover:-rotate-45 hover:text-2xl text-text-reverse ml-auto transition-all duration-700 absolute top-1/2 -translate-y-1/2 right-4">
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
          <motion.div className="max-[1250px]:flex-row-reverse max-[1250px]:items-center max-[1250px]:justify-between max-[1250px]:flex" ref={skillsRef} initial={{ opacity: 0, y: -30, filter: "blur(8px)" }} animate={skillsInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -30, filter: "blur(8px)" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
            <h2 className="text-4xl font-bold text-end max-[1250px]:text-3xl max-[870px]:text-2xl max-[720px]:text-xl">Skills</h2>
            <h3 className="text-xs uppercase opacity-50 font-bold text-end max-[1250px]:text-sm max-[1250px]:mt-3 max-[720px]:text-xs max-[720px]:mt-0">MY STACK</h3>
          </motion.div>
          <div className="space-y-4">
            <div className="relative max-w-[55%] text-end ml-auto max-[1250px]:max-w-full max-[1250px]:ml-0 max-[1250px]:mt-4 max-[720px]:max-w-full max-[720px]:ml-0 max-[720px]:mt-4">
              <VariableProximity
                label="I architect scalable applications using Next.js, TypeScript, and Nest.js with Relational Databases. I implement CI/CD pipelines, Docker containerization, virtual machines deployment, and follow SOLID principles with Scrum for robust code."
                className="leading-relaxed text-xl font-thin max-[870px]:text-lg max-[720px]:text-sm max-[420px]:leading-5 "
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
          transition={{ duration: 1, ease: "easeOut" }}
        >
        <ScrollVelocity texts={[generateTechString(technologies), generateTechString(technologies)]} velocity={50} className="text-2xl font-semibold tracking-wider max-[1250px]:text-xl max-[870px]:text-lg max-[420px]:text-sm" parallaxClassName="text-semibold" scrollerClassName="text-semibold" />
        </motion.div>
      </div>
    </section>
  );
};
