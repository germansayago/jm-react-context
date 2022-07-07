import React from "react";

const Header = ({ theme, handleTheme, texts, handleLanguage, language }) => {
  console.log(language);
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select onChange={handleLanguage}>
        <option value="es" selected={language === "es" ? true : false}>
          ES
        </option>
        <option value="en" selected={language === "en" ? true : false}>
          EN
        </option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        checked={theme === "light" ? true : false}
        value="light"
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        checked={theme === "dark" ? true : false}
        value="dark"
      />
      <label htmlFor="dark">{texts.headerDark}</label>
      <button>{texts.buttonLogin}</button>
      <button>{texts.buttonLogout}</button>
    </header>
  );
};

export default Header;
