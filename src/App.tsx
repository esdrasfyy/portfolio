import { LightRaysComponent } from "./components/ui/light-rays.component";
import { HamburgerMenu } from "./components/ui/hamburger-menu.component";
import { HeroSection } from "./sections/hero.section";
import { AboutSection } from "./sections/about.section";
import { FeedbacksSection } from "./sections/feedbacks.section";
import { ServicesSection } from "./sections/services.section";
import { MyWorkSection } from "./sections/my-work.section";
import { ContactSection } from "./sections/contact.section";

function App() {
  
  return (
    <main
      className="text-text overflow-x-hidden"
      role="main"
      style={{
        backgroundColor: "#0e0e0e",
        backgroundImage: "repeating-linear-gradient(135deg, #000, #19191a 1%, transparent 1.5%, transparent 50%)",
        backgroundSize: "100px 100px",
      }}
    >
      <LightRaysComponent raysOrigin="top-center" raysColor="#ffffff" raysSpeed={1.5} lightSpread={0.8} rayLength={1.2} followMouse={true} mouseInfluence={0.1} noiseAmount={0.1} distortion={0.05} className="custom-rays max-lg:!lightSpread-[3.5] max-lg:!rayLength-[4.0] max-lg:!mouseInfluence-[1.0] max-lg:!noiseAmount-[0.8] max-lg:!distortion-[0.5]" />
      <HamburgerMenu />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeedbacksSection />
      <MyWorkSection />
      <ContactSection />
    </main>
  );
}

export default App;
