import { TextTube } from "../components/ui/text-tube.component";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const feedbacksData: Testimonial[] = [
  {
    id: 1,
    name: "Vitus",
    role: "Student Journalist",
    content: "Dia cuts the busywork. With just a prompt and tabs, I find sources in minutes, not hours.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Kimberly",
    role: "Agency Director",
    content: "Personalization in Dia is a secret weapon to stay pitch perfect across all our client brands.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Los",
    role: "Product Engineer",
    content: "I make new apps all the time. There's a ton of context, but Dia helps me solve problems super fast.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Pedro",
    role: "Digital Strategist",
    content: "Dia helps me localize content for Brazil. When I'm stuck, Dia suggests words for a Brazilian audience.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Quinn",
    role: "Engineering Student",
    content: "Dia is my eng tutor: it answers questions in-line and gives me practice problems to test myself.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Sarah",
    role: "UX Designer",
    content: "Dia helps me understand user feedback better. It's like having a research assistant that never sleeps.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 1,
    name: "Vitus",
    role: "Student Journalist",
    content: "Dia cuts the busywork. With just a prompt and tabs, I find sources in minutes, not hours.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Kimberly",
    role: "Agency Director",
    content: "Personalization in Dia is a secret weapon to stay pitch perfect across all our client brands.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Los",
    role: "Product Engineer",
    content: "I make new apps all the time. There's a ton of context, but Dia helps me solve problems super fast.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Pedro",
    role: "Digital Strategist",
    content: "Dia helps me localize content for Brazil. When I'm stuck, Dia suggests words for a Brazilian audience.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Quinn",
    role: "Engineering Student",
    content: "Dia is my eng tutor: it answers questions in-line and gives me practice problems to test myself.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Sarah",
    role: "UX Designer",
    content: "Dia helps me understand user feedback better. It's like having a research assistant that never sleeps.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

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
        delay: index * 0.1 
      }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 h-80 w-96 flex-shrink-0"
    >
      <p className="text-gray-700 text-lg leading-relaxed">{testimonial.content}</p>
      <div className="flex items-center gap-3 mt-auto">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedTestimonials = () => {
  return (
    <div className="relative overflow-hidden py-5">
      <div className="flex gap-6 animate-scroll">
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
      <TextTube 
        text="Endorsements" 
        color="black" 
        fontSize="14vw" 
        className="flex items-center justify-center"
        finalPosition="-150"
      />

      <div className="w-full py-10 bg-white pb-24">
        <AnimatedTestimonials />
      </div>
    </section>
  );
};
