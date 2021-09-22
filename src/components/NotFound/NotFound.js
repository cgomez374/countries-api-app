import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NotFound.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

const NotFound = () => {
  const { darkTheme} = useContext(ThemeContext);

  return (
    <div
      className={Styles.notFound}
      id={darkTheme ? "darkBackground" : undefined}
    >
      <h1 id={darkTheme ? "darkBackground" : undefined}>Page Not Found :(</h1>
      <Link to="/">
        <button id={darkTheme ? "darkElements" : undefined}>go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
