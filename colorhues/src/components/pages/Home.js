import Right from "../sides/Right";
import useLocalStorage from "use-local-storage";

function Home() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchThemeLight = () => {
    setTheme("light");
  };
  const switchThemeDark = () => {
    setTheme("dark");
  };
  const switchThemePink = () => {
    setTheme("pink");
  };
  const switchThemeNatural = () => {
    setTheme("natural");
  };

  return (
    <div className="home" data-theme={theme}>
      <div className="leftControl">
        <button onClick={switchThemeLight}>light </button>
        <button onClick={switchThemeDark}>Dark</button>
        <button onClick={switchThemePink}>pink</button>
        <button onClick={switchThemeNatural}>nude</button>
      </div>
      <Right />
    </div>
  );
}

export default Home;
