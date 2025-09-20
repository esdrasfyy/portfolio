import { AboutSection } from "./components/about-section.component";
import { HeroSection } from "./components/hero-section.component";
import { WorkSection } from "./components/work.section";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <main className="text-text bg-pattern" role="main">
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </main>
  );
}

export default App;