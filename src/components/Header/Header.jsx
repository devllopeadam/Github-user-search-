/* eslint-disable react-hooks/exhaustive-deps */
import "./header.scss";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";
import { useState, useEffect } from "react";

const Header = () => {
  // getDataFromLocalStorage();
  const [theme, setTheme] = useState(false);
  const HTML = document.querySelector("html");

  useEffect(() => {
    if (theme) {
      HTML.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    } else {
      HTML.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  // function getDataFromLocalStorage() {
  //   if (localStorage.getItem(theme) === "light") {
  //     setTheme(true);
  //   } else {
  //     setTheme(false);
  //   }
  // }

  return (
    <div className="header">
      <h1>Devfinder</h1>
      <div
        className="theme"
        onClick={() => {
          setTheme(!theme);
        }}>
        <p>{theme ? "dark" : "light"}</p>
        <img src={theme ? Moon : Sun} />
      </div>
    </div>
  );
};

export default Header;
