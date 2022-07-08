import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageProvider";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { auth, handleAuth } = useContext(AuthContext);
  const { language, handleLanguage, texts } = useContext(LanguageContext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select onChange={handleLanguage}>
        <option value="es" defaultValue={language === "es" ? "checked" : ""}>
          ES
        </option>
        <option value="en" defaultValue={language === "en" ? "checked" : ""}>
          EN
        </option>
      </select>
      <input
        type="radio"
        name="theme-context"
        id="light-context"
        onChange={handleTheme}
        value="light"
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme-context"
        id="dark-context"
        onChange={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      {auth ? (
        <button onClick={handleAuth}>{texts.buttonLogout}</button>
      ) : (
        <button onClick={handleAuth}>{texts.buttonLogin}</button>
      )}
    </header>
  );
};

export default HeaderContext;
