import { SilverButton } from "./ui/button/silver.button";
import { PiChartLineLight, PiStorefrontLight } from "react-icons/pi";
import { MdKeyboardArrowDown, MdOutlineWhatsapp } from "react-icons/md";
import { GlowingEffect } from "./ui/glowing-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import ShinyText from "./ui/shiny-text";
import LightRays from "./lightRays";
import { FaMouse } from "react-icons/fa";
import { CgScrollV } from "react-icons/cg";
import { SlArrowDown } from "react-icons/sl";

const SilhouetteCard = ({
  type,
  icon: Icon,
  children,
}: {
  type: string;
  icon: any;
  children: React.ReactNode;
}) => (
  <div className="w-96 h-60 border border-dotted border-gray-500 rounded-xs relative">
    <GlowingEffect
      spread={50}
      glow={true}
      disabled={false}
      proximity={200}
      inactiveZone={0.01}
      borderWidth={1}
    />
    <div className="flex flex-col items-center justify-between h-full text-white">
      <div className="flex items-center justify-between h-8 w-full border-b border-gray-600/50 px-4">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
        </div>
        <span className="text-gray-500 text-xs flex gap-2 items-center">
          <Icon size={16} /> 
          <ShinyText text={type} speed={3} />
        </span>
      </div>
      <div className="group relative flex-1 w-full p-2 overflow-hidden">
        {children}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[8px] rounded-sm opacity-0 scale-75 transition-all duration-300 ease-out pointer-events-none z-10 group-hover:opacity-100 group-hover:scale-100"></div>
        <a
          href="#"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold opacity-0 transition-all duration-300 delay-100 z-20 border-none cursor-pointer group-hover:opacity-100 group-hover:scale-100 flex items-center gap-2"
        >
          <span>View More</span>
          <span className="-rotate-45 group-hover:rotate-0 duration-300">
            <RiArrowRightSLine size={16} />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<any>(null);

  const slideTypes = ["E-commerce", "CRM", "Landing", "Analytics"];

  return (
    <section
      className="flex justify-between items-center w-full h-screen px-8 max-w-[1500px] mx-auto overflow-hidden"
      aria-label="Seção principal do portfolio"
    >
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      <div className="flex flex-col w-2/3 h-full justify-center relative">
        {/* <div
          className="absolute top-3/5 left-3/5 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-60 animate-float-gentle"
          style={{
            background:
              "radial-gradient(circle, rgba(156, 163, 175, 0.3) 0%, rgba(209, 213, 219, 0.2) 50%, transparent 100%)",
          }}
        ></div> */}
        <div className="text-white text-7xl font-light relative mb-8 z-10">
          <h1 className="relative w-fit">
            <div
              className="absolute top-10 -left-20 w-16 h-px border-b border-dotted border-gray-500"
              aria-hidden="true"
            ></div>
            <ShinyText text="Hi" speed={4} />, I'm <ShinyText text="Fernando Esdras" speed={4} />,
          </h1>
          <h2>
            turning <ShinyText text="ideas" speed={4} /> into <ShinyText text="code" speed={4} />.
          </h2>
          <p className="text-gray-200 mt-10 text-2xl leading-relaxed max-w-xl">
            I build scalable <ShinyText text="web applications" speed={4} /> and <ShinyText text="digital products" speed={4} />{" "}
            with clean code, performance, and modern design.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-12">
          <SilverButton
            size="lg"
            className="w-48"
            aria-label="Explorar meu trabalho"
          >
            Explore My Work
          </SilverButton>
          <SilverButton
            className="w-12 h-12 rounded-full"
            aria-label="Contato via WhatsApp"
          >
            <MdOutlineWhatsapp size={20} />
          </SilverButton>
        </div>
      </div>
      <div className="w-1/3 h-full flex justify-center items-center">
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
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <SilhouetteCard type="E-commerce" icon={PiStorefrontLight}>
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
              </SilhouetteCard>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCard type="CRM" icon={PiStorefrontLight}>
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
              </SilhouetteCard>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCard type="Landing" icon={PiStorefrontLight}>
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
              </SilhouetteCard>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCard type="Analytics" icon={PiChartLineLight}>
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
              </SilhouetteCard>
            </SwiperSlide>

            {/* Duplicação para loop infinito */}
            <SwiperSlide>
              <SilhouetteCard type="E-commerce" icon={PiStorefrontLight}>
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
              </SilhouetteCard>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCard type="CRM" icon={PiStorefrontLight}>
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
              </SilhouetteCard>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCard type="Landing" icon={PiStorefrontLight}>
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
              </SilhouetteCard>
            </SwiperSlide>

            <SwiperSlide>
              <SilhouetteCard type="Analytics" icon={PiChartLineLight}>
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
              </SilhouetteCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="gap-10 absolute right-16 top-1/2 -translate-y-1/2 flex flex-col w-20">
        {slideTypes.map((type, index) => (
          <div
            key={type}
            className={`h-1 border border-dotted transition-all duration-300 rounded-lg relative ${
              index === activeSlide % 4
                ? "w-20 border-white"
                : "w-12 border-gray-500 hover:border-gray-300"
            }`}
            title={`${type}`}
          ></div>
        ))}
      </div>
      
      {/* Demos Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center group w-5 h-32 cursor-pointer">
        <div className="writing-mode-vertical text-sm tracking-wider mb-4">
          Demos
        </div>
        <span className="h-16 w-[2px] bg-white"></span>
        <MdKeyboardArrowDown className="-mt-3 group-hover:translate-y-2 text-2xl group-hover:text-5xl transition-all duration-300" />
      </div>
      <span className="absolute bottom-8 animate-bounce left-1/2 -translate-x-1/2">
        <CgScrollV size={20} />
      </span>
    </section>
  );
};
