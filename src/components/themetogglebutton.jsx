// src/components/ThemeToggleButton.jsx
import { useTheme } from "../context/ThemeContext";
import "../styles/theme-toggle.css"; // New CSS file

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggleButton;
