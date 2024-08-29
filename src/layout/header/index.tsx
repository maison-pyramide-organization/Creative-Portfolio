import s from "./_s.module.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../menu";

const Header = () => {
  const { pathname, hash } = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setIsMenuOpened(false);
    document.getElementById("root")?.classList.remove("menu-opened");
  }, [pathname, hash]);

  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
    document.getElementById("root")?.classList.toggle("menu-opened");
  };

  return (
    <>
      <header className={s["h"]}>
        <div className={s.logo}>
          <span>MAISON PYRAMIDE</span>
        </div>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/#services">SERVICES</Link>
        </nav>

        <button className="btn">CONTACT</button>

        <div className={s["menu"]} onClick={toggleMenu}>
          {isMenuOpened ? "CLOSE" : "MENU"}
        </div>
      </header>

      {isMenuOpened && <Menu />}
    </>
  );
};

export default Header;
