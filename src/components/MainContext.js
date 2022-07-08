import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageProvider";
import ThemeContext from "../context/ThemeContext";

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { auth } = useContext(AuthContext);
  const { texts } = useContext(LanguageContext);
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainWelcome}</p> : <p>{texts.mainHello}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
