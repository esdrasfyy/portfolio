import { IoArrowForwardOutline } from "react-icons/io5";
import { useEffect } from "react";

const serviceCards = [
  {
    title: "Landing Pages",
    description: "Develop optimized websites for your business",
    isFirst: true,
  },
  {
    title: "E-commerce",
    description: "Build online stores that convert",
    isFirst: false,
  },
  {
    title: "Web Apps",
    description: "Custom applications for your needs",
    isFirst: false,
  },
  {
    title: "Consulting",
    description: "Strategic tech guidance for growth",
    isFirst: false,
  },
];

export const AboutSection = () => {
  // JavaScript hover effects for service cards
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card-js");
    console.log("Cards found:", cards.length);

    const handleButtonMouseEnter = (e: Event) => {
      const button = e.target as HTMLElement;
      const card = button.closest(".service-card-js") as HTMLElement;
      const title = card?.querySelector("h3") as HTMLElement;
      const description = card?.querySelector("p") as HTMLElement;

      if (card) {
        card.style.backgroundColor = "#f3f4f6";
        card.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
        if (title) title.style.color = "#000000";
        if (description) description.style.color = "#374151";
        if (button) {
          button.style.backgroundColor = "#000000";
          button.style.color = "#ffffff";
        }
        // Adiciona classe para hover na borda interna
        card.classList.add("hover-border-inner");
      }
    };

    const handleButtonMouseLeave = (e: Event) => {
      const button = e.target as HTMLElement;
      const card = button.closest(".service-card-js") as HTMLElement;
      const title = card?.querySelector("h3") as HTMLElement;
      const description = card?.querySelector("p") as HTMLElement;

      if (card) {
        card.style.backgroundColor = "#000000";
        card.style.boxShadow = "none";
        if (title) title.style.color = "#ffffff";
        if (description) description.style.color = "#6b7280";
        if (button) {
          button.style.backgroundColor = "#ffffff";
          button.style.color = "#000000";
        }
        // Remove classe de hover na borda interna
        card.classList.remove("hover-border-inner");
      }
    };

    // Add event listeners to all buttons
    cards.forEach((card) => {
      const button = card.querySelector("button");
      if (button) {
        button.addEventListener("mouseenter", handleButtonMouseEnter);
        button.addEventListener("mouseleave", handleButtonMouseLeave);
      }
    });

    // Cleanup
    return () => {
      cards.forEach((card) => {
        const button = card.querySelector("button");
        if (button) {
          button.removeEventListener("mouseenter", handleButtonMouseEnter);
          button.removeEventListener("mouseleave", handleButtonMouseLeave);
        }
      });
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-secondary text-text-reverse py-28"
    >
      <div className="max-w-[1500px] mx-auto px-8 h-[calc(100vh-210px)] flex flex-col justify-between">
        <div className="col-span-4 flex justify-between">
          <h2 className="text-6xl font-light relative">
            <span className="font-bold">ABOUT</span>
            <br />
            <span className="text-4xl absolute bottom-2 left-0">ME</span>
          </h2>
          <h3 className="max-w-xl text-3xl text-end font-semibold">
            I'm a software engineer with a passion for building scalable and
            efficient web applications.
          </h3>
        </div>
        <div className="flex justify-between gap-16">
          {/* Left Column - Journey */}
          <div className="space-y-6 w-full">
            <div>
              <h2 className="text-4xl font-bold">Journey.</h2>
              <h3 className="text-xs uppercase opacity-50 font-bold">
                MY HISTORY
              </h3>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-xl font-thin">
                Unlock your digital potential with custom web solutions that
                drive results. I specialize in creating high-performance
                websites and applications that transform your business goals
                into digital success.
              </p>
              <p className=" leading-relaxed font-bold max-w-4/5">
                Whether you need a fast landing page, a complex e-commerce
                platform, or a custom web application, I deliver solutions that
                exceed expectations and drive measurable results.
              </p>
            </div>
          </div>
          <div className="space-y-6 w-full">
            <div>
              <h2 className="text-4xl font-bold text-end">Skills</h2>
              <h3 className="text-xs uppercase opacity-50 font-bold text-end">
                MY TOP
              </h3>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-xl font-thin text-end">
                Turning ideas into digital experiences that matter. From
                front-end design to scalable back-end systems, I build solutions
                with performance, clarity, and impact. rmance, clarity, and
                impact
              </p>
              <p className=" leading-relaxed font-bold max-w-4/5 text-end ml-auto">
                Landing pages, e-commerce platforms, or custom applications —
                every project is crafted to deliver results. Code that works.
                Design that connects. Tech that scales.
              </p>
            </div>
          </div>
        </div>

         {/* Technologies Carousel */}
         <div className="relative">
           <div className="rounded-2xl overflow-hidden">
            <div className="flex animate-scroll items-center">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
                "Framer Motion",
                "Swiper.js",
                "Vite",
                "Git",
                "Docker",
                "AWS",
                "Vercel",
                "Figma",
                "Adobe XD",
                "JavaScript",
                "HTML5",
                "CSS3",
                "SASS",
                "Webpack",
                "Jest",
                "Cypress",
              ].map((tech, index) => (
                 <div
                   key={index}
                   className="flex-shrink-0 mx-1 inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 sm:px-4 md:px-6 lg:px-6 xl:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-primary/20 bg-primary/5 rounded-full"
                 >
                   <span>{tech}</span>
                 </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
                "Framer Motion",
                "Swiper.js",
                "Vite",
                "Git",
                "Docker",
                "AWS",
                "Vercel",
                "Figma",
                "Adobe XD",
                "JavaScript",
                "HTML5",
                "CSS3",
                "SASS",
                "Webpack",
                "Jest",
                "Cypress",
              ].map((tech, index) => (
                 <div
                   key={`duplicate-${index}`}
                   className="flex-shrink-0 mx-1 inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 sm:px-4 md:px-6 lg:px-6 xl:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-primary/20 bg-primary/5 rounded-full"
                 >
                   <span>{tech}</span>
                 </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-4 gap-4">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="service-card-js bg-primary text-text relative h-40 rounded-md flex p-4 flex-col gap-2 transition-all duration-700 border border-white/20 before:content-[''] before:absolute before:top-1 before:left-1 before:right-1 before:bottom-1 before:border before:border-white/30 before:rounded before:pointer-events-none before:z-10 before:transition-all before:duration-300 hover:before:border-black/60"
            >
              <h3 className="text-lg font-semibold transition-colors duration-700">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 transition-colors duration-700">
                {card.description}
              </p>
              <button className="p-3 bg-secondary rounded-full cursor-pointer hover:-rotate-45 text-text-reverse w-fit ml-auto transition-all duration-700 absolute bottom-4 right-4">
                <IoArrowForwardOutline />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
