import { useTheme } from "../../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../icons";
import { ButtonBase } from "./ButtonBase";

export const ButtonTheme = () => {
  const [colorTheme, setTheme] = useTheme();

  const onTheme = () => {
    setTheme(colorTheme);
  };
  return (
    <ButtonBase onClick={onTheme} kind={"blank"}>
      {colorTheme === "dark" ? (
        <MoonIcon size={20} className="text-blue-900" />
      ) : (
        <SunIcon size={20} className="text-blue-200" />
      )}
    </ButtonBase>
  );
};
