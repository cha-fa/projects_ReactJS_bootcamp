import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

const SwitchButton = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    if (theme.currentMode === "lightMode") {
      theme.switchToDark();
    } else {
      theme.switchToLight();
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      {theme.currentMode === "lightMode"
        ? "Passer en mode nuit"
        : "Passer en mode jour"}
    </button>
  );
};

export default SwitchButton;
