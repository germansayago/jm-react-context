import React from "react";

const Main = ({ auth, theme, texts }) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainWelcome}</p> : <p>{texts.mainHello}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default Main;
