import { useState } from "react";
import s from "./_s.module.scss";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleMenuClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <header className={s["h"]}>
        <div className={s.logo}>
          <span>MAISON PYRAMIDE</span>
        </div>
        <nav>
          <div>home</div>
          <div>projects</div>
          <div>services</div>
        </nav>
        <div className={s.contact}>
          <button>contact</button>
        </div>
        <button onClick={handleMenuClick}>{isOpened ? "CLOSE" : "MENU"}</button>
      </header>
    </>
  );
};

export default Header;
