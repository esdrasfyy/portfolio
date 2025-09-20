import { CustomCursorComponent } from "./components/ui/custom-cursor.component";
import { LightRaysComponent } from "./components/ui/light-rays.component";
import { AboutSection } from "./sections/about.section";
import { HeroSection } from "./sections/hero.section";
import { useScrollSnap } from "./hooks/useScrollSnap";

function App() {
  // Configuração do scroll snap
  const sections = ['hero', 'about'];
  useScrollSnap({ sections, timeout: 1500 });
  return (
    <main
      className="text-text"
      role="main"
      style={{
        backgroundColor: "#0e0e0e",
        backgroundImage: "repeating-linear-gradient(135deg, #000, #19191a 1%, transparent 1.5%, transparent 50%)",
        backgroundSize: "100px 100px",
      }}
    >
      <CustomCursorComponent />
      <LightRaysComponent raysOrigin="top-center" raysColor="#ffffff" raysSpeed={1.5} lightSpread={0.8} rayLength={1.2} followMouse={true} mouseInfluence={0.1} noiseAmount={0.1} distortion={0.05} className="custom-rays" />
      <HeroSection />
      <AboutSection />
      {/* <WorkSection /> */}
    </main>
  );
}

export default App;
