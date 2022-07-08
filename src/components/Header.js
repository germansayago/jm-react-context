import React from "react";

const Header = ({
  auth,
  handleAuth,
  theme,
  handleTheme,
  texts,
  handleLanguage,
  language,
}) => {
  console.log(auth);
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
        name="theme"
        id="light"
        onChange={handleTheme}
        checked={theme === "light"}
        value="light"
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onChange={handleTheme}
        checked={theme === "dark"}
        value="dark"
      />
      <label htmlFor="dark">{texts.headerDark}</label>
      {auth ? (
        <button onClick={handleAuth}>{texts.buttonLogout}</button>
      ) : (
        <button onClick={handleAuth}>{texts.buttonLogin}</button>
      )}
    </header>
  );
};

export default Header;
