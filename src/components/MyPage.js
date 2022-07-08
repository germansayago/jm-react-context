import Header from "./Header";
import { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = false;
const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [auth, setAuth] = useState(initialAuth);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    const themeSelected = e.target.value;
    if (themeSelected === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
    const languageSelected = e.target.value;
    if (languageSelected === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const handleAuth = (e) => {
    // setAuth(!auth);
    if (!auth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  return (
    <div className="my-page">
      <Header
        auth={auth}
        handleAuth={handleAuth}
        handleLanguage={handleLanguage}
        handleTheme={handleTheme}
        language={language}
        texts={texts}
        theme={theme}
      />
      <Main auth={auth} theme={theme} texts={texts} />
      <Footer auth={auth} theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
