import ScratchCard from "react-scratchcard-v2";
import bgCover from "../../public/791.jpg";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure banking application with React Native and biometric authentication",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Real-time analytics dashboard with machine learning insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern portfolio with interactive animations and responsive design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
];

export const MyWorkSection = () => {
  const scratchConfig = {
    height: 240,
    width: 500,
    image: bgCover,
    finishPercent: 70,
    onComplete: () => console.log("Complete! 🎉"),
  };
  return (
    <section id="work" className="h-screen text-white">
      <div className="max-w-[1500px] mx-auto flex h-full">
        {/* Left Section - 2/3 width */}
        <div className="w-2/3 pr-8 flex flex-col justify-between relative py-20 px-8">
          {/* Top Left - Title */}
          <div>
            <h2 className="text-2xl font-light relative">
              <span>MY</span>
              <br />
              <span className="text-7xl absolute -bottom-20 left-0 font-semibold">WORK</span>
            </h2>
            <div className="space-y-2 text-white text-lg max-w-lg mt-28 flex items-center gap-4">
              <div className="h-[1px] w-32 bg-white"></div>
              <p className="font-light tracking-wider text-gray-400 text-sm">A collection of projects that showcase my skills, creativity, and dedication to delivering quality results.</p>
            </div>
          </div>

          {/* Bottom Left - Circle */}
          <div
            className="absolute bottom-1 left-1 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-60 animate-float-gentle"
            style={{
              background: "radial-gradient(circle, rgba(156, 163, 175, 0.3) 0%, rgba(209, 213, 219, 0.2) 50%, transparent 100%)",
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 mx-4 gap-1">
          {projects.map((project, index) => {
            return (
              <div key={project.id} className="h-full w-full border border-white/10 overflow-hidden flex">
                <div className="w-full p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="text-xs text-gray-500 border-t border-gray-700 pt-3">
                    <p>👆 Raspe o card ao lado para ver o projeto</p>
                  </div>
                </div>
                <div className={`h-full w-full overflow-hidden flex border-l border-white/10`}>
                  <ScratchCard {...scratchConfig}>
                    <div className="flex w-full h-full items-center justify-center bg-gray-800">
                      <div className="text-center">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <h3 className="text-white text-xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                  </ScratchCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
