import { Sling as Hamburger } from "hamburger-react";
import { usePreferences } from "../contexts/preferences.context";

export const HeaderComponent = () => {
  const { menu, onClose, onOpen } = usePreferences();
  return (
    <header className="flex text-text justify-between items-center h-24 px-12 top-0 left-0 z-[60] max-[1500px]:px-4 absolute">
      <button onClick={menu ? onClose : onOpen} className="flex items-center cursor-pointer pr-4">
        <span>
          <Hamburger size={16} toggled={menu} />
        </span>
        {menu ? (
          <span className="mb-0.5 ml-1">Close</span>
        ) : (
          <span className="relative w-11 h-11 overflow-hidden pb-[2em] -mt-0.5 group z-50">
            <div className="text absolute w-full h-full flex items-center justify-center transition-all duration-200 ease-out">
            <span className="transition-all duration-200 ease-out ml-1 cursor-pointer group-hover:-translate-y-[60px] mix-blend-difference text-white tracking-wider">Menu</span>            </div>
            <div className="clone absolute w-full h-full flex items-center justify-center">
              <span className="transition-all duration-200 ease-out ml-1 cursor-pointer translate-y-[60px] group-hover:translate-y-0">Open</span>
            </div>
          </span>
        )}
      </button>
    </header>
  );
};
