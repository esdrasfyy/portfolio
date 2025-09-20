import { IoAddOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollVelocity from "../components/ui/scroll-velocity.component";
import VariableProximity from "../components/ui/variable-proximity.component";

const technologies = ["React", "TypeScript", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Swiper.js", "Vite", "Git", "Docker", "AWS", "Vercel", "Figma", "Adobe XD", "JavaScript", "HTML5", "CSS3", "SASS", "Webpack", "Jest", "Cypress"];

const generateTechString = (techs: string[], separator: string = "   ⇢   ") => {
  return techs.join(separator);
};

const experienceCards = [
  {
    company: "TechCorp Solutions",
    position: "Senior Frontend Developer",
    startDate: "2022",
    endDate: "Present",
    isFirst: true,
  },
  {
    company: "Digital Agency Pro",
    position: "Full Stack Developer",
    startDate: "2020",
    endDate: "2022",
    isFirst: false,
  },
  {
    company: "StartupX",
    position: "React Developer",
    startDate: "2019",
    endDate: "2020",
    isFirst: false,
  },
  {
    company: "WebStudio",
    position: "Junior Developer",
    startDate: "2018",
    endDate: "2019",
    isFirst: false,
  },
];

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs para animações
  const titleRef = useRef<HTMLDivElement>(null);
  const journeyTitleRef = useRef<HTMLDivElement>(null);
  const journeyParagraphRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const skillsTitleRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  // useInView para cada elemento
  const titleInView = useInView(titleRef, { once: false });
  const journeyTitleInView = useInView(journeyTitleRef, { once: false });
  const journeyParagraphInView = useInView(journeyParagraphRef, { once: false });
  const cardsInView = useInView(cardsRef, { once: false });
  const skillsTitleInView = useInView(skillsTitleRef, { once: false });
  const techInView = useInView(techRef, { once: false });

  // Variantes de animação
  const titleVariants = {
    hidden: { opacity: 0, y: -50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -50, filter: "blur(10px)" },
  };

  const journeyTitleVariants = {
    hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -30, filter: "blur(8px)" },
  };

  const journeyParagraphVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 30, filter: "blur(8px)" },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 50, filter: "blur(8px)" },
  };

  const skillsTitleVariants = {
    hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -30, filter: "blur(8px)" },
  };

  const techVariants = {
    hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 100, filter: "blur(10px)" },
  };
  useEffect(() => {
    const experienceCards = document.querySelectorAll(".experience-card-js");

    const handleButtonMouseEnter = (e: Event) => {
      const button = e.target as HTMLElement;
      const card = button.closest(".experience-card-js") as HTMLElement;
      const title = card?.querySelector("h3") as HTMLElement;
      const descriptions = card?.querySelectorAll("p") as NodeListOf<HTMLElement>;

      if (card) {
        card.style.backgroundColor = "#ffffff";
        card.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
        if (title) title.style.color = "#000000";
        if (descriptions) {
          descriptions.forEach((desc) => {
            desc.style.color = "#000000";
          });
        }
        if (button) {
          button.style.backgroundColor = "#000000";
          button.style.color = "#ffffff";
        }
        card.classList.add("hover-border-inner");
      }
    };

    const handleButtonMouseLeave = (e: Event) => {
      const button = e.target as HTMLElement;
      const card = button.closest(".experience-card-js") as HTMLElement;
      const title = card?.querySelector("h3") as HTMLElement;
      const descriptions = card?.querySelectorAll("p") as NodeListOf<HTMLElement>;

      if (card) {
        card.style.backgroundColor = "#000000";
        card.style.boxShadow = "none";
        if (title) title.style.color = "#ffffff";
        if (descriptions) {
          descriptions.forEach((desc, index) => {
            if (index === 0) {
              desc.style.color = "#d1d5db"; // text-gray-300
            } else {
              desc.style.color = "#6b7280"; // text-gray-500
            }
          });
        }
        if (button) {
          button.style.backgroundColor = "#ffffff";
          button.style.color = "#000000";
        }
        card.classList.remove("hover-border-inner");
      }
    };

    experienceCards.forEach((card) => {
      const button = card.querySelector("button");
      if (button) {
        button.addEventListener("mouseenter", handleButtonMouseEnter);
        button.addEventListener("mouseleave", handleButtonMouseLeave);
      }
    });

    return () => {
      experienceCards.forEach((card) => {
        const button = card.querySelector("button");
        if (button) {
          button.removeEventListener("mouseenter", handleButtonMouseEnter);
          button.removeEventListener("mouseleave", handleButtonMouseLeave);
        }
      });
    };
  }, []);

  return (
    <section id="about" className="h-screen bg-secondary text-text-reverse py-16">
      <div className="max-w-[1500px] h-full mx-auto px-8 flex flex-col justify-between">
        <motion.div ref={titleRef} className="col-span-4 flex justify-between" variants={titleVariants} initial="hidden" animate={titleInView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-6xl font-light relative">
            <span className="font-bold">ABOUT</span>
            <br />
            <span className="text-4xl absolute bottom-2 left-0">ME</span>
          </h2>
          <div className="relative max-w-xl w-full text-end">
            <VariableProximity
              label="I'm a software engineer with a passion for building scalable and efficient web applications."
              className="text-3xl font-semibold"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={80}
              falloff="linear"
            />
          </div>
        </motion.div>
        <div className="flex justify-between gap-8">
          <div className="w-full">
            <motion.div ref={journeyTitleRef} variants={journeyTitleVariants} initial="hidden" animate={journeyTitleInView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
              <h2 className="text-4xl font-bold">Journey.</h2>
              <h3 className="text-xs uppercase opacity-50 font-bold">MY HISTORY</h3>
            </motion.div>
            <div className="flex justify-between items-center w-full">
              <div className="space-y-4">
                <div className="relative max-w-[700px]">
                <VariableProximity
                  label="Unlock your digital potential with custom web solutions that drive results. I specialize in creating high-performance websites and applications that transform your business goals into digital success."
                    className="leading-relaxed text-xl font-thin"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={containerRef}
                  radius={80}
                  falloff="linear"
                  />
                  </div>
                <motion.p ref={journeyParagraphRef} className="leading-relaxed font-bold max-w-[700px]" variants={journeyParagraphVariants} initial="hidden" animate={journeyParagraphInView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
                  Whether you need a fast landing page, a complex e-commerce platform, or a custom web application, I deliver solutions that exceed expectations and drive measurable results.
                </motion.p>
              </div>
              <motion.div ref={cardsRef} className="grid grid-cols-2 gap-4 w-2/5" variants={cardVariants} initial="hidden" animate={cardsInView ? "visible" : "exit"} transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}>
                {experienceCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="experience-card-js bg-primary h-24 text-text relative rounded-md flex p-4 flex-col transition-all duration-700 border border-white/20"
                    initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                    animate={cardsInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                  >
                    <h3 className="font-semibold transition-colors duration-700">{card.company}</h3>
                    <p className="text-xs font-medium text-gray-300 transition-colors duration-700">{card.position}</p>
                    <p className="text-xs text-gray-500 transition-colors duration-700 absolute bottom-4 left-4">
                      {card.startDate} - {card.endDate}
                    </p>
                    <button className="w-8 h-8 flex items-center justify-center bg-secondary rounded-full cursor-pointer hover:-rotate-45 hover:text-2xl text-text-reverse ml-auto transition-all duration-700 absolute top-1/2 -translate-y-1/2 right-4">
                      <IoAddOutline />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="space-y-6 w-full">
          <motion.div ref={skillsTitleRef} variants={skillsTitleVariants} initial="hidden" animate={skillsTitleInView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
            <h2 className="text-4xl font-bold text-end">Skills</h2>
            <h3 className="text-xs uppercase opacity-50 font-bold text-end">MY STACK</h3>
          </motion.div>
          <div className="space-y-4">
            <div className="relative max-w-[55%] text-end ml-auto">
              <VariableProximity
                label="Turning ideas into digital experiences that matter. From front-end design. From front-end design to scalable back-end systems, I build solutions with performance, clarity, and impact."
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
        <motion.div ref={techRef} style={{ position: "relative" }} className="rounded-2xl overflow-hidden" variants={techVariants} initial="hidden" animate={techInView ? "visible" : "exit"} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}>
          <ScrollVelocity texts={[generateTechString(technologies), generateTechString(technologies)]} velocity={50} className="text-2xl font-semibold tracking-wider" parallaxClassName="text-semibold" scrollerClassName="text-semibold" />
        </motion.div>
      </div>
    </section>
  );
};
