import { MdKeyboardArrowDown, MdOutlineWhatsapp } from "react-icons/md";
import { PiChartLineLight, PiStorefrontLight } from "react-icons/pi";
import { SilhouetteCardHome } from "../components/home/silhouette-card.home";
import { ShinyTextComponent } from "../components/ui/shiny-text.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgScrollV } from "react-icons/cg";
import { Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<any>(null);

  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const swiperRef_anim = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const h1InView = useInView(h1Ref, { once: false });
  const h2InView = useInView(h2Ref, { once: false });
  const pInView = useInView(pRef, { once: false });
  const buttonInView = useInView(buttonRef, { once: false });
  const swiperInView = useInView(swiperRef_anim, { once: false });
  const indicatorsInView = useInView(indicatorsRef, { once: false });
  const scrollInView = useInView(scrollRef, { once: false });
  const h1Variants = {
    hidden: { opacity: 0, y: -50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -50, filter: "blur(10px)" },
  };

  const h2Variants = {
    hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -30, filter: "blur(8px)" },
  };

  const pVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 30, filter: "blur(8px)" },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: 50, filter: "blur(10px)" },
  };

  const swiperVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const indicatorsVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 50, scale: 0.5 },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.8 },
  };

  const slideTypes = ["E-commerce", "CRM", "Landing", "Analytics"];

  return (
    <section id="hero" className="flex justify-between items-center w-full h-screen px-8 max-w-[1500px] mx-auto overflow-hidden">
      <div className="flex flex-col w-2/3 h-full justify-center relative">
        <div className="text-white text-7xl font-light relative mb-8 z-10">
          <motion.h1 ref={h1Ref} className="relative w-fit" variants={h1Variants} initial="hidden" animate={h1InView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="absolute top-10 -left-20 w-16 h-px border-b border-dotted border-gray-500"></div>
            <ShinyTextComponent text="Hi" speed={4} />, I'm <ShinyTextComponent text="Fernando Esdras" speed={4} />,
          </motion.h1>
          <motion.h2 ref={h2Ref} variants={h2Variants} initial="hidden" animate={h2InView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            turning <ShinyTextComponent text="ideas" speed={4} /> into <ShinyTextComponent text="code" speed={4} />.
          </motion.h2>
          <motion.p ref={pRef} className="text-gray-200 mt-10 text-2xl leading-relaxed max-w-xl" variants={pVariants} initial="hidden" animate={pInView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
            I build scalable <ShinyTextComponent text="web applications" speed={4} /> and <ShinyTextComponent text="digital products" speed={4} /> with clean code, performance, and modern design.
          </motion.p>
        </div>
        <motion.div ref={buttonRef} className="flex items-center gap-4 mt-2" variants={buttonVariants} initial="hidden" animate={buttonInView ? "visible" : "exit"} transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}>
          <button className="pl-16 pr-24 py-3 group hover:text-white duration-500 bg-white cursor-pointer rounded-full text-black font-semibold text-xl relative border border-white/50 hover:bg-white/30 hover:backdrop-blur-sm">
            <span>Contact Me</span>
            <span className="bg-black group-hover:-rotate-45 text-white group-hover:text-black group-hover:bg-white duration-500 rounded-full w-11 h-11 flex justify-center items-center absolute right-1 top-1/2 -translate-y-1/2">
              <RiArrowRightSLine size={28} />
            </span>
          </button>
        </motion.div>

        <motion.div className="flex items-center gap-4 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}>
          <motion.div className="h-px bg-gray-500/30" initial={{ width: 0 }} animate={{ width: "141px" }} transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}></motion.div>
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}>
            <motion.button className="duration-300 w-12 h-12 bg-white hover:text-white border border-white/50 hover:bg-white/30 hover:backdrop-blur-sm cursor-pointer rounded-full text-black font-semibold text-xl relative flex items-center justify-center" transition={{ duration: 0.2 }}>
              <MdOutlineWhatsapp size={20} />
            </motion.button>

            <motion.button className="duration-300 w-12 h-12 bg-white hover:text-white border border-white/50 hover:bg-white/30 hover:backdrop-blur-sm cursor-pointer rounded-full text-black font-semibold text-xl relative flex items-center justify-center" transition={{ duration: 0.2 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div ref={swiperRef_anim} className="w-1/3 h-full flex justify-center items-center" variants={swiperVariants} initial="hidden" animate={swiperInView ? "visible" : "exit"} transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}>
        <div className="w-96 h-screen">
          <Swiper
            direction="vertical"
            slidesPerView={3.5}
            spaceBetween={8}
            centeredSlides={true}
            loop={true}
            allowTouchMove={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[Autoplay]}
            className="h-full"
            style={
              {
                "--swiper-slide-opacity": "0.5",
                "--swiper-slide-active-opacity": "1",
                "--swiper-slide-active-transform": "scale(1.13)",
              } as any
            }
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <style>{`
              .swiper-slide:not(.swiper-slide-active) {
                opacity: 0.5;
              }
              .swiper-slide-active {
                transform: scale(1.13);
                opacity: 1;
              }
            `}</style>
            {Array.from({ length: 2 }).map(() => (
              <>
                <SwiperSlide>
                  <SilhouetteCardHome type="E-commerce" icon={PiStorefrontLight}>
                    <div className="w-full h-3 border border-gray-600/50 rounded flex items-center justify-center">
                      <span className="text-gray-300 text-sm"></span>
                    </div>
                    <div className="w-full h-16 border border-gray-600/50 rounded flex items-center justify-center">
                      <span className="text-gray-300 text-sm"></span>
                    </div>
                    <div className="flex gap-2 w-full justify-evenly">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="h-8 border w-8 border-gray-600/50 rounded-full flex items-center justify-center"></div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className={`h-10 border border-gray-600/50 rounded ${index === 0 ? "bg-gray-1000/20" : "bg-gray-810/20"}`}></div>
                      ))}
                    </div>
                    <div className="grid grid-cols-5 gap-2 w-full">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="h-8 border border-gray-600/50 rounded"></div>
                      ))}
                    </div>
                  </SilhouetteCardHome>
                </SwiperSlide>

                <SwiperSlide>
                  <SilhouetteCardHome type="CRM" icon={PiStorefrontLight}>
                    <div className="w-full h-3 flex items-center justify-between gap-2">
                      <div className="w-3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>

                      {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="w-2/4 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                      ))}
                    </div>
                    <div className="w-full h-3 flex items-center justify-between gap-2">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                      ))}
                    </div>
                    <div className="w-full h-1/2 border border-gray-600/50 rounded p-2 overflow-hidden flex flex-col justify-between">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="flex items-center justify-between gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                          <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-5 gap-2 w-full h-1/2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="h-full border flex flex-col gap-2 p-2 items-center justify-center border-gray-600/50 rounded">
                          <div className="h-1/2 w-1/2 border border-gray-600/50 rounded-full"></div>
                          <div className="h-full w-full border border-gray-600/50 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </SilhouetteCardHome>
                </SwiperSlide>

                <SwiperSlide>
                  <SilhouetteCardHome type="Landing" icon={PiStorefrontLight}>
                    <div className="w-full h-3 border border-gray-600/50 rounded flex items-center justify-center"></div>
                    <div className="flex gap-2 w-full h-full justify-evenly">
                      <div className="flex flex-col h-full mt-8 items-center w-full">
                        <div className="w-full h-8 border border-gray-600/50 rounded flex items-center justify-center px-3 text-center"></div>
                        <div className="w-full h-2 mt-2 border border-gray-600/50 rounded flex items-center justify-center px-3 text-center"></div>
                        <div className="w-full h-2 mt-0.5 border border-gray-600/50 rounded flex items-center justify-center px-3 text-center"></div>
                        <div className="flex mt-4 w-full">
                          <div className="w-10 h-3 border border-gray-600/50 rounded flex items-center justify-center px-3 text-center"></div>
                          <div className="w-3 h-3 border border-gray-600/50 rounded-full flex items-center justify-center px-3 text-center"></div>
                        </div>
                      </div>
                      <div className="w-full h-full border border-gray-600/50 rounded flex items-center justify-center px-3 text-center"></div>
                    </div>
                  </SilhouetteCardHome>
                </SwiperSlide>

                <SwiperSlide>
                  <SilhouetteCardHome type="Analytics" icon={PiChartLineLight}>
                    {/* Header com métricas principais - mais detalhado */}
                    <div className="w-full h-10 flex items-center justify-between gap-1 mb-2">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="flex-1 h-full border border-gray-600/50 rounded flex flex-col items-center justify-center p-1">
                          <div className="w-full h-1 bg-gray-600/40 rounded mb-1"></div>
                          <div className="w-4/5 h-1 bg-gray-600/30 rounded mb-1"></div>
                          <div className="w-3/5 h-1 bg-gray-600/20 rounded"></div>
                        </div>
                      ))}
                    </div>

                    {/* Gráfico principal - linha com mais detalhes */}
                    <div className="w-full h-16 border border-gray-600/50 rounded p-2 mb-2 relative">
                      <div className="w-full h-full flex items-end justify-between gap-1">
                        {Array.from({ length: 12 }).map((_, index) => (
                          <div key={index} className="bg-gray-600/50 rounded-t flex-1" style={{ height: `${15 + index * 6 + (index % 3 === 0 ? 15 : 0) + (index % 2 === 0 ? 8 : 0)}%` }}></div>
                        ))}
                      </div>
                      {/* Linhas de referência */}
                      <div className="absolute top-2 left-2 w-full h-px bg-gray-500/30"></div>
                      <div className="absolute top-4 left-2 w-full h-px bg-gray-500/20"></div>
                      <div className="absolute top-6 left-2 w-full h-px bg-gray-500/20"></div>
                    </div>

                    {/* Seção de gráficos secundários - mais preenchida */}
                    <div className="grid grid-cols-3 gap-1 w-full mb-2">
                      {/* Gráfico de pizza mais detalhado */}
                      <div className="h-10 border border-gray-600/50 rounded flex items-center justify-center relative p-1">
                        <div className="w-8 h-8 border-2 border-gray-600/50 rounded-full relative">
                          <div className="absolute top-0 left-0 w-4 h-4 border-r-2 border-b-2 border-gray-600/50 rounded-full"></div>
                          <div className="absolute top-2 left-2 w-2 h-2 bg-gray-600/30 rounded-full"></div>
                        </div>
                      </div>

                      {/* Gráfico de barras horizontal */}
                      <div className="h-10 border border-gray-600/50 rounded p-1">
                        <div className="w-full h-full flex flex-col justify-between">
                          {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="flex items-center gap-1">
                              <div className="w-2 h-1 bg-gray-600/40 rounded"></div>
                              <div className="bg-gray-600/40 rounded" style={{ width: `${40 + index * 20}%`, height: "2px" }}></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mini gráfico de área */}
                      <div className="h-10 border border-gray-600/50 rounded p-1">
                        <div className="w-full h-full flex items-end justify-between gap-0.5">
                          {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-gray-600/40 rounded-t" style={{ height: `${25 + index * 8 + (index % 2 === 0 ? 5 : 0)}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Seção inferior com mais dados */}
                    <div className="grid grid-cols-2 gap-1 w-full">
                      {/* Lista de dados */}
                      <div className="h-8 border border-gray-600/50 rounded p-1">
                        <div className="w-full h-full flex flex-col justify-between">
                          {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-gray-600/40 rounded-full"></div>
                              <div className="w-3/4 h-1 bg-gray-600/30 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Indicadores de status */}
                      <div className="h-8 border border-gray-600/50 rounded p-1">
                        <div className="w-full h-full flex items-center justify-center gap-1">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-2 h-2 border border-gray-600/50 rounded-full" style={{ backgroundColor: index % 2 === 0 ? "rgba(107, 114, 128, 0.3)" : "rgba(107, 114, 128, 0.1)" }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SilhouetteCardHome>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </motion.div>
      <motion.div ref={indicatorsRef} className="gap-10 absolute right-16 top-1/2 -translate-y-1/2 flex flex-col w-20" variants={indicatorsVariants} initial="hidden" animate={indicatorsInView ? "visible" : "exit"} transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}>
        {slideTypes.map((type, index) => (
          <div key={type} className={`h-1 border border-dotted transition-all duration-300 rounded-lg relative ${index === activeSlide % 4 ? "w-20 border-white" : "w-12 border-gray-500 hover:border-gray-300"}`} title={`${type}`}></div>
        ))}
      </motion.div>

      <motion.div ref={scrollRef} className="absolute bottom-8 flex flex-col items-center group w-5 h-32 cursor-pointer" variants={scrollVariants} initial="hidden" animate={scrollInView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}>
        <div className="writing-mode-vertical text-sm tracking-wider mb-4">Demos</div>
        <span className="h-16 w-[2px] bg-white"></span>
        <MdKeyboardArrowDown className="-mt-3 group-hover:translate-y-2 text-2xl group-hover:text-5xl transition-all duration-300" />
      </motion.div>
      <motion.span className="absolute bottom-8 animate-bounce left-1/2 -translate-x-1/2" variants={scrollVariants} initial="hidden" animate={scrollInView ? "visible" : "exit"} transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}>
        <CgScrollV size={20} />
      </motion.span>
    </section>
  );
};
