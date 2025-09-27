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
            cta: "Download CV",
            subtitle: "Creating digital experiences that matter",
            description: "I build scalable web applications with modern technologies, focusing on performance and user experience."
        },

        about: {
            title: "About",
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
            companies: [
                {
                    name: "Aégis Capital",
                    logo: "/aegis.png",
                    position: "Tech Lead SR",
                    startDate: "Nov 2024",
                    endDate: "Present",
                    location: "SP, Brazil",
                    about: "Aégis Capital is a leading financial technology company specializing in innovative investment solutions and digital banking platforms.",
                    experienceDescription: "I lead the development of solutions for the financial sector, including compliance systems, operational hubs for brokers and advisors, and AI applied to credit analysis. I have been responsible for initiatives such as IVI, a predictive engine based on Markov and Monte Carlo, and a comprehensive dashboard for proposal management and intelligent cross-selling. I have also driven the creation of intuitive user experiences, with real-time dashboards, automated workflows, and integrations with WhatsApp and over 180 financial partners.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Lead development of financial sector solutions", "Implement compliance systems", "Apply AI to credit analysis", "Create predictive engines with Markov and Monte Carlo", "Build comprehensive dashboards for proposal management", "Integrate with WhatsApp and 180+ financial partners"],
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
                    startDate: "Apr 2025",
                    endDate: "Aug 2025",
                    location: "SP, Brazil",
                    about: "GroupLink One is a technology consulting firm focused on digital transformation and enterprise solutions.",
                    experienceDescription: "I worked on the development of the launch landing page for Fenasan, using AstroJS and integrating it with Apostrophe CMS to give the marketing team autonomy in managing the blog and site maintenance. I also created an email signature generation system for employees and developed a digital business card model compatible with Apple Wallet and Google Pay, modernizing the corporate identity and strengthening the company's digital presence.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Develop Fenasan launch landing page with AstroJS", "Integrate with Apostrophe CMS for marketing autonomy", "Create email signature generation system", "Develop digital business card for Apple Wallet/Google Pay", "Modernize corporate identity", "Strengthen digital presence"],
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
                    startDate: "Dec 2023",
                    endDate: "Feb 2025",
                    location: "SP, Brazil",
                    about: "Snapic Tecnologia is a software development company specializing in mobile applications and web solutions.",
                    experienceDescription: "I implemented card, PIX, and boleto payments using Mercado Pago, Stripe, and Efipay. I developed real-time messaging with Pusher, live streaming with gift sending, and subscription systems with recurring billing. I integrated Google OAuth 2.0, Zendesk for support, and used AI to personalize the feed. I also worked with Digital Ocean, AWS, Firebase Storage, and Docker to optimize workflows and enhance the user experience.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Implement card, PIX and boleto payments with Mercado Pago/Stripe", "Develop real-time messaging with Pusher", "Create live streaming with gift sending", "Build subscription systems with recurring billing", "Integrate Google OAuth 2.0 and Zendesk", "Use AI to personalize feed and optimize with Docker"],
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
                    about: "Cidade Alta RP is the largest GTA RP company in Latin America, focusing on digital marketing and web development.",
                    experienceDescription: "I worked at the largest GTA RP company in Latin America, optimizing SEO, fixing bugs, and improving site performance. I contributed to the development of an admin panel using Next.js, Nest.js, and Figma, as well as creating custom NUIs for FiveM, enhancing gameplay.",
                    myResponsibilitiesTitle: "My Responsibilities",
                    myResponsibilities: ["Optimize SEO and improve site performance", "Develop admin panel with Next.js and Nest.js", "Use Figma for design collaboration", "Create custom NUIs for FiveM", "Enhance gameplay experience", "Work with GTA RP community"],
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
                    image: "/cda-home.png",
                    images: ["/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/hm.jpg"],
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
                    image: "/daeshis-home.png",
                    images: ["/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/about.jpg"],
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
                    image: "/franciele-home.png",
                    images: ["/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/contact.jpg"],
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
                    image: "/institutional-home.png",
                    images: ["/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/feedback.jpg"],
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
                    image: "/snapic-home.png",
                    images: ["/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/services.jpg"],
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
                    image: "/cda-home.png",
                    images: ["/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/791.jpg"],
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
                    image: "/daeshis-home.png",
                    images: ["/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/about.jpg"],
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
                    image: "/franciele-home.png",
                    images: ["/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/contact.jpg"],
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
            whatsappMessages: [
                "Hi! I'm interested in your Web & Mobile Solutions service. I need help developing a scalable web/mobile application with modern technologies. Could we discuss my project requirements?",
                "Hello! I'd like to know more about your Workflow Automation services. I need to automate some manual processes in my business to improve efficiency. Can we talk about the possibilities?",
                "Hi! I'm looking for UI/UX Design services. I want to create intuitive and engaging user interfaces for my project. Could we discuss how you can help me achieve this?",
                "Hello! I'm interested in your Cloud & Scalability solutions. I need help setting up robust cloud infrastructure and optimizing performance for my applications. Can we schedule a conversation?"
            ],
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
        },

        backToTop: "Back to Top"
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
            cta: "Baixar CV",
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
            aboutCompanyTitle: "Sobre a Empresa",
            companies: [
                {
                    name: "Aégis Capital",
                    logo: "/aegis.png",
                    position: "Tech Lead FullStack SR",
                    startDate: "Nov 2024",
                    endDate: "Presente",
                    location: "SP, Brasil",
                    about: "Aégis Capital é uma empresa líder em tecnologia financeira especializada em soluções inovadoras de investimento e plataformas de banco digital.",
                    experienceDescription: "Lidero o desenvolvimento de soluções para o setor financeiro, incluindo sistemas de compliance, hubs operacionais para corretores e consultores, e IA aplicada à análise de crédito. Fui responsável por iniciativas como o IVI, um motor preditivo baseado em Markov e Monte Carlo, e um dashboard abrangente para gestão de propostas e cross-selling inteligente. Também impulsiono a criação de experiências de usuário intuitivas, com dashboards em tempo real, fluxos de trabalho automatizados e integrações com WhatsApp e mais de 180 parceiros financeiros.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Liderar desenvolvimento de soluções para o setor financeiro", "Implementar sistemas de compliance", "Aplicar IA à análise de crédito", "Criar motores preditivos com Markov e Monte Carlo", "Construir dashboards abrangentes para gestão de propostas", "Integrar com WhatsApp e 180+ parceiros financeiros"],
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
                    startDate: "Abr 2025",
                    endDate: "Ago 2025",
                    location: "SP, Brasil",
                    about: "GroupLink One é uma empresa de consultoria em tecnologia focada em transformação digital e soluções empresariais.",
                    experienceDescription: "Trabalhei no desenvolvimento da landing page de lançamento da Fenasan, usando AstroJS e integrando com Apostrophe CMS para dar autonomia à equipe de marketing na gestão do blog e manutenção do site. Também criei um sistema de geração de assinatura de email para funcionários e desenvolvi um modelo de cartão de visita digital compatível com Apple Wallet e Google Pay, modernizando a identidade corporativa e fortalecendo a presença digital da empresa.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Desenvolver landing page da Fenasan com AstroJS", "Integrar com Apostrophe CMS para autonomia do marketing", "Criar sistema de geração de assinatura de email", "Desenvolver cartão de visita digital para Apple Wallet/Google Pay", "Modernizar identidade corporativa", "Fortalecer presença digital"],
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
                    startDate: "Dez 2023",
                    endDate: "Fev 2025",
                    location: "SP, Brasil",
                    about: "Snapic Tecnologia é uma empresa de desenvolvimento de software especializada em aplicações móveis e soluções web.",
                    experienceDescription: "Implementei pagamentos por cartão, PIX e boleto usando Mercado Pago, Stripe e Efipay. Desenvolvi mensagens em tempo real com Pusher, transmissão ao vivo com envio de presentes e sistemas de assinatura com cobrança recorrente. Integrei Google OAuth 2.0, Zendesk para suporte e usei IA para personalizar o feed. Também trabalhei com Digital Ocean, AWS, Firebase Storage e Docker para otimizar fluxos de trabalho e melhorar a experiência do usuário.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Implementar pagamentos por cartão, PIX e boleto com Mercado Pago/Stripe", "Desenvolver mensagens em tempo real com Pusher", "Criar transmissão ao vivo com envio de presentes", "Construir sistemas de assinatura com cobrança recorrente", "Integrar Google OAuth 2.0 e Zendesk", "Usar IA para personalizar feed e otimizar com Docker"],
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
                    about: "Cidade Alta RP é a maior empresa de GTA RP da América Latina, focada em marketing digital e desenvolvimento web.",
                    experienceDescription: "Trabalhei na maior empresa de GTA RP da América Latina, otimizando SEO, corrigindo bugs e melhorando a performance do site. Contribuí para o desenvolvimento de um painel administrativo usando Next.js, Nest.js e Figma, além de criar NUIs personalizadas para FiveM, aprimorando a jogabilidade.",
                    myResponsibilitiesTitle: "Minhas Responsabilidades",
                    myResponsibilities: ["Otimizar SEO e melhorar performance do site", "Desenvolver painel administrativo com Next.js e Nest.js", "Usar Figma para colaboração em design", "Criar NUIs personalizadas para FiveM", "Aprimorar experiência de jogo", "Trabalhar com comunidade GTA RP"],
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
                    image: "/cda-home.png",
                    images: ["/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/hm.jpg"],
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
                    image: "/daeshis-home.png",
                    images: ["/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/about.jpg"],
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
                    image: "/franciele-home.png",
                    images: ["/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/contact.jpg"],
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
                    image: "/institutional-home.png",
                    images: ["/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/feedback.jpg"],
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
                    image: "/snapic-home.png",
                    images: ["/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/services.jpg"],
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
                    image: "/cda-home.png",
                    images: ["/cda-home.png", "/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/791.jpg"],
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
                    image: "/daeshis-home.png",
                    images: ["/daeshis-home.png", "/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/about.jpg"],
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
                    image: "/franciele-home.png",
                    images: ["/franciele-home.png", "/institutional-home.png", "/snapic-home.png", "/cda-home.png", "/daeshis-home.png", "/contact.jpg"],
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
            whatsappMessages: [
                "Olá! Tenho interesse no seu serviço de Soluções Web & Mobile. Preciso de ajuda para desenvolver uma aplicação web/mobile escalável com tecnologias modernas. Podemos discutir os requisitos do meu projeto?",
                "Oi! Gostaria de saber mais sobre seus serviços de Automação de Fluxos. Preciso automatizar alguns processos manuais no meu negócio para melhorar a eficiência. Podemos conversar sobre as possibilidades?",
                "Olá! Estou procurando serviços de Design UI/UX. Quero criar interfaces de usuário intuitivas e envolventes para meu projeto. Podemos discutir como você pode me ajudar a alcançar isso?",
                "Oi! Tenho interesse nas suas soluções de Cloud & Escalabilidade. Preciso de ajuda para configurar uma infraestrutura de nuvem robusta e otimizar a performance das minhas aplicações. Podemos agendar uma conversa?"
            ],
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
        },

        backToTop: "Voltar ao Topo"
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