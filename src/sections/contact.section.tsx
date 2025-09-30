import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { WaveInput } from "../components/ui/wave-input.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const schema = (t: any) => yup.object({
  name: yup.string().required(t('contact.errors.nameRequired')),
  subject: yup.string().required(t('contact.errors.subjectRequired')),
  company: yup.string(),
  email: yup.string().email(t('contact.errors.emailInvalid')).required(t('contact.errors.emailRequired')),
  message: yup.string().required(t('contact.errors.messageRequired')),
});

type FormData = {
  name: string;
  subject: string;
  company?: string;
  email: string;
  message: string;
};

export const ContactSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { once: false });
  const leftInView = useInView(leftRef, { once: false });
  const rightInView = useInView(rightRef, { once: false });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(t)),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-20 px-8 md:px-4 flex justify-center items-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
          style={{
            backgroundImage:"url('/contact.jpg')",
            rotate: "180deg",
          }}
        ></div>
      <motion.div ref={containerRef} className="max-w-[1500px] z-10 mx-auto flex flex-col lg:flex-row gap-44 max-lg:gap-2 justify-between items-center w-full min-h-full relative" initial={{ opacity: 0 }} animate={containerInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <motion.div
          ref={leftRef}
          className="space-y-12 max-lg:space-y-0 flex flex-col justify-between w-full h-[500px] max-lg:h-fit my-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div>
            <h2 className="text-6xl font-thin text-black mb-4 max-md:text-5xl">{t('contact.subtitle')}</h2>
            <p className="text-gray-600 mb-8 text-lg mt-20 max-lg:mt-12 max-md:text-base max-md:mt-6">{t('contact.emailAddress')}</p>
          </div>

          <div className="flex w-full justify-between items-end max-lg:hidden">
            <div className="mb-1.5">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('contact.title')}</h3>
              <div className="flex space-x-6 text-xl">
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  <FaGithub />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  <MdOutlineWhatsapp />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <h3 className="text-xl font-semibold text-gray-900">{t('contact.location')}</h3>
              <p className="text-lg text-gray-600 mt-3">{t('contact.phone')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div ref={rightRef} className="space-y-12 w-full" initial={{ opacity: 0, x: 50 }} animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          <h3 className="text-3xl font-bold text-gray-900 max-md:text-2xl max-md:mb-4">{t('contact.title')}</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 max-md:space-y-5">
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-5 gap-12">
              <WaveInput {...register("name")} name="name" placeholder={t('contact.name')} type="text" required error={errors.name?.message} />

              <WaveInput {...register("subject")} name="subject" placeholder={t('contact.subject')} type="text" required error={errors.subject?.message} />

              <WaveInput {...register("company")} name="company" placeholder={t('contact.company')} type="text" error={errors.company?.message} />

              <WaveInput {...register("email")} name="email" placeholder={t('contact.email')} type="email" required error={errors.email?.message} />
            </div>

            <WaveInput {...register("message")} name="message" placeholder={t('contact.message')} type="textarea" rows={1} error={errors.message?.message} />

            <div className="flex  mt-20 max-md:mt-12 justify-start">
              <button type="submit" className="group flex items-center space-x-2 text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                <span className="text-black underline font-semibold">{t('contact.send')}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </form>
        </motion.div>
        <div className="w-full justify-between items-end hidden max-lg:flex mt-12">
          <div className="mb-1.5 max-md:mb-0.5">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 max-md:text-lg">{t('contact.findUs')}</h3>
            <div className="flex space-x-6 text-xl">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <MdOutlineWhatsapp />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <h3 className="text-xl font-semibold text-gray-900 max-md:text-lg">{t('contact.location')}</h3>
            <p className="text-lg text-gray-600 mt-3 max-md:text-base max-md:mt-3">{t('contact.phone')}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
