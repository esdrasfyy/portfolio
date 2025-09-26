import { TextTube } from "../components/ui/text-tube.component";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { VscQuote } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const getTestimonials = (t: any) => {
  const testimonials = t("feedbacks.testimonials", { returnObjects: true }) as any[];
  return testimonials.map((testimonial: any, index: number) => ({
    id: index + 1,
    name: testimonial.name,
    role: testimonial.role,
    content: testimonial.content,
    avatar: testimonial.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  }));
};

// Função para duplicar os testimonials
const getFeedbacksData = (t: any) => {
  const originalTestimonials = getTestimonials(t);
  return Array.from({ length: 3 }, (_, index) =>
    originalTestimonials.map((testimonial, testimonialIndex) => ({
      ...testimonial,
      id: index * originalTestimonials.length + testimonialIndex + 1,
    }))
  ).flat();
};

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
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="hidden md:block w-10 h-10 rounded-full object-cover" 
          loading="lazy"
          decoding="async"
        />
        <div>
          <p className="font-bold text-gray-900 text-xs md:text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedTestimonials = ({ t }: { t: any }) => {
  return (
    <div className="relative overflow-hidden py-5">
      <div className="flex gap-4 md:gap-6 animate-scroll">
        {getFeedbacksData(t).map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
        {getFeedbacksData(t).map((testimonial, index) => (
          <TestimonialCard key={`copy-${testimonial.id}`} testimonial={testimonial} index={index + getFeedbacksData(t).length} />
        ))}
      </div>
    </div>
  );
};

export const FeedbacksSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="feedbacks" className="h-screen bg-white w-full relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/services.jpg')",
          filter: "invert(1)",
        }}
      ></div>
      <TextTube 
        key={`texttube-${i18n.language}`}
        text={t('feedbacks.title')} 
        color="black" 
        fontSize="14vw" 
        className="flex items-center justify-center" 
        finalPosition="0" 
      />

      <div className="w-full py-10 pb-24 absolute bottom-[5vh] left-0">
        <AnimatedTestimonials t={t} />
      </div>
    </section>
  );
};
