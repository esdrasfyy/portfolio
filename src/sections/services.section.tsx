const servicesData = [
  {
    number: "1",
    title: "Web Development",
    description: "Desenvolvimento de aplicações web modernas e responsivas",
  },
  {
    number: "2",
    title: "Mobile Apps",
    description: "Criação de aplicativos móveis nativos e híbridos",
  },
  {
    number: "3",
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e experiências digitais",
  },
  {
    number: "4",
    title: "Consulting",
    description: "Consultoria em tecnologia e arquitetura de software",
  },
];

export const ServicesSection = () => {

  return (
    <section id="services" className="min-h-screen text-white">
      <div className="max-w-[1500px] mx-auto px-8 py-24  h-screen flex flex-col justify-between">
        <div className="mb-8">
          <div className="flex items-center gap-8 mb-8">
            <h2 className="text-4xl font-bold">My Services</h2>
            <div className="flex-1 h-px bg-white"></div>
          </div>
          <div className="mb-12">
            <h1 className="text-2xl font-light leading-tight max-w-4xl">Aumente o desempenho e viabilidade das suas baterias EV com a tecnologia revolucionária de carregamento MagLiB™ da Gaussion.</h1>
          </div>
        </div>
        <div className="relative flex justify-end w-full">
          <div className="text-xl max-w-64 -rotate-90 text-center tracking-wider absolute top-1/2 -translate-y-1/2 -left-28">Aumente o desempenho e viabilidade das suas</div>
          <div className="grid grid-cols-2 gap-8 md:gap-16 w-2/3">
            {servicesData.map((service, index) => (
              <div key={index} className="relative group h-52">
                <span className="h-full w-[1px] bg-white absolute top-0 left-0 z-0"></span>
                <span className="h-[1px] w-2/3 bg-white absolute bottom-0 left-0 z-0"></span>
                <div className="text-9xl font-bold absolute top-1/2 -left-11 -translate-y-1/2 z-10">{service.number}</div>
                <button className="absolute -bottom-4 px-8 py-2 text-black cursor-pointer bg-white right-4">Call me</button>
                {/* <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3> */}
                {/* <p className="text-sm md:text-base text-gray-300 leading-relaxed">{service.description}</p> */}
                <span className="h-[1px] w-2/3 bg-white absolute top-0 right-0"></span>
                <span className="h-full w-[1px] bg-white absolute top-0 right-0"></span>
            
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
