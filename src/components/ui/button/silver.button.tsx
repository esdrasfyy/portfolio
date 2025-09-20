import { GlowingEffectComponent } from "../glowing-effect.component";

export const SilverButton = ({ children, onClick, className = "", disabled = false, type = "button", size = "md" }: ComponentsI.SilverButtonProps) => {
  const sizeClasses = {
    sm: "w-12 h-8 text-xs",
    md: "w-16 h-10 text-sm",
    lg: "w-20 h-12 text-base",
  };

  return (
    <div className={`relative rounded-lg ${sizeClasses[size]} ${className}`}>
      <GlowingEffectComponent spread={50} glow={true} disabled={disabled} proximity={200} inactiveZone={0.01} borderWidth={1} />
      <button type={type} onClick={onClick} disabled={disabled} className="border-[1px] border-dotted hover:border-solid rounded-lg border-gray-500 hover:border-white duration-500 cursor-pointer w-full h-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
        {children}
      </button>
    </div>
  );
};
