import { RiArrowRightSLine } from "react-icons/ri";
import { ShinyTextComponent } from "../ui/shiny-text.component";
import { GlowingEffectComponent } from "../ui/glowing-effect.component";
import { useTranslation } from "react-i18next";

export const SilhouetteCardHome = ({ type, icon: Icon, children }: { type: string; icon: any; children: React.ReactNode }) => {
  const { t } = useTranslation();
  
  return (
  <div className="w-96 h-60 max-[1690px]:w-80 max-[1690px]:h-[190px] max-lg:w-52 max-lg:h-32 border border-dotted border-gray-500 rounded-xs relative">
    <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
    <div className="flex flex-col items-center justify-between h-full text-white">
      <div className="flex items-center justify-between py-2 max-[1690px]:py-1 w-full border-b border-gray-600/50 px-4">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 max-[1690px]:w-1.5 max-[1690px]:h-1.5 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 max-[1690px]:w-1.5 max-[1690px]:h-1.5 rounded-full bg-gray-700"></div>
          <div className="w-2 h-2 max-[1690px]:w-1.5 max-[1690px]:h-1.5 rounded-full bg-gray-900"></div>
        </div>
        <span className="text-gray-500 flex gap-2 items-center">
          <span className="max-[1690px]:text-[12px]"><Icon /></span>
          <span className="max-[1690px]:text-[10px] text-xs"><ShinyTextComponent text={type} speed={3} /></span>
        </span>
      </div>
      <div className="group relative flex-1 w-full p-2 overflow-hidden flex flex-col gap-2">
        {children}
        <a
          href="#work"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold opacity-0 transition-all duration-300 delay-100 z-20 border-none cursor-pointer group-hover:opacity-100 group-hover:scale-100 flex items-center gap-2"
        >
          <span className="text-nowrap">{t('modal.viewMore')}</span>
          <span className="hover:rotate-45 duration-300">
            <RiArrowRightSLine size={16} />
          </span>
        </a>
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-sm opacity-0 transition-all duration-300 ease-out pointer-events-none z-10 group-hover:opacity-100"></div>
      </div>
    </div>
  </div>
  );
};
