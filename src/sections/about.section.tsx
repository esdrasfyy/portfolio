import { IoAddOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollVelocity from "../components/ui/scroll-velocity.component";
import VariableProximity from "../components/ui/variable-proximity.component";
import { Card3D } from "../components/ui/3d-card.component";
import { Modal } from "../components/ui/modal.component";
import { useModal } from "../hooks/useModal";
import { FaBuilding } from "react-icons/fa";

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
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const meRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const aboutInView = useInView(aboutRef, { once: false });
  const meInView = useInView(meRef, { once: false });
  const journeyInView = useInView(journeyRef, { once: false });
  const skillsInView = useInView(skillsRef, { once: false });
  const techInView = useInView(containerRef, { once: false });

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    openModal();
  };

  const getModalContent = () => {
    if (selectedCard === null) return null;
    const card = experienceCards[selectedCard];

    // Dados da empresa (você pode expandir isso)
    const companyData = {
      "Aégis Capital": {
        logo: "/aegis-logo.png", // Substitua pelo logo real
        about: "Aégis Capital is a leading financial technology company specializing in innovative investment solutions and digital banking platforms.",
        socialMedia: {
          linkedin: "https://linkedin.com/company/aegis-capital",
          website: "https://aegiscapital.com",
          instagram: "https://instagram.com/aegiscapital",
        },
      },
      "GroupLink One": {
        logo: "/grouplink-logo.png",
        about: "GroupLink One is a technology consulting firm focused on digital transformation and enterprise solutions.",
        socialMedia: {
          linkedin: "https://linkedin.com/company/grouplink-one",
          website: "https://grouplinkone.com",
          instagram: "https://instagram.com/grouplinkone",
        },
      },
      "Snapic Tecnologia": {
        logo: "/snapic-logo.png",
        about: "Snapic Tecnologia is a software development company specializing in mobile applications and web solutions.",
        socialMedia: {
          linkedin: "https://linkedin.com/company/snapic-tecnologia",
          website: "https://snapic.com.br",
          instagram: "https://instagram.com/snapictecnologia",
        },
      },
      "Cidade Alta RP": {
        logo: "/cidadealta-logo.png",
        about: "Cidade Alta RP is a digital marketing and web development agency serving local businesses.",
        socialMedia: {
          linkedin: "https://linkedin.com/company/cidade-alta-rp",
          website: "https://cidadealtarp.com.br",
          instagram: "https://instagram.com/cidadealtarp",
        },
      },
    };

    const company = companyData[card.company as keyof typeof companyData] || companyData["Aégis Capital"];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Lado Esquerdo - Informações da Empresa */}
        <div className="space-y-6">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div 
              className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <img
                src={company.logo}
                alt={`${card.company} logo`}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <FaBuilding className="text-white text-2xl hidden" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900">{card.company}</h3>
              <p className="text-gray-600 text-lg">SP, Brazil</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">My Role</h4>
            <p className="text-gray-700 text-lg font-medium">{card.position}</p>
            <p className="text-gray-600 text-sm mt-1">
              {card.startDate} - {card.endDate}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">About {card.company}</h4>
            <p className="text-gray-700 leading-relaxed">{company.about}</p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-semibold text-gray-900 text-lg">Connect with {card.company}</h4>
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {company.socialMedia.linkedin && (
                <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}
              {company.socialMedia.website && (
                <a href={company.socialMedia.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Website
                </a>
              )}
              {"instagram" in company.socialMedia && company.socialMedia.instagram && (
                <a href={company.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Lado Direito - Minhas Informações */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">About My Experience</h4>
            <p className="text-gray-700 leading-relaxed">
              During my time at {card.company}, I had the opportunity to work on challenging projects that allowed me to grow both technically and professionally. I focused on delivering high-quality solutions while maintaining clean, maintainable code and following industry best practices.
            </p>
          </motion.div>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h4 className="font-semibold text-gray-900 text-lg">My Responsibilities</h4>
            <motion.ul 
              className="space-y-3 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.li 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                ></motion.span>
                <span>Led development of scalable applications using modern technologies like React, Node.js, and cloud platforms</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                ></motion.span>
                <span>Collaborated with cross-functional teams to deliver high-quality solutions and meet project deadlines</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.5 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.6 }}
                ></motion.span>
                <span>Implemented best practices for code quality, performance optimization, and security measures</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    );
  };

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
            <motion.div
              className="flex flex-col max-[1250px]:flex-row max-[1250px]:items-center max-[1250px]:justify-between"
              ref={journeyRef}
              initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              animate={journeyInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
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
                <p className="leading-relaxed font-bold max-w-[700px] max-[1250px]:font-semibold max-[870px]:text-sm max-[720px]:hidden">
                  Working autonomously sharpened my ability to manage the full cycle — from design to deployment — while leading impactful projects and adapting to different business needs with agility and precision.
                </p>
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
                      <button
                        onClick={() => handleCardClick(index)}
                        className="w-8 h-8 max-[420px]:w-6 max-[420px]:h-6 flex items-center justify-center bg-secondary rounded-full cursor-pointer hover:-rotate-45 hover:text-2xl text-text-reverse ml-auto transition-all duration-700 absolute top-1/2 -translate-y-1/2 right-4"
                      >
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
          <motion.div
            className="max-[1250px]:flex-row-reverse max-[1250px]:items-center max-[1250px]:justify-between max-[1250px]:flex"
            ref={skillsRef}
            initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            animate={skillsInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
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

      {/* Modal with white theme */}
      <Modal isOpen={isOpen} onClose={closeModal} title={selectedCard !== null ? experienceCards[selectedCard].company : "Experience"} icon={FaBuilding} theme="light">
        {getModalContent()}
      </Modal>
    </section>
  );
};
