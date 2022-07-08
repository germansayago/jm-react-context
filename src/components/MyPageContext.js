import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageProvider";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <div className="my-page">
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default MyPageContext;
