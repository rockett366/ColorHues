import useLocalStorage from "use-local-storage";

function Left() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="leftControl" data-theme={theme}>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default Left;
