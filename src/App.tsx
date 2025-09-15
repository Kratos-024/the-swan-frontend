import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";

interface ThemeState {
  isDark: boolean;
  isLoading: boolean;
}

type Theme = "light" | "dark";

function App() {
  const [themeState, setThemeState] = useState<ThemeState>({
    isDark: false,
    isLoading: true,
  });

  useEffect(() => {
    const initializeTheme = (): void => {
      try {
        if (typeof window === "undefined") {
          setThemeState({ isDark: false, isLoading: false });
          return;
        }

        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        const shouldUseDarkMode =
          savedTheme === "dark" || (!savedTheme && prefersDark);

        if (shouldUseDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        setThemeState({
          isDark: shouldUseDarkMode,
          isLoading: false,
        });
      } catch (error) {
        console.error("Error initializing theme:", error);
        setThemeState({ isDark: false, isLoading: false });
      }
    };

    initializeTheme();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent): void => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        const shouldUseDarkMode = e.matches;

        if (shouldUseDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        setThemeState((prev) => ({ ...prev, isDark: shouldUseDarkMode }));
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = (): void => {
    try {
      const newIsDark = !themeState.isDark;
      const newTheme: Theme = newIsDark ? "dark" : "light";

      if (newIsDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("theme", newTheme);
      setThemeState((prev) => ({ ...prev, isDark: newIsDark }));

      console.log(`Theme switched to: ${newTheme}`);
    } catch (error) {
      console.error("Error toggling theme:", error);
    }
  };

  if (themeState.isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      className={`${
        themeState.isDark ? "dark" : ""
      } min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      <HeroSection isDark={themeState.isDark} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
