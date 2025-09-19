import { CgScrollV } from "react-icons/cg";

export const Navigation = () => {
  return (
    <>
      <nav
        className="flex justify-between items-center w-full px-12 fixed bottom-8 z-50"
        role="navigation"
        aria-label="Navegação principal"
      >
        <ul className="flex items-center gap-6 uppercase text-sm tracking-wider">
          <li className="menu__link">
            <a href="#about" aria-label="Sobre mim">
              About
            </a>
          </li>
          <li className="menu__link">
            <a href="#work" aria-label="Meu trabalho">
              Work
            </a>
          </li>
          <li className="menu__link">
            <a href="#contact" aria-label="Contato">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <span className="absolute bottom-8 animate-bounce left-1/2 -translate-x-1/2 text-gray-300">
        <CgScrollV size={20} />
      </span>
    </>
  );
};
