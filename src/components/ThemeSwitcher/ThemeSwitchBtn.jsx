import React from "react";
import "./ThemeSwitch.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Slices/ThemeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSwitchBtn() {
  const mode = useSelector((state) => state.Theme.currentTheme[0].mode);
  console.log(mode);

  const Dispatch = useDispatch();
  const body = document.body;

  function handleThemeMode() {
    Dispatch(toggleTheme());
    if (mode === "dark") {
      body.style.backgroundColor = "#000";
      body.style.color = "#fff";
    } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
    }
  }

  return (
    <div>
      <button onClick={handleThemeMode} className="ThemeBtn">
        {mode === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default ThemeSwitchBtn;
