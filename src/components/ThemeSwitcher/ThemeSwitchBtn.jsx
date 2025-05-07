import React from "react";
import "./ThemeSwitch.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Slices/ThemeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect } from "react";

function ThemeSwitchBtn() {
  const mode = useSelector((state) => state.ThemeMode.ThemeMode);
  console.log(mode);

  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="ThemeBtn"
        aria-label="Toggle Theme"
        title="Toggle Theme"
      >
        {mode === "dark" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

export default ThemeSwitchBtn;
