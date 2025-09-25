import ScratchCard from "react-scratchcard-v2";
import bgCover from "../../public/hm.jpg";
import { GlowingEffectComponent } from "../components/ui/glowing-effect.component";
import { useRef, useEffect, useState } from "react";
import { ShinyTextComponent } from "../components/ui/shiny-text.component";
import gsap from "gsap";
import { TbHandMove } from "react-icons/tb";
import { FaShoppingCart, FaMobileAlt, FaChartLine, FaLaptopCode, FaCogs, FaCloud, FaInfo } from "react-icons/fa";
import { motion } from "motion/react";
import { Modal } from "../components/ui/modal.component";
import { useModal } from "../hooks/useModal";
import { Cube3D, CubeControls } from "../components/ui/3d-cube.component";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    icon: FaShoppingCart,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure banking application with React Native and biometric authentication",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    icon: FaMobileAlt,
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Real-time analytics dashboard with machine learning insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern portfolio with interactive animations and responsive design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    icon: FaLaptopCode,
  },
  {
    id: 5,
    title: "SaaS Platform",
    description: "Scalable software-as-a-service platform with microservices architecture",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    icon: FaCloud,
  },
  {
    id: 6,
    title: "IoT Monitoring",
    description: "Internet of Things monitoring system with real-time data processing",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    icon: FaCogs,
  },
  {
    id: 7,
    title: "CRM System",
    description: "Customer relationship management system with real-time data processing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    icon: FaChartLine,
  },
  {
    id: 8,
    title: "ERP System",
    description: "Enterprise resource planning system with real-time data processing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    icon: FaCogs,
  },
];

const getProjectImages = (projectId: number) => {
  const projectImages = {
    1: ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"],
    2: ["/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg"],
    3: ["/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg"],
    4: ["/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg"],
    5: ["/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg"],
    6: ["/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg"],
    7: ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"],
    8: ["/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg"],
  };
  return projectImages[projectId as keyof typeof projectImages] || projectImages[1];
};

export const MyWorkSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const handRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0, z: 0 });
  const [activeTab, setActiveTab] = useState<'3d' | 'description'>('3d');
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

    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth();
    updateScreenWidth();
    window.addEventListener("resize", updateWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("resize", updateScreenWidth);
    };
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

  const getModalContent = () => {
    if (selectedProject === null) return null;
    const project = projects.find((p) => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="h-full">
        {/* Mobile Tabs */}
        <div className="lg:hidden mb-6">
          <div className="flex bg-gray-800/50 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('3d')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === '3d'
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              3D Preview
            </button>
            <button
              onClick={() => setActiveTab('description')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'description'
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Description
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 h-full">
          {/* Left side - 3D Cube and Controls */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <project.icon className="text-black text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">Interactive 3D Preview</p>
              </div>
            </div>

            {/* 3D Cube */}
            <Cube3D rotation={cubeRotation} projectImages={getProjectImages(project.id)} />

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
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <FaInfo className="text-black text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Overview</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Three.js"].map((tech) => (
                  <span key={tech} className="w-20 py-1 text-center bg-white/10 backdrop-blur-sm border border-gray-500 border-dotted text-gray-300 rounded-md text-xs font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-4 text-lg">Project Description</h4>
                <p className="text-gray-300 leading-relaxed text-base">
                  This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-white">Key Features:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                  <span className="">Interactive 3D visualization with Three.js</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                  <span className="">Responsive design with modern UI/UX</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                  <span className="">Scalable architecture and performance optimization</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                  <span className="">Real-time 3D controls and interactions</span>
                </li>
              </ul>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 pt-6">
              <button className="px-8 py-3 bg-white/90 text-black rounded-xl cursor-pointer hover:bg-white transition-colors font-medium shadow-sm hover:shadow-md">View Live Demo</button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {activeTab === '3d' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <project.icon className="text-black text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">Interactive 3D Preview</p>
                </div>
              </div>

              {/* 3D Cube */}
              <Cube3D rotation={cubeRotation} projectImages={getProjectImages(project.id)} />

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
          )}

          {activeTab === 'description' && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <FaInfo className="text-black text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Overview</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Three.js"].map((tech) => (
                    <span key={tech} className="w-20 py-1 text-center bg-white/10 backdrop-blur-sm border border-gray-500 border-dotted text-gray-300 rounded-md text-xs font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-4 text-lg">Project Description</h4>
                  <p className="text-gray-300 leading-relaxed text-base">
                    This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-white">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-4">
                    <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                    <span className="">Interactive 3D visualization with Three.js</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                    <span className="">Responsive design with modern UI/UX</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                    <span className="">Scalable architecture and performance optimization</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                    <span className="">Real-time 3D controls and interactions</span>
                  </li>
                </ul>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 pt-6">
                <button className="px-8 py-3 bg-white/90 text-black rounded-xl cursor-pointer hover:bg-white transition-colors font-medium shadow-sm hover:shadow-md">View Live Demo</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <section id="work" className="min-h-screen md:h-screen text-white bg-black/50 relative">
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
      <div className="max-w-[1500px] mx-auto flex h-full max-[1250px]:flex-col">
        {/* Left Section - 2/3 width */}
        <div className="w-full md:w-2/3 md:pr-8 flex flex-col justify-between relative py-8 md:py-20 px-4 md:px-8 max-[1250px]:w-full max-[1250px]:pr-0">
          {/* Top Left - Title */}
          <div>
            <h2 className="text-xl md:text-2xl font-light relative">
              <ShinyTextComponent text="MY" speed={4} />
              <br />
              <span className="text-4xl md:text-7xl absolute -bottom-10 md:-bottom-20 left-0 font-semibold">
                <ShinyTextComponent text="WORK" speed={4} />
              </span>
            </h2>
            <div className="space-y-2 text-white text-base md:text-lg max-w-lg mt-16 md:mt-28 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <div className="h-[1px] w-16 md:w-32 bg-white"></div>
              <p className="font-light tracking-wider text-gray-400 text-xs md:text-sm">A collection of projects that showcase my skills, creativity, and dedication to delivering quality results.</p>
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

        <div ref={parentRef} className="grid grid-cols-2 mx-2 md:mx-4 gap-1 w-2/3 max-[1250px]:w-full max-[1250px]:mx-0">
          {(screenWidth < 1250 ? projects.slice(0, 6) : projects).map((project, index) => {
            let borderClasses = "border border-white/10";
            if (index === 0 || index === 1) {
              borderClasses = "border-l border-r border-b border-white/10";
            }
            if (index === 6 || index === 7) {
              borderClasses = "border-l border-r border-t border-white/10";
            }

            return (
              <div key={project.id} className={`h-full w-full ${borderClasses} cursor-grab border-dotted border-gray-500 rounded-xs relative group ${screenWidth < 768 ? "min-h-[200px]" : ""}`}>
                <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />

                {!completedCards.has(project.id) && screenWidth >= 768 && (
                  <div
                    ref={(el) => {
                      if (el) overlayRefs.current[index] = el;
                    }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm"
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

                    <p className="text-white font-semibold tracking-wide absolute top-2/3 left-1/2 -translate-x-1/2 text-sm md:text-base">
                      <ShinyTextComponent text="Scratch to reveal" speed={4} />
                    </p>
                  </div>
                )}

                {completedCards.has(project.id) || screenWidth < 768 ? (
                  <div className="flex w-full h-full bg-white/5 backdrop-blur-sm relative">
                    <div className="absolute top-4 left-4 p-2 rounded-full text-white border border-white/50 bg-white/30 backdrop-blur-sm">
                      <project.icon size={14} />
                    </div>
                    <div className="absolute top-4 right-4 text-white/60 text-xs font-mono">Nov 2024</div>
                    <div className="p-4 md:p-6 flex mt-8 md:mt-12 flex-col justify-between w-full">
                      <div>
                        <h3 className="text-white text-base md:text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed">{project.description}</p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={() => handleProjectClick(project.id)}
                          className="bg-white cursor-pointer text-black px-4 md:px-6 py-1 rounded-full font-medium text-sm md:text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)]"
                        >
                          More
                        </button>
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
                      <div className="absolute top-4 left-4 p-2 rounded-full text-white border border-white/50 bg-white/30 backdrop-blur-sm">
                        <project.icon size={14} />
                      </div>
                      <div className="absolute top-4 right-4 text-white/60 text-xs font-mono">Nov 2024</div>
                      <div className="p-4 md:p-6 flex mt-8 md:mt-12 flex-col justify-between w-full">
                        <div>
                          <h3 className="text-white text-base md:text-lg font-bold mb-2">{project.title}</h3>
                          <p className="text-white/80 text-xs md:text-sm leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex justify-center mt-4">
                          <button
                            onClick={() => handleProjectClick(project.id)}
                            className="bg-white text-black px-4 md:px-6 py-1 rounded-full font-medium text-sm md:text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)]"
                          >
                            More
                          </button>
                        </div>
                      </div>
                    </div>
                  </ScratchCard>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal with dark theme */}
      <Modal isOpen={isOpen} onClose={closeModal} title={selectedProject !== null ? projects.find((p) => p.id === selectedProject)?.title || "Project" : "Project Details"} icon={selectedProject !== null ? projects.find((p) => p.id === selectedProject)?.icon : FaLaptopCode} theme="dark">
        {getModalContent()}
      </Modal>
    </section>
  );
};
