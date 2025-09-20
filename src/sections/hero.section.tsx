import { MdKeyboardArrowDown, MdOutlineWhatsapp } from "react-icons/md";
import { PiChartLineLight, PiStorefrontLight } from "react-icons/pi";
import { SilhouetteCardHome } from "../components/home/silhouette-card.home";
import { ShinyTextComponent } from "../components/ui/shiny-text.component";
import { SilverButton } from "../components/ui/button/silver.button";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgScrollV } from "react-icons/cg";
import { Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<any>(null);
  
  // Refs para animações
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const swiperRef_anim = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // useInView para cada elemento
  const h1InView = useInView(h1Ref, { once: false });
  const h2InView = useInView(h2Ref, { once: false });
  const pInView = useInView(pRef, { once: false });
  const buttonsInView = useInView(buttonsRef, { once: false });
  const swiperInView = useInView(swiperRef_anim, { once: false });
  const indicatorsInView = useInView(indicatorsRef, { once: false });
  const scrollInView = useInView(scrollRef, { once: false });

  // Variantes de animação
  const h1Variants = {
    hidden: { opacity: 0, y: -50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -50, filter: "blur(10px)" }
  };

  const h2Variants = {
    hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -30, filter: "blur(8px)" }
  };

  const pVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 30, filter: "blur(8px)" }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: 50, filter: "blur(10px)" }
  };

  const swiperVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const indicatorsVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 50, scale: 0.5 }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.8 }
  };

  const slideTypes = ["E-commerce", "CRM", "Landing", "Analytics"];

  return (
    <section id="hero" className="flex justify-between items-center w-full h-screen px-8 max-w-[1500px] mx-auto overflow-hidden" aria-label="Seção principal do portfolio">
      <div className="flex flex-col w-2/3 h-full justify-center relative">
        <div className="text-white text-7xl font-light relative mb-8 z-10">
          <motion.h1 
            ref={h1Ref}
            className="relative w-fit"
            variants={h1Variants}
            initial="hidden"
            animate={h1InView ? "visible" : "exit"}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute top-10 -left-20 w-16 h-px border-b border-dotted border-gray-500" aria-hidden="true"></div>
            <ShinyTextComponent text="Hi" speed={4} />, I'm <ShinyTextComponent text="Fernando Esdras" speed={4} />,
          </motion.h1>
          <motion.h2
            ref={h2Ref}
            variants={h2Variants}
            initial="hidden"
            animate={h2InView ? "visible" : "exit"}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            turning <ShinyTextComponent text="ideas" speed={4} /> into <ShinyTextComponent text="code" speed={4} />.
          </motion.h2>
          <motion.p 
            ref={pRef}
            className="text-gray-200 mt-10 text-2xl leading-relaxed max-w-xl"
            variants={pVariants}
            initial="hidden"
            animate={pInView ? "visible" : "exit"}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            I build scalable <ShinyTextComponent text="web applications" speed={4} /> and <ShinyTextComponent text="digital products" speed={4} /> with clean code, performance, and modern design.
          </motion.p>
        </div>
        <motion.div 
          ref={buttonsRef}
          className="flex items-center gap-4 mt-12"
          variants={buttonsVariants}
          initial="hidden"
          animate={buttonsInView ? "visible" : "exit"}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <SilverButton size="lg" className="w-48" aria-label="Explorar meu trabalho">
            Explore My Work
          </SilverButton>
          <SilverButton className="w-12 h-12 rounded-full" aria-label="Contato via WhatsApp">
            <MdOutlineWhatsapp size={20} />
          </SilverButton>
        </motion.div>
      </div>
      <motion.div 
        ref={swiperRef_anim}
        className="w-1/3 h-full flex justify-center items-center"
        variants={swiperVariants}
        initial="hidden"
        animate={swiperInView ? "visible" : "exit"}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
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
            <SwiperSlide>
              <SilhouetteCardHome type="E-commerce" icon={PiStorefrontLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-3 border border-gray-600/50 rounded flex items-center justify-center">
                  <span className="text-gray-300 text-sm"></span>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded flex items-center justify-center">
                  <span className="text-gray-300 text-sm"></span>
                </div>
                <div className="grid grid-cols-2 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-10 border border-gray-600/50 rounded bg-gray-1000/20"></div>
                  <div className="h-10 border border-gray-600/50 rounded bg-gray-810/20"></div>
                </div>
                <div className="grid grid-cols-5 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCardHome type="CRM" icon={PiStorefrontLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-3 flex items-center justify-between gap-2">
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded p-2 overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCardHome type="Landing" icon={PiStorefrontLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded flex items-center justify-center px-3 text-center">
                  <span className="text-gray-300 text-sm"></span>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-3 border border-gray-600/50 rounded flex items-center justify-center">
                  <div className="w-2/3 h-full bg-gray-800/20 rounded flex items-center justify-center text-xs text-gray-200"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-10 border border-gray-600/50 rounded flex items-center justify-center"></div>
                  <div className="h-10 border border-gray-600/50 rounded flex items-center justify-center"></div>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] flex justify-between">
                  <div className="h-8 w-1/3 border border-gray-600/50 rounded"></div>
                  <div className="h-8 w-1/3 border border-gray-600/50 rounded"></div>
                  <div className="h-8 w-1/3 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCardHome type="Analytics" icon={PiChartLineLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded flex items-center justify-between px-2">
                  <div className="w-1/2 h-full border border-dashed border-gray-600/30 rounded flex items-center justify-center"></div>
                  <div className="w-1/2 h-full border border-dashed border-gray-600/30 rounded flex items-center justify-center"></div>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-3 flex items-center justify-between gap-2">
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                </div>
                <div className="grid grid-cols-5 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>

            {/* Duplicação para loop infinito */}
            <SwiperSlide>
              <SilhouetteCardHome type="E-commerce" icon={PiStorefrontLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-3 border border-gray-600/50 rounded flex items-center justify-center">
                  <span className="text-gray-300 text-sm"></span>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded flex items-center justify-center">
                  <span className="text-gray-300 text-sm"></span>
                </div>
                <div className="grid grid-cols-2 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-10 border border-gray-600/50 rounded bg-gray-1000/20"></div>
                  <div className="h-10 border border-gray-600/50 rounded bg-gray-810/20"></div>
                </div>
                <div className="grid grid-cols-5 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCardHome type="CRM" icon={PiStorefrontLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-3 flex items-center justify-between gap-2">
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded p-2 overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-700/30"></div>
                    <div className="h-1.5 w-3/4 bg-gray-600/20 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCardHome type="Landing" icon={PiStorefrontLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded flex items-center justify-center px-3 text-center">
                  <span className="text-gray-300 text-sm"></span>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-3 border border-gray-600/50 rounded flex items-center justify-center">
                  <div className="w-2/3 h-full bg-gray-800/20 rounded flex items-center justify-center text-xs text-gray-200"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-10 border border-gray-600/50 rounded flex items-center justify-center"></div>
                  <div className="h-10 border border-gray-600/50 rounded flex items-center justify-center"></div>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] flex justify-between">
                  <div className="h-8 w-1/3 border border-gray-600/50 rounded"></div>
                  <div className="h-8 w-1/3 border border-gray-600/50 rounded"></div>
                  <div className="h-8 w-1/3 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCardHome type="Analytics" icon={PiChartLineLight}>
                <div className="w-full max-w-[calc(100%-16px)] h-16 border border-gray-600/50 rounded flex items-center justify-between px-2">
                  <div className="w-1/2 h-full border border-dashed border-gray-600/30 rounded flex items-center justify-center"></div>
                  <div className="w-1/2 h-full border border-dashed border-gray-600/30 rounded flex items-center justify-center"></div>
                </div>
                <div className="w-full max-w-[calc(100%-16px)] h-3 flex items-center justify-between gap-2">
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                  <div className="w-1/3 h-3 border border-gray-600/50 rounded flex items-center justify-center text-xs text-gray-400"></div>
                </div>
                <div className="grid grid-cols-5 gap-2 max-w-[calc(100%-16px)] w-full">
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                  <div className="h-8 border border-gray-600/50 rounded"></div>
                </div>
              </SilhouetteCardHome>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
      <motion.div 
        ref={indicatorsRef}
        className="gap-10 absolute right-16 top-1/2 -translate-y-1/2 flex flex-col w-20"
        variants={indicatorsVariants}
        initial="hidden"
        animate={indicatorsInView ? "visible" : "exit"}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
      >
        {slideTypes.map((type, index) => (
          <div key={type} className={`h-1 border border-dotted transition-all duration-300 rounded-lg relative ${index === activeSlide % 4 ? "w-20 border-white" : "w-12 border-gray-500 hover:border-gray-300"}`} title={`${type}`}></div>
        ))}
      </motion.div>

      <motion.div 
        ref={scrollRef}
        className="absolute bottom-8 flex flex-col items-center group w-5 h-32 cursor-pointer"
        variants={scrollVariants}
        initial="hidden"
        animate={scrollInView ? "visible" : "exit"}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      >
        <div className="writing-mode-vertical text-sm tracking-wider mb-4">Demos</div>
        <span className="h-16 w-[2px] bg-white"></span>
        <MdKeyboardArrowDown className="-mt-3 group-hover:translate-y-2 text-2xl group-hover:text-5xl transition-all duration-300" />
      </motion.div>
      <motion.span 
        className="absolute bottom-8 animate-bounce left-1/2 -translate-x-1/2"
        variants={scrollVariants}
        initial="hidden"
        animate={scrollInView ? "visible" : "exit"}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
      >
        <CgScrollV size={20} />
      </motion.span>
    </section>
  );
};
