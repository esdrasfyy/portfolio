import { useEffect, useRef, useState } from "react";
import { usePreferences } from "../../contexts/preferences.context";
import gsap from "gsap";

const navigationItems = [
  { id: 1, name: "Home", href: "#home", isActive: true },
  { id: 2, name: "About", href: "#about", isActive: false },
  { id: 3, name: "Services", href: "#services", isActive: false },
  { id: 4, name: "Projects", href: "#projects", isActive: false },
  { id: 5, name: "Contact Me", href: "#contact", isActive: false },
];

const socialLinks = [
  { id: 3, name: "Instagram", href: "#" },
  { id: 4, name: "Whatsapp", href: "#" },
  { id: 1, name: "Linkedin", href: "#" },
  { id: 2, name: "Github", href: "#" },
];

export const HamburgerMenu = () => {
  const { menu, onClose } = usePreferences();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menu]);

  useEffect(() => {
    if (!containerRef.current) return;

    const bar1 = containerRef.current.querySelector("div:nth-child(1)");
    const bar2 = containerRef.current.querySelector("div:nth-child(2)");
    const bar3 = containerRef.current.querySelector("div:nth-child(3)");
    const bar4 = containerRef.current.querySelector("div:nth-child(4)");

    const menuContent = containerRef.current.querySelector(".menu-content");
    const navItems = containerRef.current.querySelectorAll(".nav-item");
    const socialItems = containerRef.current.querySelectorAll(".social-item");
    const exploreChars = containerRef.current.querySelectorAll(".explore-char");

    if (menu) {
      setIsVisible(true);

      const tlOpen = gsap.timeline();

      tlOpen
        .add("preOpen")
        .set([bar1, bar2, bar3, bar4], { width: 0, height: 0, opacity: 0.5 })
        .to(
          bar1,
          {
            width: "200px",
            height: "50vw",
            opacity: 1,
            duration: 0.8,
            ease: "power4.easeInOut",
          },
          "preOpen"
        )
        .to(
          bar2,
          {
            width: "400px",
            height: "140vw",
            opacity: 1,
            duration: 0.8,
            ease: "power4.easeInOut",
          },
          "preOpen"
        )
        .to(
          bar3,
          {
            width: "200px",
            height: "50vw",
            opacity: 1,
            duration: 0.8,
            ease: "power4.easeInOut",
          },
          "preOpen"
        )
        .to(
          bar4,
          {
            width: "400px",
            height: "140vw",
            opacity: 1,
            duration: 0.8,
            ease: "power4.easeInOut",
          },
          "preOpen"
        )
        .add("open", "-=0.4")
        .to(
          [bar1, bar2, bar3, bar4],
          {
            width: 0,
            duration: 0.8,
            ease: "power4.easeInOut",
          },
          "open"
        )
        .add("content", "-=0.2")
         .fromTo(menuContent, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power4.easeOut" }, "content")
         .fromTo(navItems, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.6, ease: "power4.easeOut", stagger: 0.1 }, "content+=0.3")
         .fromTo(socialItems, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.6, ease: "power4.easeOut", stagger: 0.1 }, "content+=0.5")
         .fromTo(exploreChars, { opacity: 0, y: 100 }, { opacity: 0.2, y: 0, duration: 0.8, ease: "power4.easeOut", stagger: 0.1 }, "content+=0.7");
    } else {
      const tlClose = gsap.timeline();

      tlClose
        .add("close")
        .to(exploreChars, { opacity: 0, y: 100, duration: 0.4, ease: "power4.easeIn", stagger: 0.05 }, "close")
        .to(socialItems, { opacity: 0, x: 50, duration: 0.4, ease: "power4.easeIn", stagger: 0.05 }, "close")
        .to(navItems, { opacity: 0, x: -50, duration: 0.4, ease: "power4.easeIn", stagger: 0.05 }, "close")
        .to(menuContent, { opacity: 0, y: 50, duration: 0.4, ease: "power4.easeIn" }, "close")
        .call(() => {
          setIsVisible(false);
        });
    }
  }, [menu]);

  if (!menu && !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 w-screen h-screen flex transition-all duration-1000 ease-in-out ${menu ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`} ref={containerRef}>
      <div className="bg-white max-[900px]:left-[0vh] max-[900px]:top-[-8vh] absolute left-[2vw] max-[1050px]:left-[30vw] max-[1050px]:top-[30vw] -top-[23vh] w-[200px] h-[50vw] rotate-45"></div>
      <div className="bg-white absolute left-[5vw] max-[720px]:left-[8vh] max-[720px]:top-[-12vh] max-[900px]:left-[15vw] max-[900px]:-top-[25vh] -top-[55vh] w-[400px] h-[100vw] rotate-45"></div>
      <div className="bg-white absolute right-[2vw] max-[720px]:right-[0vh] max-[720px]:bottom-[-20vh] max-[900px]:right-[8vw] max-[900px]:-bottom-[10vh] -bottom-[23vh] w-[200px] h-[50vw] rotate-45"></div>
      <div className="bg-white max-[720px]:right-[0vh] max-[720px]:bottom-[-20vh] absolute right-[15vw] max-[1050px]:right-[0vw] max-[1050px]:-bottom-[25vh] -bottom-[48vh] w-[400px] h-[100vw] max-[1050px]:w-[400vh] rotate-45"></div>

        <div className="menu-content relative z-10 max-w-[1500px] w-full h-full flex mx-auto justify-between max-[1050px]:flex-col max-[1050px]:justify-center max-[1050px]:items-center max-[1050px]:text-center">
          <div className="flex flex-col justify-center pl-20 max-[1050px]:pl-0 max-[1050px]:mb-12">
            <div className="space-y-8">
              {navigationItems.map((item) => (
                <div key={item.id} className="nav-item flex items-center gap-4 max-[1050px]:justify-center">
                  <div className={`w-3 h-3 border-2 rounded-full ${
                    item.isActive ? 'border-gray-300' : 'border-transparent'
                  }`}></div>
                  <a 
                    href={item.href} 
                    onClick={onClose}
                    className={`text-6xl font-bold transition-colors duration-300 max-[1050px]:text-4xl ${
                      item.isActive 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex flex-col justify-center items-end pr-20 max-[1050px]:pr-0 max-[1050px]:items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 max-[1050px]:text-xl">My Socials Links</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.id}
                    href={link.href} 
                    className="social-item block text-end text-xl text-gray-400 hover:text-white font-semibold tracking-wide transition-colors duration-300 max-[1050px]:text-center max-[1050px]:text-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Text */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-nowrap text-center mx-auto text-[26vw] w-fit font-bold text-white/20 select-none pointer-events-none leading-none max-[1050px]:text-[20vw] max-[1050px]:bottom-10">
          {"Explore".split("").map((char, index) => (
            <span key={index} className="explore-char inline-block">
              {char}
            </span>
          ))}
        </div>
    </div>
  );
};
