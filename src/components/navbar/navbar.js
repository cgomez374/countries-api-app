import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import Styles from "./navbar.module.css";

const Navbar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className={Styles.navbar}>
        <ul className={Styles.nav} id={darkTheme ? "darkElements" : undefined}>
          <li>where in the world?</li>
          <li onClick={toggleTheme} id={Styles.icon}>
            <i class="far fa-moon"></i> dark mode
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
