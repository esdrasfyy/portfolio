import { MdTranslate } from "react-icons/md";
export const HeaderComponent = () => {
  return (
    <header className="flex justify-between items-center h-24 px-12 fixed w-full top-0 left-0 z-50">
      <h2 className="text-xl tracking-wider font-medium">ESDRAS</h2>
      <button className="p-2 cursor-pointer rounded-full hover:bg-gray-500/30 hover:text-white hover:scale-110 duration-300" aria-label="Alterar idioma">
          <MdTranslate />
        </button>
    </header>
  );
};
