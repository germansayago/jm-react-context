import { useState, createContext } from "react";

const ThemeContext = createContext();

const initialTheme = "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    const themeSelected = e.target.value;
    if (themeSelected === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const initialValues = { theme, handleTheme };

  return (
    <ThemeContext.Provider value={initialValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
