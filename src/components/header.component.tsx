import { Sling as Hamburger } from "hamburger-react";
import { usePreferences } from "../contexts/preferences.context";

export const HeaderComponent = () => {
  const { menu, onClose, onOpen } = usePreferences();
  return (
    <header className="flex text-text justify-between items-center h-24 px-12 fixed top-0 left-0 z-50">
      <button onClick={menu ? onClose : onOpen} className="flex items-center cursor-pointer">
        <span>
          <Hamburger size={16} toggled={menu} />
        </span>
        {menu ? (
          <span className="mb-1 ml-1">Close</span>
        ) : (
          <span className="relative w-11 h-11 overflow-hidden mix-blend-difference pb-[2em] -mt-1 group">
            <div className="text absolute w-full h-full flex items-center justify-center transition-all duration-200 ease-out">
              <span className="opacity-100 transition-all duration-200 ease-out ml-1 mix-blend-difference cursor-pointer group-hover:opacity-100 group-hover:-translate-y-[60px]">Menu</span>
            </div>
            <div className="clone absolute w-full h-full flex items-center justify-center">
              <span className="opacity-100 transition-all duration-200 ease-out ml-1 mix-blend-difference cursor-pointer translate-y-[60px] group-hover:opacity-100 group-hover:translate-y-0">Open</span>
            </div>
          </span>
        )}
      </button>
    </header>
  );
};
