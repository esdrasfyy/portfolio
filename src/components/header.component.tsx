import { Sling as Hamburger } from "hamburger-react";
import { usePreferences } from "../contexts/preferences.context";


export const HeaderComponent = () => {
  const { menu, onClose, onOpen } = usePreferences();
  return (
    <header className="flex justify-between items-center h-24 px-12 fixed w-full top-0 left-0 z-50">
      <button
        onClick={menu ? onClose : onOpen}
        className="flex items-center cursor-pointer"
      >
        <span>
          <Hamburger size={16} toggled={menu} />
        </span>
        {menu ? (
            <span className="mb-1 ml-1">Close</span>
        ) : (
          <span className="animated-button">
            <div className="text mix-blend-difference text-white">
              <span>Menu</span>
            </div>
            <div className="clone mix-blend-difference text-white">
              <span>Open</span>
            </div>
          </span>
        )}
      </button>
    </header>
  );
};
