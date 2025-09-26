import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const en = {
    translation: {
        home: "Home",
        aboutNav: "About",
        workNav: "Work",
        servicesNav: "Services",
        contactNav: "Contact",

        hero: {
            title: "Full-Stack Developer",
            saudacap: "Hi",
            saudacap2: "I'm",
            subtitle: "Creating digital experiences that matter",
            description: "I build scalable web applications with modern technologies, focusing on performance and user experience."
        },

        about: {
            title: "About Me",
            title2: "Me",
            description: "I'm a full-stack engineer with a passion for designing and delivering scalable, secure, and robust applications.",
            journey: "Journey",
            myHistory: "My History",
            journeyDescription: "With 4+ years in tech, I'm an independent full-stack developer delivering projects for startups, agencies, and enterprises, focused on performance, scalability, and real business impact.",
            journeySubtext: "Working autonomously sharpened my ability to manage the full cycle — from design to deployment — while leading impactful projects and adapting to different business needs with agility and precision.",
            skills: "Skills",
            myStack: "My Stack",
            skillsDescription: "I architect scalable applications using Next.js, TypeScript, and Nest.js with Relational Databases. I implement CI/CD pipelines, Docker containerization, virtual machines deployment, and follow SOLID principles with Scrum for robust code.",
            aboutMyExperience: "About My Experience",
            aboutCompanyTitle: "About Company",
            experienceDescription: "During my time, I had the opportunity to work on challenging projects that allowed me to grow both technically and professionally. I focused on delivering high-quality solutions while maintaining clean, maintainable code and following industry best practices.",
            companies: [
                {
                    name: "Aégis Capital",
                    logo: "/aegis.png",
                    position: "Tech Lead SR",
                    startDate: "Feb 2025",
                    endDate: "Present",
                    location: "SP, Brazil",
                    about: "Aégis Capital is a leading financial technology company specializing in innovative investment solutions and digital banking platforms.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Lead a team of developers", "Implement CI/CD pipelines", "Implement Docker containerization", "Implement virtual machines deployment", "Follow SOLID principles", "Follow Scrum methodology"],
                    myRole: "Tech Lead",
                    connectWithCompanyTitle: "Connect with Aégis",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/aegis-capital",
                        website: "https://aegiscapital.com",
                        instagram: "https://instagram.com/aegiscapital",
                    },
                },
                {
                    name: "GroupLink One",
                    logo: "/grouplinkone.svg",
                    position: "Frontend SR",
                    startDate: "2025",
                    endDate: "Aug 2025",
                    location: "SP, Brazil",
                    about: "GroupLink One is a technology consulting firm focused on digital transformation and enterprise solutions.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Lead a team of developers", "Implement CI/CD pipelines", "Implement Docker containerization", "Implement virtual machines deployment", "Follow SOLID principles", "Follow Scrum methodology"],
                    connectWithCompanyTitle: "Connect with GroupLink",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/grouplink-one",
                        website: "https://grouplinkone.com",
                        instagram: "https://instagram.com/grouplinkone",
                    },
                },
                {
                    name: "Snapic Tecnologia",
                    logo: "/snapic.png",
                    position: "FullStack PL",
                    startDate: "Dec 2024",
                    endDate: "Feb 2025",
                    location: "SP, Brazil",
                    about: "Snapic Tecnologia is a software development company specializing in mobile applications and web solutions.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Lead a team of developers", "Implement CI/CD pipelines", "Implement Docker containerization", "Implement virtual machines deployment", "Follow SOLID principles", "Follow Scrum methodology"],
                    connectWithCompanyTitle: "Connect with Snapic",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/snapic-tecnologia",
                        website: "https://snapic.com.br",
                        instagram: "https://instagram.com/snapictecnologia",
                    },
                },
                {
                    name: "Cidade Alta RP",
                    logo: "/cidadealta.png",
                    position: "FullStack JR",
                    startDate: "Nov 2023",
                    endDate: "Oct 2024",
                    location: "SP, Brazil",
                    about: "Cidade Alta RP is a digital marketing and web development agency serving local businesses.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Lead a team of developers", "Implement CI/CD pipelines", "Implement Docker containerization", "Implement virtual machines deployment", "Follow SOLID principles", "Follow Scrum methodology"],
                    connectWithCompanyTitle: "Connect with Cidade Alta RP",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/cidade-alta-rp",
                        website: "https://cidadealtarp.com.br",
                        instagram: "https://instagram.com/cidadealtarp",
                    },
                },
            ],
        },

        work: {
            title: "Work",
            subtitle: "My",
            description: "A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.",
            projects: [
                {
                    title: "E-commerce",
                    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
                    images: ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Three.js"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ],
                    date: "2024"
                },
                {
                    title: "Mobile Banking App",
                    description: "Secure banking application with React Native and biometric authentication",
                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                    images: ["/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg"],
                    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Three.js"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ],
                    date: "2024"
                },
                {
                    title: "AI Dashboard",
                    description: "Real-time analytics dashboard with machine learning insights",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    images: ["/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg"],
                    technologies: ["React", "TypeScript", "Python", "TensorFlow", "Tailwind CSS", "Three.js"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ],
                    date: "2023"
                },
                {
                    title: "Portfolio Website",
                    description: "Modern portfolio with interactive animations and responsive design",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                    images: ["/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg"],
                    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Three.js", "Vite"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ],
                    date: "2024"
                },
                {
                    title: "SaaS Platform",
                    description: "Scalable software-as-a-service platform with microservices architecture",
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
                    images: ["/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "Docker", "AWS", "Three.js"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ],
                    date: "2023"
                },
                {
                    title: "IoT Monitoring",
                    description: "Internet of Things monitoring system with real-time data processing",
                    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
                    images: ["/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg"],
                    technologies: ["React", "TypeScript", "Python", "MQTT", "Tailwind CSS", "Three.js"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ],
                    date: "2024"
                },
                {
                    title: "CRM System",
                    description: "Customer relationship management system with real-time data processing",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    images: ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Three.js"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ]
                },
                {
                    title: "ERP System",
                    description: "Enterprise resource planning system with real-time data processing",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    images: ["/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Three.js"],
                    projectDescription: "This innovative project showcases cutting-edge web development techniques, combining modern design principles with advanced 3D visualization capabilities. Built with React and Three.js, it delivers an immersive user experience that pushes the boundaries of interactive web applications.",
                    keyFeatures: [
                        "Interactive 3D visualization with Three.js",
                        "Responsive design with modern UI/UX",
                        "Scalable architecture and performance optimization",
                        "Real-time 3D controls and interactions"
                    ],
                    date: "2023"
                },
            ]
        },

        services: {
            title: "Services",
            subtitle: "What I Offer",
            description: "Transform your digital presence with cutting-edge solutions that drive innovation and deliver exceptional user experiences.",
            sub_description: "Elevate your business performance and digital capabilities",
            cta: "Hire Me",
            products: [
                {
                    name: "Web & Mobile Solutions",
                    description: "End-to-end web and mobile apps with seamless API integrations and scalable architecture.",
                },
                {
                    name: "Workflow Automation",
                    description: "Smart automations to cut manual work, save time, and boost efficiency.",
                },
                {
                    name: "UI/UX Design",
                    description: "Intuitive, user-centered interfaces that enhance engagement and usability.",
                },
                {
                    name: "Cloud & Scalability",
                    description: "Robust cloud setups, CI/CD pipelines, and performance optimization.",
                },
            ]
        },

        contact: {
            title: "Get In Touch",
            subtitle: "Let's work together",
            description: "Ready to start your next project? Let's discuss how I can help bring your ideas to life.",
            name: "Name",
            subject: "Choose subject",
            company: "Your company",
            email: "Email",
            message: "Message",
            send: "Send Message",
            findUs: "Find us",
            location: "São Paulo, Brazil",
            phone: "+55 (11) 99714-0127",
            emailAddress: "contatoesdrasoficial@gmail.com",
            errors: {
                nameRequired: "Name is required",
                subjectRequired: "Subject is required",
                emailRequired: "Email is required",
                emailInvalid: "Invalid email",
                messageRequired: "Message is required"
            }
        },

        feedbacks: {
            title: "Endorsements",
            testimonials: [
                {
                    name: "Igor 'Tony'",
                    role: "CEO Cidade Alta RP",
                    content: "Fernando is a qualified and committed developer who contributed to improving our technology. I recommend him for innovation and professionalism!",
                    image: "/cidadealta.png"
                },
                {
                    name: "Gerson Aguiar",
                    role: "Senior Developer at @loggi",
                    content: "Esdras delivered secure and scalable solutions with clean code. I recommend him to anyone looking for quality and efficiency.",
                    image: "/gerson.jpg"
                },
                {
                    name: "Anonymous",
                    role: "CEO Snapic",
                    content: "Fernando partnership was essential for Snapic. He developed scalable systems with OAuth authentication and Facebook Meta integration.",
                    image: "/snapic.png"
                },
                {
                    name: "DRA Franciele Cruz",
                    role: "Advogada",
                    content: "Fernando created a page that expanded my reach and brought new clients, generating real results. I recommend him for impact and quality!",
                    image: "/franciele.jpg"
                },
                {
                    name: "Gustavo Delmondes",
                    role: "Owner Aegis Capital",
                    content: "Fe technical expertise transformed our financial platform. His solutions are robust, secure, and perfectly aligned with our business needs.",
                    image: "/delmondes.jpg"
                },
                {
                    name: "Celso Rodrigues",
                    role: "Consultor e CEO da OpcaoConvenios",
                    content: "Esdras partnership was crucial for our digital transformation. He delivered innovative solutions that optimized our processes and increased efficiency.",
                    image: "/celso.jpg"
                },
            ]
        },

        modal: {
            close: "Close",
            experience: "Experience",
            project: "Project",
            overview: "Overview",
            projectDescription: "Project Description",
            keyFeatures: "Key Features:",
            interactive3DPreview: "Interactive 3D Preview",
            date: "Date",
            more: "More",
            viewMore: "View More"
        }
    }
};

const pt = {
    translation: {
        home: "Início",
        aboutNav: "Sobre",
        workNav: "Trabalhos",
        servicesNav: "Serviços",
        contactNav: "Contato",

        hero: {
            title: "Desenvolvedor Full-Stack",
            saudacap: "Oi",
            saudacap2: "Eu sou",
            subtitle: "Criando experiências digitais que importam",
            description: "Desenvolvo aplicações web escaláveis com tecnologias modernas, focando em performance e experiência do usuário."
        },

        about: {
            title: "Sobre",
            title2: "Mim",
            description: "Sou um engenheiro full-stack com paixão por projetar e entregar aplicações escaláveis, seguras e robustas.",
            journey: "Jornada",
            myHistory: "Minha História",
            journeyDescription: "Com mais de 4 anos em tecnologia, sou um desenvolvedor full-stack independente entregando projetos para startups, agências e empresas, focado em performance, escalabilidade e impacto real nos negócios.",
            journeySubtext: "Trabalhar de forma autônoma aprimorou minha capacidade de gerenciar o ciclo completo — do design ao deploy — enquanto lidero projetos impactantes e me adapto a diferentes necessidades de negócio com agilidade e precisão.",
            skills: "Habilidades",
            myStack: "Minha Stack",
            skillsDescription: "Arquiteto aplicações escaláveis usando Next.js, TypeScript e Nest.js com Bancos de Dados Relacionais. Implemento pipelines de CI/CD, containerização Docker, deploy em máquinas virtuais e sigo princípios SOLID com Scrum para código robusto.",
            aboutMyExperience: "Sobre Minha Experiência",
            experienceDescription: "Durante meu tempo, tive a oportunidade de trabalhar em projetos desafiadores que me permitiram crescer tanto tecnicamente quanto profissionalmente. Foquei em entregar soluções de alta qualidade mantendo código limpo, sustentável e seguindo as melhores práticas da indústria.",
            aboutCompanyTitle: "Sobre a Empresa",
            companies: [
                {
                    name: "Aégis Capital",
                    logo: "/aegis.png",
                    position: "Tech Lead SR",
                    startDate: "Fev 2025",
                    endDate: "Presente",
                    location: "SP, Brasil",
                    about: "Aégis Capital é uma empresa líder em tecnologia financeira especializada em soluções inovadoras de investimento e plataformas de banco digital.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Liderar uma equipe de desenvolvedores", "Implementar pipelines de CI/CD", "Implementar containerização Docker", "Implementar deploy em máquinas virtuais", "Seguir princípios SOLID", "Seguir metodologia Scrum"],
                    myRole: "Tech Lead",
                    connectWithCompanyTitle: "Conecte-se com a Aégis",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/aegis-capital",
                        website: "https://aegiscapital.com",
                        instagram: "https://instagram.com/aegiscapital",
                    },
                },
                {
                    name: "GroupLink One",
                    logo: "/grouplinkone.svg",
                    position: "Frontend SR",
                    startDate: "2025",
                    endDate: "Ago 2025",
                    location: "SP, Brasil",
                    about: "GroupLink One é uma empresa de consultoria em tecnologia focada em transformação digital e soluções empresariais.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Liderar uma equipe de desenvolvedores", "Implementar pipelines de CI/CD", "Implementar containerização Docker", "Implementar deploy em máquinas virtuais", "Seguir princípios SOLID", "Seguir metodologia Scrum"],
                    aboutCompanyTitle: "Sobre a GroupLink ",
                    connectWithCompanyTitle: "Conecte-se com a GroupLink One",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/grouplink-one",
                        website: "https://grouplinkone.com",
                        instagram: "https://instagram.com/grouplinkone",
                    },
                },
                {
                    name: "Snapic Tecnologia",
                    logo: "/snapic.png",
                    position: "FullStack PL",
                    startDate: "Dez 2024",
                    endDate: "Fev 2025",
                    location: "SP, Brasil",
                    about: "Snapic Tecnologia é uma empresa de desenvolvimento de software especializada em aplicações móveis e soluções web.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Liderar uma equipe de desenvolvedores", "Implementar pipelines de CI/CD", "Implementar containerização Docker", "Implementar deploy em máquinas virtuais", "Seguir princípios SOLID", "Seguir metodologia Scrum"],
                    connectWithCompanyTitle: "Conecte-se com a Snapic",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/snapic-tecnologia",
                        website: "https://snapic.com.br",
                        instagram: "https://instagram.com/snapictecnologia",
                    },
                },
                {
                    name: "Cidade Alta RP",
                    logo: "/cidadealta.png",
                    position: "FullStack JR",
                    startDate: "Nov 2023",
                    endDate: "Out 2024",
                    location: "SP, Brasil",
                    about: "Cidade Alta RP é uma agência de marketing digital e desenvolvimento web que atende empresas locais.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Liderar uma equipe de desenvolvedores", "Implementar pipelines de CI/CD", "Implementar containerização Docker", "Implementar deploy em máquinas virtuais", "Seguir princípios SOLID", "Seguir metodologia Scrum"],
                    connectWithCompanyTitle: "Conecte-se com a Cidade Alta RP",
                    socialMedia: {
                        linkedin: "https://linkedin.com/company/cidade-alta-rp",
                        website: "https://cidadealtarp.com.br",
                        instagram: "https://instagram.com/cidadealtarp",
                    },
                },
            ],
        },

        work: {
            title: "Trabalhos",
            subtitle: "Meus",
            description: "Uma vitrine dos meus trabalhos recentes, apresentando soluções inovadoras e tecnologias de ponta.",
            projects: [
                {
                    title: "E-commerce",
                    description: "Solução completa de e-commerce com React, Node.js e MongoDB",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
                    images: ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Three.js"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2024"
                },
                {
                    title: "App Mobile Banking",
                    description: "Aplicativo bancário seguro com React Native e autenticação biométrica",
                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                    images: ["/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg"],
                    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Three.js"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2024"
                },
                {
                    title: "Dashboard de IA",
                    description: "Dashboard de analytics em tempo real com insights de machine learning",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    images: ["/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg"],
                    technologies: ["React", "TypeScript", "Python", "TensorFlow", "Tailwind CSS", "Three.js"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2023"
                },
                {
                    title: "Site Portfolio",
                    description: "Portfolio moderno com animações interativas e design responsivo",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                    images: ["/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg"],
                    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Three.js", "Vite"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2024"
                },
                {
                    title: "Plataforma SaaS",
                    description: "Plataforma de software como serviço escalável com arquitetura de microsserviços",
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
                    images: ["/hm.jpg", "/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "Docker", "AWS", "Three.js"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2024"
                },
                {
                    title: "Monitoramento IoT",
                    description: "Sistema de monitoramento de Internet das Coisas com processamento de dados em tempo real",
                    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
                    images: ["/services.jpg", "/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg"],
                    technologies: ["React", "TypeScript", "Python", "MQTT", "Tailwind CSS", "Three.js"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2024"
                },
                {
                    title: "Sistema CRM",
                    description: "Sistema de gestão de relacionamento com cliente com processamento de dados em tempo real",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    images: ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Three.js"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2024"
                },
                {
                    title: "Sistema ERP",
                    description: "Sistema de planejamento de recursos empresariais com processamento de dados em tempo real",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    images: ["/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg", "/791.jpg"],
                    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Three.js"],
                    projectDescription: "Este projeto inovador demonstra técnicas de desenvolvimento web de ponta, combinando princípios de design moderno com capacidades avançadas de visualização 3D. Construído com React e Three.js, oferece uma experiência de usuário imersiva que ultrapassa os limites das aplicações web interativas.",
                    keyFeatures: [
                        "Visualização 3D interativa com Three.js",
                        "Design responsivo com UI/UX moderna",
                        "Arquitetura escalável e otimização de performance",
                        "Controles 3D e interações em tempo real"
                    ],
                    date: "2024"
                },
            ]
        },

        services: {
            title: "Serviços",
            subtitle: "O que Ofereço",
            description: "Transforme sua presença digital com soluções de ponta que impulsionam inovação e entregam experiências excepcionais ao usuário.",
            sub_description: "Eleve sua performance e capacidades digitais",
            cta: "Contrate",
            products: [
                {
                    name: "Soluções Web & Mobile",
                    description: "Aplicações web e mobile completas com integrações de API perfeitas e arquitetura escalável.",
                },
                {
                    name: "Automação de Fluxos",
                    description: "Automações inteligentes para reduzir trabalho manual, economizar tempo e aumentar a eficiência.",
                },
                {
                    name: "Design UI/UX",
                    description: "Interfaces intuitivas e centradas no usuário que aumentam o engajamento e usabilidade.",
                },
                {
                    name: "Cloud & Escalabilidade",
                    description: "Configurações robustas de nuvem, pipelines CI/CD e otimização de performance.",
                },
            ]
        },

        contact: {
            title: "Entre em Contato",
            subtitle: "Vamos trabalhar juntos",
            description: "Pronto para começar seu próximo projeto? Vamos discutir como posso ajudar a dar vida às suas ideias.",
            name: "Nome",
            subject: "Escolha o assunto",
            company: "Sua empresa",
            email: "Email",
            message: "Mensagem",
            send: "Enviar Mensagem",
            findUs: "Encontre-nos",
            location: "São Paulo, Brasil",
            phone: "+55 (11) 99714-0127",
            emailAddress: "contatoesdrasoficial@gmail.com",
            errors: {
                nameRequired: "Nome é obrigatório",
                subjectRequired: "Assunto é obrigatório",
                emailRequired: "Email é obrigatório",
                emailInvalid: "Email inválido",
                messageRequired: "Mensagem é obrigatória"
            }
        },

        feedbacks: {
            title: "Depoimentos",
            testimonials: [
                {
                    name: "Igor 'Tony'",
                    role: "CEO Cidade Alta RP",
                    content: "Fernando é um desenvolvedor qualificado e comprometido que contribuiu para melhorar nossa tecnologia. Recomendo ele pela inovação e profissionalismo!",
                    image: "/cidadealta.png"
                },
                {
                    name: "Gerson Aguiar",
                    role: "Senior Developer at @loggi",
                    content: "Esdras entregou soluções seguras e escaláveis com código limpo. Recomendo ele para quem busca qualidade e eficiência.",
                    image: "/gerson.jpg"
                },
                {
                    name: "Anonymous",
                    role: "CEO Snapic",
                    content: "A parceria com Fernando foi essencial para a Snapic. Ele desenvolveu sistemas escaláveis com autenticação OAuth e integração Facebook Meta.",
                    image: "/snapic.png"
                },
                {
                    name: "DRA Franciele Cruz",
                    role: "Advogada",
                    content: "Fernando criou uma página que expandiu meu alcance e trouxe novos clientes, gerando resultados reais. Recomendo ele pelo impacto e qualidade!",
                    image: "/franciele.jpg"
                },
                {
                    name: "Gustavo Delmondes",
                    role: "Owner Aegis Capital",
                    content: "A expertise técnica do Fernando transformou nossa plataforma financeira. Suas soluções são robustas, seguras e perfeitamente alinhadas com nossas necessidades de negócio.",
                    image: "/delmondes.jpg"
                },
                {
                    name: "Celso Rodrigues",
                    role: "Consultor e CEO da OpcaoConvenios",
                    content: "A parceria com Esdras foi crucial para nossa transformação digital. Ele entregou soluções inovadoras que otimizaram nossos processos e aumentaram a eficiência.",
                    image: "/celso.jpg"
                },
            ]
        },

        modal: {
            close: "Fechar",
            experience: "Experiência",
            project: "Projeto",
            overview: "Visão Geral",
            projectDescription: "Descrição do Projeto",
            keyFeatures: "Principais Características:",
            interactive3DPreview: "Preview 3D Interativo",
            date: "Data",
            more: "Mais",
            viewMore: "Ver Mais"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,
            pt
        },
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;