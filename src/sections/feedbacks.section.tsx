import { TextTube } from "../components/ui/text-tube.component";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { VscQuote } from "react-icons/vsc";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const originalFeedbacks: Testimonial[] = [
  {
    id: 1,
    name: "Igor 'Tony'",
    role: "CEO Cidade Alta RP",
    content: "Fernando is a qualified and committed developer who contributed to improving our technology. I recommend him for innovation and professionalism!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Gerson Aguiar",
    role: "Senior Developer at @loggi",
    content: "Esdras delivered secure and scalable solutions with clean code. I recommend him to anyone looking for quality and efficiency.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Anonymous",
    role: "CEO Snapic",
    content: "Fernando partnership was essential for Snapic. He developed scalable systems with OAuth authentication and Facebook Meta integration.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "DRA Franciele Cruz",
    role: "Advogada",
    content: "Fernando created a page that expanded my reach and brought new clients, generating real results. I recommend him for impact and quality!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Gustavo Delmondes",
    role: "Owner Aegis Capital",
    content: "Fe technical expertise transformed our financial platform. His solutions are robust, secure, and perfectly aligned with our business needs.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Celso Rodrigues",
    role: "Consultor e CEO da OpcaoConvenios",
    content: "Esdras partnership was crucial for our digital transformation. He delivered innovative solutions that optimized our processes and increased efficiency.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

// Duplicar os testimonials usando JavaScript
const feedbacksData: Testimonial[] = Array.from({ length: 3 }, (_, index) =>
  originalFeedbacks.map((testimonial, testimonialIndex) => ({
    ...testimonial,
    id: index * originalFeedbacks.length + testimonialIndex + 1,
  }))
).flat();

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col gap-3 md:gap-4 w-48 md:w-80 flex-shrink-0 relative"
    >
      <div className="text-3xl md:text-4xl text-gray-300 font-bold leading-none">
        <VscQuote />
      </div>
      <p className="text-gray-800 text-xs md:text-sm leading-relaxed max-h-32 overflow-hidden">"{testimonial.content}"</p>
      <div className="flex items-center gap-2 md:gap-3 mt-auto">
        <img src={testimonial.avatar} alt={testimonial.name} className="hidden md:block w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-bold text-gray-900 text-xs md:text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedTestimonials = () => {
  return (
    <div className="relative overflow-hidden py-5">
      <div className="flex gap-4 md:gap-6 animate-scroll">
        {feedbacksData.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
        {feedbacksData.map((testimonial, index) => (
          <TestimonialCard key={`copy-${testimonial.id}`} testimonial={testimonial} index={index + feedbacksData.length} />
        ))}
      </div>
    </div>
  );
};

export const FeedbacksSection = () => {
  return (
    <section id="feedbacks" className="h-screen bg-white w-full relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/services.jpg')",
          filter: "invert(1)",
        }}
      ></div>
      <TextTube text="Endorsements" color="black" fontSize="14vw" className="flex items-center justify-center" finalPosition="0" />

      <div className="w-full py-10 pb-24 absolute bottom-[5vh] left-0">
        <AnimatedTestimonials />
      </div>
    </section>
  );
};
