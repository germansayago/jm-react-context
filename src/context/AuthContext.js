import { useState, createContext } from "react";

const AuthContext = createContext();

const initialAuth = false;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (!auth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  const initialValues = { auth, handleAuth };

  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
