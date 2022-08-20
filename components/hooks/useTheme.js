import { useEffect, useState } from "react";

function useTheme() {
  const [themeName, setThemeName] = useState("light");
  useEffect(() => {
    // Set initial theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }
    // Listen for theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          setThemeName("dark");
        } else {
          setThemeName("light");
        }
      });
  }, []);
  return {
    themeName,
    isDarkMode: themeName === "dark",
    isLightMode: themeName === "light",
  };
}

export default useTheme;
