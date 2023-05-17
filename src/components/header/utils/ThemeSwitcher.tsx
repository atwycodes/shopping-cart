import { useState } from "react";

function changeTheme(): void {
  const html = document.documentElement;

  html.classList.contains("dark")
    ? html.classList.remove("dark")
    : html.classList.add("dark");
}

function ThemeSwitcher() {
  const [htmlState, setHtmlState] = useState("dark");

  if (htmlState === "dark") {
    return (
      <button
        onClick={() => {
          changeTheme();
          setHtmlState("light");
        }}
        className="h-12 w-12 rounded-full transition-all"
      >
        <span className="emoji-theme-switcher">🌙</span>
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          changeTheme();
          setHtmlState("dark");
        }}
        className="h-12 w-12 rounded-full transition-all"
      >
        <span className="emoji-theme-switcher">☀</span>
      </button>
    );
  }
}

export default ThemeSwitcher;
