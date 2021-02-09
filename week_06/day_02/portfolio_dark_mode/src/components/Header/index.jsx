import { useContext } from "react";
import ThemeContext from "context/ThemeContext";
import SwitchButton from "components/Header/SwitchButton";
import HeaderTitle from "components/Header/HeaderTitle";
import GithubButton from "./GithubButton";

const Header = () => {
  const theme = useContext(ThemeContext);
  console.log("theme is", theme.currentMode);

  return (
    <div>
      <HeaderTitle />
      <SwitchButton />
      <GithubButton />
    </div>
  );
};

export default Header;
