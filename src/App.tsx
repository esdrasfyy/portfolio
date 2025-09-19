import { HeroSection } from "./components/hero-section.component";
import { AboutSection } from "./components/about-section.component";
import { Navigation } from "./components/navigation.component";

function App() {
  return (
    <main className="text-text bg-pattern" role="main">
      <HeroSection />
      <AboutSection />
      <Navigation />
    </main>
  );
}

export default App;