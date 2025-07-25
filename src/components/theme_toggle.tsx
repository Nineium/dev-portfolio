import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(defaultDark);
    document.documentElement.classList.toggle("dark", defaultDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 text-yellow-400 dark:text-yellow-300 p-2 hover:scale-110 transition-transform"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;
