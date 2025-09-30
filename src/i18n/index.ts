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
                    title: "Aegis Capital Hub",
                    description: "First multinational hub connecting brokers and former bankers with over 180 global financial partner institutions",
                    image: "/aegis-home.png",
                    images: ["/aegis-home.png", "/aegis-homepage.png", "/aegis-kit-comercial.png", "/aegis-academy.png", "/aegis-proposal.png", "/aegis-kanban.png"],
                    technologies: ["React", "Nest.js", "TypeScript", "Bitrix CRM", "MySQL", "Tailwind CSS", "Digital Ocean", "Docker", "CI/CD"],
                    projectDescription: "Aegis Capital Hub is a revolutionary white-label platform connecting brokers and former banking professionals with over 180 financial partner institutions worldwide. The platform offers a complete ecosystem with integrated AI chat, Office hub for law firms, Academy with specialized courses, and dozens of credit engines, including IVI - our AI credit analyst. With thousands of active users, it represents the first multinational hub in the financial sector.",
                    keyFeatures: [
                        "Connection with 180+ global financial institutions",
                        "Integrated AI chat for intelligent customer service",
                        "Office: Operational hub for law firms and businesses",
                        "Academy: Professional training and courses platform",
                        "IVI: AI credit analyst with advanced predictive engines",
                        "Customizable white-label system for different markets"
                    ],
                    link: "https://aegiscapital.com.br",
                    date: "Jun 2025"
                },
                {
                    title: "Cidade Alta RP",
                    description: "Largest GTA RP server in Latin America with admin panel, VIP system, and custom FiveM NUIs",
                    image: "/cda-home.png",
                    images: ["/cda-home.png", "/cda-homepage.png", "/cda-admin.png", "/cda-dashboard.png", "/cda-support.png", "/cda-newsroom.png", "/cda-vip.png"],
                    technologies: ["Next.js", "Nest.js", "TypeScript", "Figma", "Tailwind CSS", "FiveM", "Lua", "MySQL", "SEO"],
                    projectDescription: "Cidade Alta RP is the largest GTA RP (roleplay) server in Latin America, offering an immersive gaming experience for thousands of active players. I worked on optimizing SEO, improving site performance, and developing a comprehensive admin panel with Next.js and Nest.js. The project includes custom NUIs (Native User Interfaces) for FiveM, a VIP membership system, news management, player support dashboard, and extensive community features. The platform handles high traffic and provides real-time data processing for game statistics and player management.",
                    keyFeatures: [
                        "Admin panel with Next.js and Nest.js for server management",
                        "Custom NUIs for FiveM enhancing roleplay gameplay",
                        "VIP membership system with exclusive benefits",
                        "SEO optimization achieving top rankings in Latin America",
                        "Real-time player statistics and activity tracking",
                        "News and community management platform"
                    ],
                    link: "https://cidadealtarp.com.br",
                    date: "Oct 2024"
                },
                {
                    title: "Clinivix E-commerce",
                    description: "Complete white-label e-commerce platform for pharmaceutical and health products with admin panel and multi-vendor support",
                    image: "/clinivix-home.png",
                    images: ["/clinivix-home.png", "/clinivix-product.png", "/clinivix-search.png", "/clinivix-checkout.png", "/clinivix-account.png", "/clinivix-admin.png"],
                    technologies: ["React", "Next.js", "Nest.js", "TypeScript", "MySQL", "Tailwind CSS", "Docker", "Payment Gateways", "SEO"],
                    projectDescription: "Clinivix is a complete white-label e-commerce platform specialized in pharmaceutical and health products. The platform features a robust admin panel for inventory management, multi-vendor support, integrated payment gateways, advanced product search with filters, complete checkout flow, customer account management, and real-time order tracking. Built with modern technologies and best practices, it handles high transaction volumes and provides excellent user experience for both customers and administrators.",
                    keyFeatures: [
                        "Complete admin panel for product and order management",
                        "Multi-vendor marketplace with commission system",
                        "Integrated payment gateways (credit card, PIX, boleto)",
                        "Advanced search with category and price filters",
                        "Complete checkout flow with address and payment",
                        "Customer account with order history and tracking"
                    ],
                    link: "https://fernandoesdras.store",
                    date: "Sep 2025"
                },
                {
                    title: "Anomalie Lab",
                    description: "Digital agency platform showcasing innovative technological solutions and custom software development services",
                    image: "/anomalie-homepage.png",
                    images: ["/anomalie-homepage.png", "/anomalie-projects.png", "/anomalie-indications.png", "/anomalie-contact.png", "/anomalie-brand.png"],
                    technologies: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "SEO", "Analytics"],
                    projectDescription: "Anomalie Lab is my digital agency platform designed to attract clients for custom software development solutions. The website showcases our portfolio of innovative projects, client testimonials, and comprehensive services. Built with modern technologies and elegant design, it features smooth animations, intuitive navigation, and a professional presentation of our capabilities. The platform effectively communicates our expertise in turning ideas into real technological solutions, highlighting our commitment to quality, innovation, and strategic partnership with businesses seeking competitive advantages through technology.",
                    keyFeatures: [
                        "Elegant showcase of portfolio projects and case studies",
                        "Client testimonials and recommendations section",
                        "Professional presentation of services and solutions",
                        "Smooth animations and modern UI/UX design",
                        "Lead generation optimized for client acquisition",
                        "SEO and analytics integration for business growth"
                    ],
                    link: "https://www.anomalielab.com",
                    date: "2025"
                },
                {
                    title: "Aegis Capital Landing Page",
                    description: "Lead generation landing page for Aegis Capital showcasing financial solutions and broker services",
                    image: "/aegis-landing-home.png",
                    images: ["/aegis-landing-home.png", "/aegis-landing-about.png", "/aegis-landing-flow.png", "/aegis-landing-simulation.png", "/aegis-landing-portfolio.png", "/aegis-landing-footer.png"],
                    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO", "Lead Generation"],
                    projectDescription: "Professional landing page developed for Aegis Capital focused on lead generation and client acquisition. The page showcases the first multinational multi-bank hub, connecting over 180 financial institutions with 160+ products and services. Features include an interactive commission simulator, workflow demonstration, complete portfolio presentation, and optimized contact forms. Built with modern technologies and conversion-focused design, it effectively communicates Aegis Capital's value proposition as a strategic partner for transforming opportunities into results with focus, strategic partnership, and global reach.",
                    keyFeatures: [
                        "Lead generation optimized for financial sector",
                        "Interactive commission simulator for brokers",
                        "Complete workflow demonstration (6 steps)",
                        "Portfolio showcase with 4 service categories",
                        "Professional presentation of 180+ financial institutions",
                        "SEO optimized with strategic call-to-actions"
                    ],
                    link: "https://aegis-broker.vercel.app",
                    date: "2025"
                },
                {
                    title: "Snapic - Social Media Platform",
                    description: "Complete social media platform with live streaming, real-time messaging, subscriptions, and AI-powered feed",
                    image: "/snapic-home.png",
                    images: ["/snapic-home.png", "/snapic-home.png", "/snapic-home.png", "/snapic-home.png", "/snapic-home.png", "/snapic-home.png"],
                    technologies: ["React", "Next.js", "Nest.js", "TypeScript", "Pusher", "Mercado Pago", "Stripe", "Efipay", "Google OAuth", "Zendesk", "AI", "Digital Ocean", "AWS", "Firebase", "Docker"],
                    projectDescription: "Snapic is a comprehensive social media platform where I implemented complete payment systems with card, PIX, and boleto using Mercado Pago, Stripe, and Efipay. Developed real-time messaging with Pusher for efficient mass communication, live streaming with gift-sending features, and subscription systems with recurring billing. Integrated Google OAuth 2.0 for secure authentication, Zendesk for personalized customer support, and AI (ChatGPT) to improve feed algorithms and user engagement. Worked with cloud services (Digital Ocean, AWS, Firebase Storage) and Docker to optimize workflows and enhance user experience.",
                    keyFeatures: [
                        "Payment integration: Card, PIX, and boleto with Mercado Pago/Stripe/Efipay",
                        "Real-time messaging with Pusher for mass communication",
                        "Live streaming with interactive gift-sending feature",
                        "Subscription systems with recurring billing management",
                        "Google OAuth 2.0 authentication and Zendesk support",
                        "AI-powered feed with ChatGPT for content personalization"
                    ],
                    date: "2024"
                },
                {
                    title: "Urban Vogue - B2B/B2C E-commerce",
                    description: "Advanced white-label e-commerce platform with voice search, multi-gateway payments, AI algorithms, and complete B2B/B2C support",
                    image: "/urban-vogue.png",
                    images: ["/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png"],
                    technologies: ["Next.js", "Nest.js", "React", "TypeScript", "SQL", "OAuth", "Socket.IO", "EfiPay", "Mercado Pago", "Stripe", "PayPal", "WhatsApp", "Zendesk", "AI", "Correios", "Loggi"],
                    projectDescription: "Urban Vogue is an advanced white-label e-commerce platform built for B2B and B2C models, leveraging cutting-edge technologies like Nest.js, React.js, Next.js, TypeScript, SQL, OAuth, voice recognition, webhooks, Socket.IO, email and SMS delivery, WhatsApp Web integration, and four payment gateways (EfiPay, Mercado Pago, Stripe, and PayPal) supporting multiple countries. Integrated with postal services (Correios and Loggi) and developed following SOLID principles and Clean Code practices. The platform offers a flexible, scalable, and secure e-commerce solution designed to meet business and consumer needs, providing optimal user experience across multiple touchpoints.",
                    keyFeatures: [
                        "Voice search: Find products using voice commands",
                        "Multi-gateway payments: EfiPay, Mercado Pago, Stripe, PayPal (Pix, debit, credit)",
                        "Real-time notifications: Updates via dashboard, email, and SMS",
                        "AI-powered algorithm: Enhanced product discovery and user experience",
                        "Advanced admin panel: Complete order and inventory management",
                        "Postal integration: Correios and Loggi for shipping tracking"
                    ],
                    date: "2024"
                },
                {
                    title: "Franciele Cruz - Law Office",
                    description: "Modern and interactive landing page for lawyer Franciele Cruz with focus on usability and intuitive navigation",
                    image: "/franciele-home.png",
                    images: ["/franciele-home.png", "/franciele-homepage.png", "/franciele-practice.png", "/franciele-services.png", "/franciele-trajectory.png", "/franciele-contact.png"],
                    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "NFC Technology", "SEO"],
                    projectDescription: "Modern and interactive landing page for lawyer Franciele Cruz. The project required an elegant design with focus on usability and intuitive navigation. I implemented subtle animations and a responsive structure to highlight legal services clearly and accessibly on any device. The page attracted clients from other states, making services more accessible and attractive. The client noted that the navigation is very intuitive, and the design, besides being beautiful, reflects the company's professional image. Additionally, the NFC business card impressed clients, offering an innovative experience and easy access to contact information.",
                    keyFeatures: [
                        "Elegant and professional design reflecting brand identity",
                        "Intuitive navigation with smooth user experience",
                        "Responsive structure working perfectly on all devices",
                        "Subtle animations highlighting services and content",
                        "NFC business card technology for modern networking",
                        "SEO optimization attracting clients from other states"
                    ],
                    link: "https://www.drafrancielecruz.com.br",
                    date: "2024"
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
            viewMore: "View More",
            visitProject: "Visit Project"
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
                    title: "Hub Aegis Capital",
                    description: "Primeiro hub multinacional que conecta brokers e ex-bancários com mais de 180 instituições financeiras parceiras globalmente",
                    image: "/aegis-home.png",
                    images: ["/aegis-home.png", "/aegis-homepage.png", "/aegis-kit-comercial.png", "/aegis-academy.png", "/aegis-proposal.png", "/aegis-kanban.png"],
                    technologies: ["React", "Nest.js", "TypeScript", "Bitrix CRM", "MySQL", "Tailwind CSS", "Digital Ocean", "Docker", "CI/CD"],
                    projectDescription: "Hub Aegis Capital é uma plataforma white-label revolucionária que conecta brokers e profissionais ex-bancários com mais de 180 instituições financeiras parceiras ao redor do mundo. A plataforma oferece um ecossistema completo com chat IA integrado, aba Office para escritórios de advocacia, Academy com cursos especializados e dezenas de motores de crédito, incluindo o IVI - nossa IA analista de crédito. Com milhares de usuários ativos, representa o primeiro hub multinacional do setor financeiro.",
                    keyFeatures: [
                        "Conexão com mais de 180 instituições financeiras globais",
                        "Chat IA integrado para atendimento inteligente",
                        "Office: Hub operacional para escritórios e empresas",
                        "Academy: Plataforma de cursos e capacitação profissional",
                        "IVI: IA analista de crédito com motores preditivos avançados",
                        "Sistema white-label customizável para diferentes mercados"
                    ],
                    link: "https://aegiscapital.com.br",
                    date: "Jun 2025"
                },
                {
                    title: "Cidade Alta RP",
                    description: "Maior servidor de GTA RP da América Latina com painel admin, sistema VIP e NUIs customizadas para FiveM",
                    image: "/cda-home.png",
                    images: ["/cda-home.png", "/cda-homepage.png", "/cda-admin.png", "/cda-dashboard.png", "/cda-support.png", "/cda-newsroom.png", "/cda-vip.png"],
                    technologies: ["Next.js", "Nest.js", "TypeScript", "Figma", "Tailwind CSS", "FiveM", "Lua", "MySQL", "SEO"],
                    projectDescription: "Cidade Alta RP é o maior servidor de GTA RP (roleplay) da América Latina, oferecendo uma experiência de jogo imersiva para milhares de jogadores ativos. Trabalhei na otimização de SEO, melhoria de performance do site e desenvolvimento de um painel administrativo completo com Next.js e Nest.js. O projeto inclui NUIs (Native User Interfaces) customizadas para FiveM, sistema de VIP com benefícios exclusivos, gerenciamento de notícias, dashboard de suporte ao jogador e recursos extensivos para a comunidade. A plataforma lida com alto tráfego e fornece processamento de dados em tempo real para estatísticas de jogo e gestão de jogadores.",
                    keyFeatures: [
                        "Painel administrativo com Next.js e Nest.js para gestão do servidor",
                        "NUIs customizadas para FiveM aprimorando a jogabilidade roleplay",
                        "Sistema de VIP com benefícios exclusivos e planos",
                        "Otimização de SEO alcançando top rankings na América Latina",
                        "Estatísticas de jogadores e rastreamento de atividades em tempo real",
                        "Plataforma de gerenciamento de notícias e comunidade"
                    ],
                    link: "https://cidadealtarp.com.br",
                    date: "Out 2024"
                },
                {
                    title: "Clinivix E-commerce",
                    description: "Plataforma completa de e-commerce white-label para produtos farmacêuticos e de saúde com painel admin e suporte multi-vendedor",
                    image: "/clinivix-home.png",
                    images: ["/clinivix-home.png", "/clinivix-product.png", "/clinivix-search.png", "/clinivix-checkout.png", "/clinivix-account.png", "/clinivix-admin.png"],
                    technologies: ["React", "Next.js", "Nest.js", "TypeScript", "MySQL", "Tailwind CSS", "Docker", "Payment Gateways", "SEO"],
                    projectDescription: "Clinivix é uma plataforma completa de e-commerce white-label especializada em produtos farmacêuticos e de saúde. A plataforma possui um painel administrativo robusto para gestão de estoque, suporte multi-vendedor, gateways de pagamento integrados, busca avançada de produtos com filtros, fluxo completo de checkout, gestão de conta do cliente e rastreamento de pedidos em tempo real. Construída com tecnologias modernas e melhores práticas, lida com alto volume de transações e oferece excelente experiência para clientes e administradores.",
                    keyFeatures: [
                        "Painel admin completo para gestão de produtos e pedidos",
                        "Marketplace multi-vendedor com sistema de comissão",
                        "Gateways de pagamento integrados (cartão, PIX, boleto)",
                        "Busca avançada com filtros de categoria e preço",
                        "Fluxo completo de checkout com endereço e pagamento",
                        "Conta do cliente com histórico e rastreamento de pedidos"
                    ],
                    link: "https://fernandoesdras.store",
                    date: "Set 2025"
                },
                {
                    title: "Anomalie Lab",
                    description: "Plataforma de agência digital apresentando soluções tecnológicas inovadoras e serviços de desenvolvimento de software customizado",
                    image: "/anomalie-homepage.png",
                    images: ["/anomalie-homepage.png", "/anomalie-projects.png", "/anomalie-indications.png", "/anomalie-contact.png", "/anomalie-brand.png"],
                    technologies: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "SEO", "Analytics"],
                    projectDescription: "Anomalie Lab é minha plataforma de agência digital projetada para atrair clientes para soluções de desenvolvimento de software customizado. O site apresenta nosso portfólio de projetos inovadores, depoimentos de clientes e serviços abrangentes. Construído com tecnologias modernas e design elegante, possui animações suaves, navegação intuitiva e uma apresentação profissional de nossas capacidades. A plataforma comunica efetivamente nossa expertise em transformar ideias em soluções tecnológicas reais, destacando nosso compromisso com qualidade, inovação e parceria estratégica com empresas que buscam vantagens competitivas através da tecnologia.",
                    keyFeatures: [
                        "Showcase elegante de projetos do portfólio e cases de sucesso",
                        "Seção de depoimentos e recomendações de clientes",
                        "Apresentação profissional de serviços e soluções",
                        "Animações suaves e design UI/UX moderno",
                        "Geração de leads otimizada para captação de clientes",
                        "Integração SEO e analytics para crescimento do negócio"
                    ],
                    link: "https://www.anomalielab.com",
                    date: "2025"
                },
                {
                    title: "Aegis Capital Landing Page",
                    description: "Landing page de geração de leads para Aegis Capital apresentando soluções financeiras e serviços para brokers",
                    image: "/aegis-landing-home.png",
                    images: ["/aegis-landing-home.png", "/aegis-landing-about.png", "/aegis-landing-flow.png", "/aegis-landing-simulation.png", "/aegis-landing-portfolio.png", "/aegis-landing-footer.png"],
                    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO", "Lead Generation"],
                    projectDescription: "Landing page profissional desenvolvida para Aegis Capital focada em geração de leads e captação de clientes. A página apresenta o primeiro hub multibancos multinacional, conectando mais de 180 instituições financeiras com 160+ produtos e serviços. Inclui simulador interativo de comissões, demonstração de fluxo de trabalho, apresentação completa do portfólio e formulários de contato otimizados. Construída com tecnologias modernas e design focado em conversão, comunica efetivamente a proposta de valor da Aegis Capital como parceiro estratégico para transformar oportunidades em resultados com foco, parceria estratégica e alcance global.",
                    keyFeatures: [
                        "Geração de leads otimizada para setor financeiro",
                        "Simulador interativo de comissões para brokers",
                        "Demonstração completa do fluxo de trabalho (6 etapas)",
                        "Showcase de portfólio com 4 categorias de serviços",
                        "Apresentação profissional de 180+ instituições financeiras",
                        "SEO otimizado com call-to-actions estratégicos"
                    ],
                    link: "https://aegis-broker.vercel.app",
                    date: "2025"
                },
                {
                    title: "Snapic - Plataforma de Mídia Social",
                    description: "Plataforma completa de mídia social com transmissão ao vivo, mensagens em tempo real, assinaturas e feed alimentado por IA",
                    image: "/snapic-home.png",
                    images: ["/snapic-home.png", "/snapic-home.png", "/snapic-home.png", "/snapic-home.png", "/snapic-home.png", "/snapic-home.png"],
                    technologies: ["React", "Next.js", "Nest.js", "TypeScript", "Pusher", "Mercado Pago", "Stripe", "Efipay", "Google OAuth", "Zendesk", "IA", "Digital Ocean", "AWS", "Firebase", "Docker"],
                    projectDescription: "Snapic é uma plataforma completa de mídia social onde implementei sistemas completos de pagamento com cartão, PIX e boleto usando Mercado Pago, Stripe e Efipay. Desenvolvi mensagens em tempo real com Pusher para comunicação em massa eficiente, transmissão ao vivo com recursos de envio de presentes e sistemas de assinatura com cobrança recorrente. Integrei Google OAuth 2.0 para autenticação segura, Zendesk para suporte personalizado ao cliente e IA (ChatGPT) para melhorar algoritmos de feed e engajamento do usuário. Trabalhei com serviços em nuvem (Digital Ocean, AWS, Firebase Storage) e Docker para otimizar fluxos de trabalho e aprimorar a experiência do usuário.",
                    keyFeatures: [
                        "Integração de pagamentos: Cartão, PIX e boleto com Mercado Pago/Stripe/Efipay",
                        "Mensagens em tempo real com Pusher para comunicação em massa",
                        "Transmissão ao vivo com recurso interativo de envio de presentes",
                        "Sistemas de assinatura com gestão de cobrança recorrente",
                        "Autenticação Google OAuth 2.0 e suporte Zendesk",
                        "Feed alimentado por IA com ChatGPT para personalização de conteúdo"
                    ],
                    date: "2024"
                },
                {
                    title: "Urban Vogue - E-commerce B2B/B2C",
                    description: "Plataforma avançada de e-commerce white-label com pesquisa por voz, múltiplos gateways de pagamento, algoritmos de IA e suporte completo B2B/B2C",
                    image: "/urban-vogue.png",
                    images: ["/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png", "/urban-vogue.png"],
                    technologies: ["Next.js", "Nest.js", "React", "TypeScript", "SQL", "OAuth", "Socket.IO", "EfiPay", "Mercado Pago", "Stripe", "PayPal", "WhatsApp", "Zendesk", "IA", "Correios", "Loggi"],
                    projectDescription: "Urban Vogue é uma plataforma avançada de e-commerce white-label construída para modelos B2B e B2C, aproveitando tecnologias de ponta como Nest.js, React.js, Next.js, TypeScript, SQL, OAuth, reconhecimento de voz, webhooks, Socket.IO, envio de e-mail e SMS, integração WhatsApp Web e quatro gateways de pagamento (EfiPay, Mercado Pago, Stripe e PayPal) suportando vários países. Integrada com serviços postais (Correios e Loggi) e desenvolvida seguindo princípios SOLID e Clean Code. A plataforma oferece uma solução de e-commerce flexível, escalável e segura, projetada para atender necessidades de empresas e consumidores, proporcionando experiência de usuário ideal em vários pontos de contato.",
                    keyFeatures: [
                        "Pesquisa por voz: Encontre produtos usando comandos de voz",
                        "Múltiplos gateways: EfiPay, Mercado Pago, Stripe, PayPal (Pix, débito, crédito)",
                        "Notificações em tempo real: Atualizações via painel, e-mail e SMS",
                        "Algoritmo alimentado por IA: Descoberta de produtos aprimorada",
                        "Painel admin avançado: Gestão completa de pedidos e inventário",
                        "Integração postal: Correios e Loggi para rastreamento de envios"
                    ],
                    date: "2024"
                },
                {
                    title: "Franciele Cruz - Escritório de Advocacia",
                    description: "Landing page moderna e interativa para a advogada Franciele Cruz com foco em usabilidade e navegação intuitiva",
                    image: "/franciele-home.png",
                    images: ["/franciele-home.png", "/franciele-homepage.png", "/franciele-practice.png", "/franciele-services.png", "/franciele-trajectory.png", "/franciele-contact.png"],
                    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Tecnologia NFC", "SEO"],
                    projectDescription: "Landing page moderna e interativa para a advogada Franciele Cruz. O projeto exigiu um design elegante com foco na usabilidade e navegação intuitiva. Implementei animações sutis e uma estrutura responsiva para destacar os serviços jurídicos de forma clara e acessível em qualquer dispositivo. A página chamou a atenção de clientes de outros estados, tornando os serviços mais acessíveis e atraentes. A cliente apontou que a navegação é muito intuitiva, e o design, além de ser bonito, reflete a imagem profissional da empresa. Além disso, o cartão de visita com tecnologia NFC impressionou os clientes, oferecendo uma experiência inovadora e fácil acesso a informações de contato.",
                    keyFeatures: [
                        "Design elegante e profissional refletindo identidade da marca",
                        "Navegação intuitiva com experiência de usuário fluida",
                        "Estrutura responsiva funcionando perfeitamente em todos dispositivos",
                        "Animações sutis destacando serviços e conteúdo",
                        "Tecnologia NFC em cartão de visita para networking moderno",
                        "Otimização SEO atraindo clientes de outros estados"
                    ],
                    link: "https://www.drafrancielecruz.com.br",
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
            viewMore: "Ver Mais",
            visitProject: "Visitar Projeto"
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