import { RiGithubFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
export const HeaderComponent = () => {
  return (
    <header className="flex justify-between items-center h-24 px-12 fixed w-full top-0 left-0 z-50">
      <h2 className="text-xl tracking-wider font-medium">ESDRAS</h2>
      <div className="flex items-center gap-3 text-gray-500">
        <button title="Linkedin" className="p-1 cursor-pointer rounded-full hover:bg-gray-500/30 hover:text-white hover:scale-110 duration-300"><TiSocialLinkedin size={20} /></button>
        <button title="Github" className="p-1 cursor-pointer rounded-full hover:bg-gray-500/30 hover:text-white hover:scale-110 duration-300"><RiGithubFill  size={20} /></button>
      </div>{" "}
    </header>
  );
};
