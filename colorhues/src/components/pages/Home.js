import { useEffect, useRef } from "react";
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

  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const cssProperties = Array.from(computedStyle).reduce(
        (acc, property) => {
          acc[property] = computedStyle.getPropertyValue(property);
          return acc;
        },
        {}
      );

      const cssPropertiesString = JSON.stringify(cssProperties, null, 2);
      document.getElementById("css-output").innerText = cssPropertiesString;

      console.log(cssProperties);
    }
  }, []);

  return (
    <div className="home" data-theme={theme} id="home">
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
