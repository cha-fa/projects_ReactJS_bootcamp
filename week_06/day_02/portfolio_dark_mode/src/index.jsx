import { useState } from "react";
import ReactDOM from "react-dom";
import ThemeContext from "context/ThemeContext";
import Header from "components/Header";
import "./index.scss";
import Introduction from "components/Introduction";
import Works from "components/Works";
import Contact from "components/Contact";

const App = () => {
  const [currentMode, setCurrentMode] = useState("lightMode");

  return (
    <ThemeContext.Provider
      value={{
        currentMode,
        switchToLight: () => setCurrentMode("lightMode"),
        switchToDark: () => setCurrentMode("darkMode"),
      }}
    >
      <main className={currentMode}>
        <Header />
        <Introduction />
        <Works />
        <Contact />
      </main>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
