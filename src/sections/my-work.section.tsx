import ScratchCard from "react-scratchcard-v2";
import bgCover from "../../public/hm.jpg";
import { GlowingEffectComponent } from "../components/ui/glowing-effect.component";
import { useRef, useEffect, useState } from "react";
import { ShinyTextComponent } from "../components/ui/shiny-text.component";
import gsap from "gsap";
import { TbHandMove } from "react-icons/tb";
import { FaShoppingCart, FaMobileAlt, FaChartLine, FaLaptopCode, FaCogs, FaCloud, FaInfo } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "../components/ui/modal.component";
import { useModal } from "../hooks/useModal";
import { Cube3D, CubeControls } from "../components/ui/3d-cube.component";
import { useTranslation } from "react-i18next";

const getProjects = (t: any) => {
  const projects = t("work.projects", { returnObjects: true }) as any[];
  const icons = [FaShoppingCart, FaMobileAlt, FaChartLine, FaLaptopCode, FaCloud, FaCogs, FaChartLine, FaCogs];
  
  return projects.map((project: any, index: number) => ({
    id: index + 1,
    title: project.title,
    description: project.description,
    image: project.image,
    images: project.images,
    technologies: project.technologies,
    projectDescription: project.projectDescription,
    keyFeatures: project.keyFeatures,
    date: project.date,
    link: project.link,
    icon: icons[index],
  }));
};

const getProjectImages = (project: any) => {
  return project.images || ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"];
};

export const MyWorkSection = () => {
  const { t } = useTranslation();
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const handRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0, z: 0 });
  const [activeTab, setActiveTab] = useState<"3d" | "description">("description");
  const [completedCards, setCompletedCards] = useState<Set<number>>(() => {
    const saved = localStorage.getItem("completedCards");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    const updateWidth = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    localStorage.setItem("completedCards", JSON.stringify([...completedCards]));
  }, [completedCards]);

  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    if (handRefs.current.length > 0) {
      handRefs.current.forEach((handRef) => {
        if (handRef) {
          gsap.to(handRef, {
            scale: 1.2,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      });

      overlayRefs.current.forEach((overlayRef) => {
        if (overlayRef) {
          const cardElement = overlayRef.closest(".group");
          if (cardElement) {
            const handleMouseEnter = () => {
              gsap.killTweensOf(overlayRef);
              gsap.to(overlayRef, {
                opacity: 0,
                duration: 0.7,
                ease: "power2.inOut",
                onComplete: () => {
                  gsap.set(overlayRef, { zIndex: -1000, display: "none" });
                },
              });
            };

            const handleMouseLeave = () => {
              gsap.killTweensOf(overlayRef);
              gsap.set(overlayRef, { zIndex: 10, display: "flex" });
              gsap.to(overlayRef, {
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
              });
            };

            cardElement.addEventListener("mouseenter", handleMouseEnter);
            cardElement.addEventListener("mouseleave", handleMouseLeave);

            cleanupFunctions.push(() => {
              cardElement.removeEventListener("mouseenter", handleMouseEnter);
              cardElement.removeEventListener("mouseleave", handleMouseLeave);
            });
          }
        }
      });
    }

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  const scratchConfig = {
    height: window.innerHeight * 0.25 - 5,
    width: parentWidth - 5,
    image: bgCover,
    finishPercent: 70,
  };

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
    setActiveTab("description");
  };

  const getModalContent = () => {
    if (selectedProject === null) return null;
    const project = getProjects(t).find((p) => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="h-full">
        {/* Mobile Tabs */}
        <div className="lg:hidden mb-6 flex w-full justify-between relative max-md:text-sm">
          <button onClick={() => setActiveTab("3d")} className="w-1/2 py-1 rounded-t-lg cursor-pointer hover:bg-white/10 transition-colors duration-300 ease-in-out">3D Preview</button>
          <button onClick={() => setActiveTab("description")} className="w-1/2 py-1 rounded-t-lg cursor-pointer hover:bg-white/10 transition-colors duration-300 ease-in-out">Description</button>
          <span className={`w-1/2 h-[1px] bg-white rounded-full absolute -bottom-1 duration-300 ease-in-out ${activeTab === "3d" ? "left-0" : "right-0"}`}></span>
          <span className={`w-full h-[1px] bg-white/30 rounded-full absolute -bottom-1 duration-300 ease-in-out left-0`}></span>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 xl:gap-12 h-full">
          {/* Left side - 3D Cube and Controls */}
          <div className="space-y-4 xl:space-y-6">
            <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:mb-6">
              <div className="min-w-10 h-10 xl:w-12 xl:h-12 bg-white/20 backdrop-blur-md border-white/40 border rounded-lg flex items-center justify-center shadow-sm">
                <project.icon className="text-lg xl:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg xl:text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-xs xl:text-sm">{t('modal.interactive3DPreview')}</p>
              </div>
            </div>

            {/* 3D Cube */}
            <Cube3D rotation={cubeRotation} projectImages={getProjectImages(project)} />

            {/* Controls */}
            <div className="flex justify-center">
              <CubeControls
                onRotate={(direction) => {
                  if (direction === "up") {
                    setCubeRotation((prev) => ({ ...prev, x: prev.x + Math.PI / 2 }));
                  } else if (direction === "down") {
                    setCubeRotation((prev) => ({ ...prev, x: prev.x - Math.PI / 2 }));
                  } else if (direction === "left") {
                    setCubeRotation((prev) => ({ ...prev, y: prev.y + Math.PI / 2 }));
                  } else if (direction === "right") {
                    setCubeRotation((prev) => ({ ...prev, y: prev.y - Math.PI / 2 }));
                  }
                }}
                onReset={() => {
                  setCubeRotation({ x: 0, y: 0, z: 0 });
                }}
              />
            </div>
          </div>

          {/* Right side - Project Description */}
          <div className="space-y-6 xl:space-y-8">
            <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:mb-6">
              <div className="min-w-10 h-10 xl:w-12 xl:h-12 bg-white/20 backdrop-blur-md border-white/40 border rounded-lg flex items-center justify-center shadow-sm">
                <FaInfo className="text-lg xl:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg xl:text-2xl font-bold text-white">{t('modal.overview')}</h3>
                <p className="text-gray-400 text-xs xl:text-sm">{project.description}</p>
              </div>
            </div>

            <div className="space-y-3 xl:space-y-4">
              <div className="flex flex-wrap gap-2 xl:gap-3">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="w-16 xl:w-20 py-1 text-center bg-white/10 backdrop-blur-sm border border-gray-500 border-dotted text-gray-300 rounded-md text-xs font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 xl:space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3 xl:mb-4 text-sm xl:text-lg">{t('modal.projectDescription')}</h4>
                <p className="text-gray-300 leading-relaxed text-sm xl:text-base">
                  {project.projectDescription}
                </p>
              </div>
              
              <div className="space-y-2 xl:space-y-3">
                <h4 className="font-semibold text-sm xl:text-lg text-white">{t('modal.keyFeatures')}</h4>
                <ul className="space-y-2 text-xs xl:text-sm text-gray-300">
                  {project.keyFeatures.map((feature: string, index: number) => (
                    <li key={`feature-${index}-${feature.slice(0, 10)}`} className="flex items-center gap-3 xl:gap-4">
                      <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                      <span className="">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project.link && (
              <div className="flex justify-center items-center gap-4 pt-4 xl:pt-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 xl:px-8 py-2 xl:py-3 bg-white/90 text-black rounded-xl cursor-pointer hover:bg-white transition-colors font-medium text-sm xl:text-base shadow-sm hover:shadow-md"
                >
                  {t('modal.visitProject')}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden mt-2 py-2">
          <AnimatePresence mode="wait">
            {activeTab === "3d" && (
              <motion.div 
                key="3d-tab"
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md border-white/40 border rounded-lg flex items-center justify-center shadow-sm">
                  <project.icon className="text-lg" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-xs">{t('modal.interactive3DPreview')}</p>
                </div>
              </div>

              {/* 3D Cube */}
              <Cube3D rotation={cubeRotation} projectImages={getProjectImages(project)} />

              {/* Controls */}
              <div className="flex justify-center">
                <CubeControls
                  onRotate={(direction) => {
                    if (direction === "up") {
                      setCubeRotation((prev) => ({ ...prev, x: prev.x + Math.PI / 2 }));
                    } else if (direction === "down") {
                      setCubeRotation((prev) => ({ ...prev, x: prev.x - Math.PI / 2 }));
                    } else if (direction === "left") {
                      setCubeRotation((prev) => ({ ...prev, y: prev.y + Math.PI / 2 }));
                    } else if (direction === "right") {
                      setCubeRotation((prev) => ({ ...prev, y: prev.y - Math.PI / 2 }));
                    }
                  }}
                  onReset={() => {
                    setCubeRotation({ x: 0, y: 0, z: 0 });
                  }}
                />
              </div>
            </motion.div>
            )}
            

            {activeTab === "description" && (
              <motion.div 
                key="description-tab"
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
              <div className="flex items-center gap-3 mb-4">
                <div className="min-w-10 h-10 bg-white/20 backdrop-blur-md border-white/40 border rounded-lg flex items-center justify-center shadow-sm">
                  <FaInfo className="text-lg" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{t('modal.overview')}</h3>
                  <p className="text-gray-400 text-xs">{project.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="w-16 max-md:w-24   py-1 text-nowrap text-center bg-white/10 backdrop-blur-sm border border-gray-500 border-dotted text-gray-300 rounded-md text-xs font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-3 text-sm">{t('modal.projectDescription')}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {project.projectDescription}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-white">{t('modal.keyFeatures')}</h4>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {project.keyFeatures.map((feature: string, index: number) => (
                      <li key={`feature-mobile-${index}-${feature.slice(0, 10)}`} className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                        <span className="">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.link && (
                <div className="flex justify-center items-center gap-4 pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white/90 text-black rounded-xl cursor-pointer hover:bg-white transition-colors font-medium text-sm shadow-sm hover:shadow-md"
                  >
                    {t('modal.visitProject')}
                  </a>
                </div>
              )}
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="min-h-screen overflow-y-hidden md:h-screen text-white bg-black/50 relative max-md:pt-12">
      <motion.div
        className="absolute inset-0 opacity-30 left-[-200vw]"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(192, 192, 192, 0.3) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          animation: "shimmer 20s ease-in-out infinite",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={true ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div className="max-w-[1500px] mx-auto flex h-full max-[1250px]:flex-col max-md:min-h-screen justify-between">
        {/* Left Section - 2/3 width */}
        <div className="w-2/3 md:pr-8 flex flex-col justify-between relative py-8 max-md:py-2 max-[1250px]:w-full">
          {/* Top Left - Title */}
          <div className="max-[1250px]:flex w-full justify-between items-center">
            <h2 className="text-xl uppercase md:text-2xl font-light relative mx-4 w-fit h-fit flex flex-col">
              <span>
                <ShinyTextComponent text={t('work.subtitle')} speed={4} />
                </span>
              <span className="text-4xl md:text-7xl font-semibold">
                <ShinyTextComponent text={t('work.title').toUpperCase()} speed={4} />
              </span>
            </h2>
            <div className="space-y-2 text-white text-base ml-4 md:text-lg max-w-lg mt-12 max-[1250px]:mt-0 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <div className="h-[1px] w-16 md:w-32 bg-white max-[1250px]:hidden"></div>
              <p className="font-light tracking-wider text-gray-400 text-xs md:text-sm max-[1250px]:text-end max-md:hidden">{t('work.description')}</p>
            </div>
          </div>

          {/* Bottom Left - Circle */}
          <div
            className="absolute bottom-1 left-1 w-[14rem] h-[14rem] md:w-[28rem] md:h-[28rem] rounded-full blur-3xl opacity-60 animate-float-gentle"
            style={{
              background: "radial-gradient(circle, rgba(156, 163, 175, 0.3) 0%, rgba(209, 213, 219, 0.2) 50%, transparent 100%)",
            }}
          ></div>
        </div>

        <div ref={parentRef} className="grid grid-cols-2 mx-2 md:mx-4 gap-1 w-2/3 max-[1250px]:w-full max-[1250px]:p-1! max-md:gap-0.5 max-[1250px]:ml-0! max-md:my-auto max-[1250px]:mb-2">
          {getProjects(t).map((project, index) => {
            let borderClasses = "border border-white/10";
            if (index === 0 || index === 1) {
              borderClasses = "border-l border-r border-b border-white/10";
            }
            if (index === 6 || index === 7) {
              borderClasses = "border-l border-r border-t border-white/10";
            }
            const isLastOrAntLast = index === 6 || index === 7;
            return (
              <div key={project.id} className={`h-full w-full ${borderClasses}  ${isLastOrAntLast ? "max-[1250px]:hidden" : ""} cursor-grab m-1 border-dotted border-gray-500 rounded-xs relative group ${isLastOrAntLast ? "max-[1250px]:hidden" : ""}`}>
                <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />

                {!completedCards.has(project.id) && (
                  <div
                    ref={(el) => {
                      if (el) overlayRefs.current[index] = el;
                    }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm max-md:hidden!"
                  >
                    <div className="flex items-center justify-center">
                      <div
                        ref={(el) => {
                          if (el) handRefs.current[index] = el;
                        }}
                        className="text-[#b5b5b5]"
                      >
                        <TbHandMove size={32} className="md:size-10" />
                      </div>
                    </div>

                    <div className="text-white font-semibold tracking-wide absolute top-2/3 left-1/2 -translate-x-1/2 text-sm md:text-base">
                      <ShinyTextComponent text="Scratch to reveal" speed={4} />
                    </div>
                  </div>
                )}

                {/* Mobile version - sem scratch */}
                <div className="md:hidden flex w-full h-full bg-white/5 backdrop-blur-sm relative">
                  <div className="absolute top-4 left-4 p-2 max-md:p-1 rounded-full text-white border border-white/50 bg-white/30 backdrop-blur-sm">
                    <project.icon className="text-lg max-md:text-xs" />
                  </div>
                  <div className="absolute top-4 right-4 text-white/60 text-xs font-mono">{project.date}</div>
                  <div className="p-4 md:p-6 flex mt-8 md:mt-12 flex-col justify-between w-full max-md:mt-12">
                    <div>
                      <h3 className="text-white text-lg max-md:text-sm font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80 text-xs leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button onClick={() => handleProjectClick(project.id)} className="bg-white cursor-pointer text-black px-4 md:px-6 py-1 rounded-full font-medium text-sm md:text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)]">{t('modal.more')}</button>
                    </div>
                  </div>
                </div>

                {/* Desktop version - com scratch */}
                <div className="hidden md:block h-full">
                  {completedCards.has(project.id) ? (
                    <div className="flex w-full h-full bg-white/5 backdrop-blur-sm relative">
                      <div className="absolute top-4 left-4 p-2 max-md:p-1 rounded-full text-white border border-white/50 bg-white/30 backdrop-blur-sm">
                        <project.icon className="text-lg max-md:text-xs" />
                      </div>
                      <div className="absolute top-4 right-4 text-white/60 text-xs font-mono">Nov 2024</div>
                      <div className="p-4 md:p-6 flex mt-8 md:mt-12 flex-col justify-between w-full max-md:mt-12">
                        <div>
                          <h3 className="text-white text-lg max-md:text-sm font-bold mb-2">{project.title}</h3>
                          <p className="text-white/80 text-xs leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex justify-center mt-4">
                          <button onClick={() => handleProjectClick(project.id)} className="bg-white cursor-pointer text-black px-4 md:px-6 py-1 rounded-full font-medium text-sm md:text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)]">{t('modal.more')}</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ScratchCard
                      {...scratchConfig}
                      onComplete={() => {
                        setCompletedCards((prev) => new Set([...prev, project.id]));
                      }}
                    >
                      <div className="flex w-full h-full bg-white/5 backdrop-blur-sm relative">
                        <div className="absolute top-4 left-4 p-2 max-md:p-1 rounded-full text-white border border-white/50 bg-white/30 backdrop-blur-sm">
                          <project.icon className="text-lg max-md:text-xs" />
                        </div>
                        <div className="absolute top-4 right-4 text-white/60 text-xs font-mono">{project.date}</div>
                        <div className="p-4 md:p-6 flex mt-8 md:mt-12 flex-col justify-between w-full max-md:mt-12">
                          <div>
                            <h3 className="text-white text-lg max-md:text-sm font-bold mb-2">{project.title}</h3>
                            <p className="text-white/80 text-xs leading-relaxed">{project.description}</p>
                          </div>
                          <div className="flex justify-center mt-4">
                            <button
                              onClick={() => handleProjectClick(project.id)}
                              className="bg-white cursor-pointer text-black px-4 md:px-6 py-1 rounded-full font-medium text-sm md:text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)]"
                            >
                              {t('modal.more')}
                            </button>
                          </div>
                        </div>
                      </div>
                    </ScratchCard>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal with dark theme */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} title={selectedProject !== null ? getProjects(t).find((p) => p.id === selectedProject)?.title + " - " + getProjects(t).find((p) => p.id === selectedProject)?.date || "Project" : "Project Details"} theme="dark">
        {getModalContent()}
      </Modal>
    </section>
  );
};