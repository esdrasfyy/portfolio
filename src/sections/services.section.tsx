import { FaCode } from "react-icons/fa";
import { ShinyTextComponent } from "../components/ui/shiny-text.component";
import { TbAutomaticGearbox } from "react-icons/tb";
import { RiPenNibFill } from "react-icons/ri";
import { GrVirtualStorage } from "react-icons/gr";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const getServicesData = (t: any) => [
  {
    number: "1",
    title: t("services.products.0.name"),
    description: t("services.products.0.description"),
    icon: FaCode,
    whatsappMessage: t("services.whatsappMessages.0"),
  },
  {
    number: "2",
    title: t("services.products.1.name"),
    description: t("services.products.1.description"),
    icon: TbAutomaticGearbox,
    whatsappMessage: t("services.whatsappMessages.1"),
  },
  {
    number: "3",
    title: t("services.products.2.name"),
    description: t("services.products.2.description"),
    icon: RiPenNibFill,
    whatsappMessage: t("services.whatsappMessages.2"),
  },
  {
    number: "4",
    title: t("services.products.3.name"),
    description: t("services.products.3.description"),
    icon: GrVirtualStorage,
    whatsappMessage: t("services.whatsappMessages.3"),
  },
];

export const ServicesSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sideTextRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { once: true, amount: 0.1 });
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const descriptionInView = useInView(descriptionRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  const sideTextInView = useInView(sideTextRef, { once: true, amount: 0.3 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget.closest(".service-card");
    if (!card) return;

    const barsH = card.querySelectorAll(".service-bar-h");
    const barsV = card.querySelectorAll(".service-bar-v");

    barsH.forEach((bar) => {
      const barElement = bar as HTMLElement;
      barElement.style.transition = "all 0.6s ease";
      barElement.style.width = "20px";
      setTimeout(() => {
        barElement.style.backgroundColor = "white";
        barElement.style.width = "100%";
      }, 100);
    });

    barsV.forEach((bar) => {
      const barElement = bar as HTMLElement;
      barElement.style.transition = "all 0.3s ease";
      barElement.style.height = "20px";
      setTimeout(() => {
        barElement.style.backgroundColor = "white";
        barElement.style.height = "100%";
      }, 200);
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget.closest(".service-card");
    if (!card) return;

    const barsH = card.querySelectorAll(".service-bar-h");
    const barsV = card.querySelectorAll(".service-bar-v");
    const cardElement = card as HTMLElement;

    barsH.forEach((bar) => {
      const barElement = bar as HTMLElement;
      barElement.style.transition = "all 0.6s ease";
      barElement.style.width = "66.33%";
      barElement.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    });

    barsV.forEach((bar) => {
      const barElement = bar as HTMLElement;
      barElement.style.transition = "all 0.3s ease";
      barElement.style.height = "100%";
      barElement.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    });

    cardElement.style.backgroundColor = "";
  };

  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = "5511997140122"; // Seu número do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="min-h-screen text-white bg-black/50 relative overflow-hidden" ref={containerRef}>
      <motion.div
        className="absolute inset-0 opacity-30 left-[-200vw]"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(192, 192, 192, 0.3) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          animation: "shimmer 20s ease-in-out infinite",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={containerInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div className="max-w-[1500px] mx-auto px-8 py-24 h-screen flex flex-col justify-between max-[920px]:justify-start max-[920px]:py-12 max-[920px]:px-4 max-[570px]:py-16">
        <div className="mb-8 max-[770px]:mb-16 max-[570px]:mb-0">
          <motion.div
            ref={titleRef}
            className="flex items-center gap-8 mb-8"
            initial={{ opacity: 0, y: -80, filter: "blur(15px)", scale: 0.8 }}
            animate={titleInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: -80, filter: "blur(15px)", scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
          >
            <motion.h2 className="text-4xl font-bold max-[920px]:text-3xl" initial={{ opacity: 0, x: -30 }} animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
              <ShinyTextComponent text={t("services.title")} speed={4} />
            </motion.h2>
            <motion.div className="flex-1 h-px bg-white/20 mt-2" initial={{ width: 0, opacity: 0 }} animate={titleInView ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }} transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}></motion.div>
          </motion.div>
          <motion.div
            ref={descriptionRef}
            className="mb-12"
            initial={{ opacity: 0, y: 50, filter: "blur(12px)", scale: 0.95 }}
            animate={descriptionInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: 50, filter: "blur(12px)", scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2, type: "spring", stiffness: 80 }}
          >
            <motion.h1
              className="text-2xl max-[570px]:hidden font-light leading-tight max-w-4xl max-[920px]:text-base max-[570px]:text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={descriptionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              {t("services.description")}
            </motion.h1>
          </motion.div>
        </div>
        <div className="relative flex justify-end w-full max-[920px]:flex-col-reverse">
          <div className="text-xl max-w-64 text-white -rotate-90 text-center tracking-wider flex z-20 top-1/2 -translate-y-1/2 -left-24 max-[920px]:hidden absolute">{t("services.sub_description")}</div>
          <motion.div
            ref={cardsRef}
            className="grid grid-cols-2 gap-8 md:gap-16 w-2/3 max-[1320px]:w-4/5 max-[920px]:w-full max-[770px]:grid-cols-2 max-[570px]:grid-cols-1"
            initial={{ opacity: 0, y: 120, filter: "blur(15px)", scale: 0.9 }}
            animate={cardsInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, y: 120, filter: "blur(15px)", scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3, type: "spring", stiffness: 100 }}
          >
            {getServicesData(t).map((service, index) => (
              <div key={index} className="service-card relative py-4 px-8 group h-52 max-[1320px]:h-44 max-[770px]:h-36 max-[920px]:px-4 max-[920px]:py-2 max-[630px]:h-28">
                <span className="service-bar-v h-full w-[1px] bg-white/20 absolute top-0 left-0 z-0"></span>
                <span className="service-bar-h h-[1px] w-2/3 bg-white/20 absolute bottom-0 left-0 z-0"></span>
                <motion.div
                  className="text-9xl font-bold absolute top-1/2 -left-11 -translate-y-1/2 z-10 opacity-100 max-[920px]:hidden max-[770px]:text-8xl max-[770px]:-left-8"
                  initial={{ opacity: 0, scale: 0.3, rotate: -180, y: 50 }}
                  animate={cardsInView ? { opacity: 1, scale: 1, rotate: 0, y: 0 } : { opacity: 0, scale: 0.3, rotate: -180, y: 50 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <ShinyTextComponent text={service.number} speed={4} />
                </motion.div>
                <motion.button
                  className="absolute -bottom-4 px-8 py-2 max-[1320px]:px-6 max-[1320px]:py-1 max-[1320px]:text-sm max-[1320px]:right-2 text-black cursor-pointer bg-white rounded-lg font-semibold right-4"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleWhatsAppRedirect(service.whatsappMessage)}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 15px 35px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.92, y: 1 }}
                  initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: 20 }}
                  animate={cardsInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 30, scale: 0.8, rotateX: 20 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  {t("services.cta")}
                </motion.button>
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="text-9xl text-[#7272722c] absolute top-3 right-3 z-10 max-[1320px]:text-7xl max-[770px]:text-5xl max-[630px]:hidden max-[570px]:block" />
                  <motion.h3
                    className="text-xl font-bold text-white max-[1320px]:text-lg max-[630px]:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.9 + index * 0.1,
                    }}
                  >
                    <ShinyTextComponent text={service.title} speed={4} />
                  </motion.h3>
                </div>
                <motion.p
                  className="text-sm max-w-44 text-gray-300 leading-relaxed max-[1320px]:text-xs max-[1320px]:max-w-52"
                  initial={{ opacity: 0, y: 30, x: 20, filter: "blur(5px)" }}
                  animate={cardsInView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, x: 20, filter: "blur(5px)" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 1.0 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {service.description}
                </motion.p>
                <span className="service-bar-h h-[1px] w-2/3 bg-white/20 absolute top-0 right-0"></span>
                <span className="service-bar-v h-full w-[1px] bg-white/20 absolute top-0 right-0"></span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={sideTextRef}
        className="text-xl text-center absolute left-1/2 -translate-x-1/2 bottom-6 hidden text-nowrap max-[920px]:block"
        initial={{ opacity: 0, x: -150, y: 20, filter: "blur(15px)", scale: 0.8 }}
        animate={sideTextInView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, x: -150, y: 20, filter: "blur(15px)", scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5, type: "spring", stiffness: 60 }}
      >
        <motion.span className="text-lg text-nowrap max-[570px]:text-xs" initial={{ opacity: 0, y: 20 }} animate={sideTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}>
          {t("services.sub_description")}
        </motion.span>
      </motion.div>
    </section>
  );
};
