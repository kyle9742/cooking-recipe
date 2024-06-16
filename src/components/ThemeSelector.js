import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../context/ThemeContext";
import modeIcon from "../assets/mode-icon.svg";

//테마색을 3가지
const themeColors = ["#58249c", "#249c6b", "#b70233"];
//테마색들을 표시
const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useContext(ThemeContext);
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
    console.log(mode);
  };
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          alt="모드변경아이콘"
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
