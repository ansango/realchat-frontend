import { useTheme } from "../../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../icons";
import { ButtonBase } from "./ButtonBase";

export const ButtonTheme = () => {
  const [colorTheme, setTheme] = useTheme();
  const onTheme = () => setTheme(colorTheme);
  return (
    <ButtonBase onClick={onTheme} kind={"blank"}>
      {colorTheme === "dark" ? (
        <SunIcon size={20} className="text-blue-200" />
      ) : (
        <MoonIcon size={20} className="text-blue-900" />
      )}
    </ButtonBase>
  );
};
